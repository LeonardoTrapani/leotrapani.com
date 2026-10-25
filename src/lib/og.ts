import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { SITE } from "@/data/site";

const WIDTH = 1200;
const HEIGHT = 630;

// Mirrors the light theme tokens in src/styles/global.css.
const COLORS = {
  background: "#ffffff",
  strong: "#1a1a1a",
  muted: "#737373",
};

const require = createRequire(import.meta.url);

const loadFont = (path: string) => readFile(require.resolve(path));

const fonts = Promise.all([
  loadFont("@fontsource/inter/files/inter-latin-400-normal.woff"),
  loadFont("@fontsource/inter/files/inter-latin-500-normal.woff"),
  loadFont("@fontsource/newsreader/files/newsreader-latin-400-italic.woff"),
]).then(([regular, medium, serifItalic]) => [
  {
    name: "Inter",
    data: regular,
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Inter",
    data: medium,
    weight: 500 as const,
    style: "normal" as const,
  },
  {
    name: "Newsreader",
    data: serifItalic,
    weight: 400 as const,
    style: "italic" as const,
  },
]);

type OgImageOptions = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: boolean;
};

/** Renders a 1200x630 PNG Open Graph card in the site's visual style. */
export async function renderOgImage({
  eyebrow = SITE.name,
  title,
  subtitle,
  accent = false,
}: OgImageOptions): Promise<Uint8Array<ArrayBuffer>> {
  const titleStyle = accent
    ? {
        fontFamily: "Newsreader",
        fontStyle: "italic",
        fontSize: 76,
        lineHeight: "84px",
      }
    : {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 60,
        lineHeight: "72px",
        letterSpacing: "-0.02em",
      };

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          // Satori defaults to content-box, so padding would grow the canvas.
          boxSizing: "border-box",
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px 96px",
          backgroundColor: COLORS.background,
          color: COLORS.strong,
          fontFamily: "Inter",
        },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: 28, fontWeight: 500 },
              children: eyebrow,
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 24 },
              children: [
                {
                  type: "div",
                  props: {
                    style: { ...titleStyle, maxWidth: 960 },
                    children: title,
                  },
                },
                subtitle && {
                  type: "div",
                  props: {
                    style: { fontSize: 28, color: COLORS.muted },
                    children: subtitle,
                  },
                },
              ].filter(Boolean),
            },
          },
        ],
      },
    },
    { width: WIDTH, height: HEIGHT, fonts: await fonts }
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } })
    .render()
    .asPng();
  return new Uint8Array(png);
}
