// We commonly strip out `devDependencies` in our CI/CD to slimming down the service sizes,
// In order to do that, we want to avoid running `husky install` in CI/Docker/Prod, and silently throw the erorr if the module not found.
try {
  const isCi = process.env.CI !== undefined || process.env.NODE_ENV === 'production' || process.env.E2E === '1';
  if (!isCi) {
    require('husky').install();
  }
} catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') throw e;
}
