import type { MetadataRoute } from "next"
import { siteDescription } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PAVO — Learning that stays with you",
    short_name: "PAVO",
    description: siteDescription,
    lang: "en-PH",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0066cc",
    icons: [192, 512].map((size) => ({
      src: `/icons/icon-${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
      purpose: "any",
    })),
  }
}
