export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   * @example "@leotrapani" - Users can install components with: `npx shadcn add @leotrapani/utils`
   * @see https://ui.shadcn.com/docs/registry/namespace#overview
   */
  namespace: process.env.REGISTRY_NAMESPACE || "@leotrapani",
  /**
   * URL pattern for resolving namespaced components
   * The {name} placeholder will be replaced with the component name
   * @example "https://leotrapani.com/r/{name}.json" resolves to "https://leotrapani.com/r/wheel-picker.json"
   * This tells shadcn CLI where to fetch component definitions when installing with namespace prefix
   * @see https://ui.shadcn.com/docs/registry/namespace#url-pattern-system
   */
  namespaceUrl:
    process.env.REGISTRY_NAMESPACE_URL ||
    "https://leotrapani.com/r/{name}.json",
};
