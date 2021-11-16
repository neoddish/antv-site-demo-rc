export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  umd: { name: 'AntVSiteDemoRC', minFile: true, file: 'index' },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  runtimeHelpers: true,
};
