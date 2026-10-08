import { HeroExperience } from "@/components/hero-experience"
import { SiteHeader } from "@/components/site-header"
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
      <SiteHeader />
      <main id="top" className="w-full overflow-x-clip">
        <HeroExperience />
        <StorySections />
      </main>
    </>
  )
}
