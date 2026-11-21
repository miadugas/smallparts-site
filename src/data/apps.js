import palettarium from "../assets/palettarium.webp";
import nearlyDeparted from "../assets/nearly-departed.webp";

// Approved on the App Store, not yet released publicly.
// When an app goes live, set its `href` to the App Store URL and the
// badge becomes a real, tappable link automatically. Leave `href` null = "Coming soon".
export const apps = [
  {
    id: "palettarium",
    name: "The Palettarium",
    line: "Color, arranged like a solar system.",
    platform: "iOS",
    href: "https://apps.apple.com/us/app/the-palettarium/id6818369942",
    image: palettarium,
    alt: "The Palettarium iOS app showing a color palette rendered as a planet with orbiting swatches",
    width: 604,
    height: 1313,
  },
  {
    id: "departed",
    name: "Nearly Departed",
    line: "The notable dead, nearby.",
    platform: "iOS",
    href: "https://apps.apple.com/us/app/nearly-departed/id6802525537",
    image: nearlyDeparted,
    alt: "Nearly Departed iOS app map of notable people buried nearby",
    width: 590,
    height: 1240,
  },
];
