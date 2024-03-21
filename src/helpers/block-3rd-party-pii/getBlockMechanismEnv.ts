import type { SoftBlockPIIKeysRulesType } from '@tokopedia/lite-tracker/dist/types';

import { castError } from '@/helpers/error/castError';

type BlockMechanismEnvType = {
  defaultPIIKeys: string[];
  customPIIKeys: SoftBlockPIIKeysRulesType[];
};

const getEnv = (): BlockMechanismEnvType => {
  const response: BlockMechanismEnvType = {
    customPIIKeys: [],
    defaultPIIKeys: [],
  };

  /**
   * Get Default PII Keys
   */
  try {
    const defaultPIIKeys = JSON.parse(`${process.env.LITE_PUBLIC_DEFAULT_PII_KEYS}`);
    if (typeof defaultPIIKeys === 'object' && defaultPIIKeys) {
      response.defaultPIIKeys = defaultPIIKeys as string[];
    }
  } catch (e) {
    const { message } = castError(e);
    console.error(`[ERROR]: getEnv - ${message}`);
  }

  /**
   * Get Custom PII Keys
   */
  try {
    const customPIIKeys = JSON.parse(`${process.env.LITE_PUBLIC_CUSTOM_PII_KEYS}`);
    if (typeof customPIIKeys === 'object' && customPIIKeys) {
      response.customPIIKeys = customPIIKeys as SoftBlockPIIKeysRulesType[];
    }
  } catch (e) {
    const { message } = castError(e);
    console.error(`[ERROR]: getEnv - ${message}`);
  }

  return response;
};

/**
 * Get 3rd Party Block Mechanism Env Based On Key Name
 *
 * @param {K} keyname - keyname object
 * @returns {BlockMechanismEnvType[K]}
 */
export function getBlockMechanismEnv<K extends keyof BlockMechanismEnvType>(key: K): BlockMechanismEnvType[K] {
  return getEnv()[key];
}
