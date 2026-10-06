# PAVO website

Next.js App Router landing page. Nunito, Tailwind utilities, Base UI primitives,
and Motion. This repository is the public product website, not the Android app.

## Run locally

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

## Prepare a release

Set `SITE_URL` to the real public HTTPS origin in the deployment environment
**before building**. See `.env.example`. Set `SITE_INDEXABLE=false` on self-hosted
staging; Vercel preview deployments are automatically excluded from indexing.
Without a domain, the site builds as a noindex preview with an empty sitemap.
Never deploy that preview build as the public release: set the domain and rebuild.

```powershell
pnpm lint
pnpm typecheck
pnpm audit --prod
pnpm build
pnpm start --port 3001
```

In a second terminal, check the preview:

```powershell
node scripts/check-release.mjs http://localhost:3001
```

For the configured public build, set `SITE_URL` to the same real origin and
`EXPECT_INDEXABLE=true` in the checking terminal, then run the same command.
It checks HTML metadata, canonical URL, robots, sitemap, structured data, icons,
social image, anchor targets, response headers, and the 404 response.

Vercel: use the Next.js preset, frozen pnpm installation, `pnpm build`, and the
production-only `SITE_URL`. A custom domain, DNS/TLS, and live indexing checks are
deployment steps; no deployment is performed by the code changes alone.

## Release notes

See [production review](docs/PRODUCTION_REVIEW.md) for the file inventory,
asset provenance, verification results, and remaining release requirements.
