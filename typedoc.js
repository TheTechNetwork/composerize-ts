module.exports = {
  exclude: ['test/**'],
  entryPoints: ['src/index.ts', 'src/types.ts'],
  excludeInternal: true,
  out: 'docs',
  plugin: 'typedoc-plugin-markdown',
};
