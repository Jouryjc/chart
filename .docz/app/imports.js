export const imports = {
  'doc/bar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-bar" */ 'doc/bar.mdx'
    ),
  'doc/pie.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-pie" */ 'doc/pie.mdx'
    ),
}
