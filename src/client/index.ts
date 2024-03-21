import registerClient from '@tokopedia/skipper/client';
import { InitEventTrackerWithNR } from '@tokopedia/lite-tracker/dist/client/initEventTrackerWithNR';

import { getBlockMechanismEnv } from '@/helpers/block-3rd-party-pii/getBlockMechanismEnv';

const DEFAULT_PII_KEYS = getBlockMechanismEnv('defaultPIIKeys');
const CUSTOM_PII_KEYS = getBlockMechanismEnv('customPIIKeys');

/**
 * Skipper client entry point. Append any global variables or script
 * initialization in either `beforeRegister` or `afterRegister`.
 *
 * The difference between these functions:
 * `beforeRegister` will run before the document hydration process.
 * `afterRegister` will run after the document hydration process.
 *
 */
const client = registerClient({
  beforeRegister: async () => {
    InitEventTrackerWithNR({
      defaultPIIKeys: DEFAULT_PII_KEYS,
      customPIIKeys: CUSTOM_PII_KEYS,
    });
  },
  afterRegister: async () => {
    return;
  },
});

if (module.hot) {
  module.hot.accept();
}

export default client;
