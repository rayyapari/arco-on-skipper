const path = require('node:path');
const tsconfig = require('./tsconfig.json');

function resolveAlias() {
  const aliases = tsconfig.compilerOptions.paths || {};
  return Object.keys(aliases).reduce(
    (prev, current) => ({
      ...prev,
      [current]: Array.isArray(aliases[current]) ? aliases[current][0] : aliases[current],
    }),
    {},
  );
}

module.exports = {
  extends: '@tokopedia/eslint-config/react',
  root: true,
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        map: resolveAlias(),
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      webpack: {
        config: path.resolve(__dirname, 'import.resolver.js'),
      },
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
