/**
 * Public path of a page. Static builds with `build.format: "file"` expose
 * `Astro.url.pathname` as `/blog/post.html` or `/index.html`, while the site
 * is served without extensions.
 */
export function pagePath(url: URL): string {
  const path = url.pathname.replace(/\.html$/, "").replace(/\/index$/, "");
  return path === "" ? "/" : path;
}
