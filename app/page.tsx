import { HeroExperience } from "@/components/hero-experience"
import { StorySections } from "@/components/story-sections"
import { siteDescription, siteUrl } from "@/lib/site"

export default function Page(): React.JSX.Element {
  return (
    <>
      {siteUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PAVO",
              url: siteUrl.href,
              description: siteDescription,
              inLanguage: "en-PH",
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <a
        href="#learning"
        className="sr-only z-50 rounded-xl bg-primary text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:p-4"
      >
        Skip to learning experience
      </a>
      <main id="top" className="w-full overflow-x-clip">
        <HeroExperience />
        <StorySections />
      </main>
    </>
  )
}
