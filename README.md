# PAVO website

Next.js App Router landing page. Nunito, Tailwind utilities, Base UI primitives,
and Motion. This repository is the public product website, not the Android app.

## Run locally

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

## Prepare a release

The public origin defaults to `https://www.trypavo.cloud`. Override `SITE_URL`
before building only when the domain changes. See `.env.example`.
Set `SITE_INDEXABLE=false` on self-hosted staging. Development and Vercel preview
deployments automatically use noindex and an empty sitemap.

```powershell
pnpm lint
pnpm typecheck
pnpm audit --prod
pnpm build
pnpm start --port 3000
```

Stop the development server before starting production on the same port.
In a second terminal, check the production build:

```powershell
$env:EXPECT_INDEXABLE="true"
node scripts/check-release.mjs http://localhost:3000
```

If overriding the public origin, use the same `SITE_URL` in the checking terminal.
For development or staging checks, omit `EXPECT_INDEXABLE`.
It checks HTML metadata, canonical URL, robots, sitemap, structured data, icons,
social image, anchor targets, response headers, and the 404 response.

Vercel: use the Next.js preset, frozen pnpm installation, `pnpm build`, and the
production-only `SITE_URL`. A custom domain, DNS/TLS, and live indexing checks are
deployment steps; no deployment is performed by the code changes alone.

## Release notes

See [production review](docs/PRODUCTION_REVIEW.md) for the file inventory,
asset provenance, verification results, and remaining release requirements.
