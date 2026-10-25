import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { SITE } from "@/data/site";

const WIDTH = 1200;
const HEIGHT = 630;

const require = createRequire(import.meta.url);

const loadFont = (file: string) =>
  readFile(require.resolve(`@fontsource/inter/files/${file}`));

const fonts = Promise.all([
  loadFont("inter-latin-400-normal.woff"),
  loadFont("inter-latin-500-normal.woff"),
]).then(([regular, medium]) => [
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
]);

type OgImageOptions = {
  title: string;
  subtitle?: string;
};

/** Renders a 1200x630 PNG Open Graph card in the site's visual style. */
export async function renderOgImage({
  title,
  subtitle,
}: OgImageOptions): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#fdfdfc",
          color: "#1c1c1a",
          fontFamily: "Inter",
        },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: 28, fontWeight: 500 },
              children: SITE.name,
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 20 },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 60,
                      fontWeight: 500,
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    },
                    children: title,
                  },
                },
                subtitle && {
                  type: "div",
                  props: {
                    style: { fontSize: 28, color: "#73736e" },
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
