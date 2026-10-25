const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
  "&nbsp;": " ",
};

/**
 * Converts the small subset of HTML used by the home prose (paragraphs, links,
 * emphasis) to Markdown, so llms.txt can reuse the rendered copy verbatim.
 */
export function proseToMarkdown(html: string, baseUrl: string): string {
  return html
    .replace(/<svg[\s\S]*?<\/svg>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(
      /<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g,
      (_, href: string, text: string) => `[${text}](${new URL(href, baseUrl)})`
    )
    .replace(/<em\b[^>]*>([\s\S]*?)<\/em>/g, "*$1*")
    .replace(/<\/p>/g, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&[#\w]+;/g, (entity) => ENTITIES[entity] ?? entity)
    .split("\n\n")
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n\n");
}
