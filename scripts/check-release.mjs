import assert from "node:assert/strict"

const base = new URL(process.argv[2] || "http://localhost:3001")
const expectedOrigin = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).origin
  : null
const expectIndex = process.env.EXPECT_INDEXABLE === "true"

async function get(path, contentType) {
  const response = await fetch(new URL(path, base))
  assert.equal(response.status, 200, `${path} must return 200`)
  if (contentType)
    assert.ok(
      response.headers.get("content-type")?.includes(contentType),
      `${path}: incorrect content type`
    )
  return response
}

const response = await get("/", "text/html")
const html = await response.text()
assert.equal(response.headers.get("x-content-type-options"), "nosniff")
assert.equal(response.headers.get("x-powered-by"), null)
assert.equal((html.match(/<h1\b/g) || []).length, 1)
assert.ok(html.includes("summary_large_image"))
assert.ok(html.includes("/social/pavo-og.jpg"))
assert.ok(html.includes('content="1200"') && html.includes('content="630"'))
assert.ok(
  !html.includes("Illustrative lesson example") &&
    !html.includes("App preview ·")
)
assert.ok(
  !html.includes("Pause PAVO animation") &&
    !html.includes("Play PAVO animation")
)
const robotsMeta = html.match(/<meta name="robots" content="([^"]+)"/u)?.[1]
assert.equal(robotsMeta, expectIndex ? "index, follow" : "noindex, nofollow")
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/gu)) {
  assert.ok(html.includes(`id="${anchor}"`), `Broken anchor #${anchor}`)
}

const robots = await (await get("/robots.txt", "text/plain")).text()
const sitemap = await (await get("/sitemap.xml", "application/xml")).text()
if (expectIndex) {
  assert.ok(
    expectedOrigin,
    "Pass SITE_URL when checking an indexable deployment"
  )
  assert.ok(html.includes(`rel="canonical" href="${expectedOrigin}/"`))
  assert.ok(html.includes("application/ld+json"))
  assert.ok(robots.includes(`Sitemap: ${expectedOrigin}/sitemap.xml`))
  assert.ok(sitemap.includes(`<loc>${expectedOrigin}/</loc>`))
  assert.ok(!html.includes("http://localhost:3000/social"))
} else {
  assert.ok(robots.includes("Disallow: /"))
  assert.ok(!sitemap.includes("<loc>"))
}

const manifest = await (await get("/manifest.webmanifest")).json()
assert.equal(manifest.short_name, "PAVO")
for (const icon of manifest.icons) await get(icon.src, "image/png")
for (const size of [16, 32, 48])
  await get(`/icons/icon-${size}.png`, "image/png")
await get("/apple-icon.png", "image/png")
await get("/favicon.ico", "image/")
await get("/social/pavo-og.jpg", "image/jpeg")
await get("/screens/library.webp", "image/webp")
assert.equal(
  (await fetch(new URL("/missing-page-release-check", base))).status,
  404
)
console.log(
  `Release smoke checks passed: ${base.origin} (${expectIndex ? "public indexing" : "noindex preview"}).`
)
