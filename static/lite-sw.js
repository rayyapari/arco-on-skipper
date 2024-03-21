/* eslint-disable no-restricted-globals */
// NOTE: This file will be minified by terser using rules ecma: 5
// DO NOT add any trailing commas to arrays, objects, or function args
import {
  registerRoute,
  NavigationRoute,
  clientsClaim,
  precacheAndRoute,
  cleanupOutdatedCaches,
  onInstall,
  onMessage,
  onActivate,
  generateAppShell,
  appShellNavigationStrategy,
  initDataCacheHandler,
  logger,
} from '@tokopedia/skipper/sw';

/**
 * @Note These values will be injected by webpack DefinePlugin on build time.
 * All values prefix with `__SW` come from additional webpack DefinePlugin when
 * you enable service worker via `skipper.config.js`. DO NOT expect these values on
 * server or client code. its only available inside service worker scope.
 */
const BLACKLISTED_ROUTES = process.env.SKIPPER_SERVICE_WORKER_BLACKLISTED_ROUTES;
const OFFLINE_SHELL_PATH = process.env.__SW_OFFLINE_SHELL_PATH__;
// PUBLIC_PATH_REGEX is string url where to store your public assets.
// eslint-disable-next-line no-unused-vars
const PUBLIC_PATH_REGEX = process.env.__SW_PUBLIC_PATH_REGEX__;
const SERVICE_NAME = process.env.SKIPPER_SERVICE_NAME;
const VERSION = process.env.__SW_REVISION__;
const OFFLINE_EXP_CACHE_URL = process.env.SKIPPER_OFFLINE_EXP_URL;
const OFFLINE_EXP_CACHE_WHITELIST = process.env.SKIPPER_OFFLINE_EXP_WHITELIST;
const OFFLINE_EXP_ENABLED = process.env.SKIPPER_OFFLINE_EXP_ENABLED;

/**
 * @function getBlacklistedRoutes
 * @returns {RegExp[]}
 */
function getBlacklistedRoutes() {
  try {
    const routesRegexp = BLACKLISTED_ROUTES.map(route => new RegExp(route));
    return routesRegexp;
  } catch (error) {
    console.error("[getBlacklistedRoutes]: Fail to get 'BLACKLISTED_ROUTES' regexp");
    console.error(error);
    return [];
  }
}

/**
 * @function initSW
 * @returns {void}
 */
function initSW() {
  logger.init(SERVICE_NAME, __DEV__);

  precacheAndRoute(self.__PRECACHE_MANIFEST, {});
  cleanupOutdatedCaches();

  const navigationRoute = new NavigationRoute(
    appShellNavigationStrategy({
      service: SERVICE_NAME,
      offlineShellPath: OFFLINE_SHELL_PATH,
      version: VERSION,
      enableOfflineExp: OFFLINE_EXP_ENABLED,
    }),
    {
      denylist: getBlacklistedRoutes(),
    },
  );

  registerRoute(navigationRoute);

  self.addEventListener('install', event => {
    onInstall({
      self: self,
      service: SERVICE_NAME,
      version: VERSION,
    });
    event.waitUntil(generateAppShell({ service: SERVICE_NAME, version: VERSION }));
  });

  self.addEventListener('message', ({ data }) => {
    onMessage({
      self: self,
      data: data,
      version: VERSION,
    });
  });

  self.addEventListener('activate', () => {
    onActivate({
      self: self,
      service: SERVICE_NAME,
      version: VERSION,
    });
  });

  initDataCacheHandler({
    whitelist: OFFLINE_EXP_CACHE_WHITELIST,
    service: SERVICE_NAME,
    self,
    apiPath: OFFLINE_EXP_CACHE_URL,
    enabled: OFFLINE_EXP_ENABLED,
  });

  if (__DEV__) {
    clientsClaim();
  }
}

if (!/(tkp-e2e-automation|firefox)/i.test(navigator.userAgent)) {
  initSW();
}
