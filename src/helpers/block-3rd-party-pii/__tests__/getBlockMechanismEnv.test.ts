import { getBlockMechanismEnv } from '@/helpers/block-3rd-party-pii/getBlockMechanismEnv';
import { setExpectedConsole } from '@wpe-tkpd/testing';

describe('Testing Generate ENV On CSR', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Enable get env (positive case)', () => {
    process.env.LITE_PUBLIC_DEFAULT_PII_KEYS = '["userId"]';
    process.env.LITE_PUBLIC_CUSTOM_PII_KEYS = '[{"pageType":"kategori-lainnya","excludedKeys":["promotions"]}]';

    expect(getBlockMechanismEnv('customPIIKeys')).toStrictEqual([
      {
        excludedKeys: ['promotions'],
        pageType: 'kategori-lainnya',
      },
    ]);
    expect(getBlockMechanismEnv('defaultPIIKeys')).toStrictEqual(['userId']);
  });

  it('Should be return default value when env variables is not correct (negative case)', () => {
    // We expect this test case will print console.error with a message like "Unexpected token R". To prevent the console.error from flooding the test log, we will mock it.
    // But we cannot mock `console.error` completely. If we do so, and there is legitimate error in Jest, we will lose the error too because Jest uses JSDOM and JSDOM uses console.error to write the error.
    // To get the best of both worlds (a legit error can still appear in the test log while the expected console.error from this case is hidden), we use conditional console.error mock by using a helper called `setExpectedConsole`.
    const [expectConsoleCalled, restoreConsoleMock] = setExpectedConsole(
      // Mock for `console.error`
      'error',
      // If the message matches this regex, mock it so the message does not appear.
      /Unexpected token R/,
    );

    process.env.LITE_PUBLIC_DEFAULT_PII_KEYS = 'Random String Value';
    process.env.LITE_PUBLIC_CUSTOM_PII_KEYS = 'Random String Value';

    expect(getBlockMechanismEnv('customPIIKeys')).toStrictEqual([]);
    expect(getBlockMechanismEnv('defaultPIIKeys')).toStrictEqual([]);

    // Assert the console.error mocks is called because we expect it is called with the expected message in this test case
    expectConsoleCalled();

    // Cleanup. Restore the console.error mocking in this case.
    // console.error is a global function. If we mock it in a case and does not clean it up properly. console.error usage in other test cases will be affected. Causing the test to violated Isolated principle. It means if there is problem, we cannot pinpoint the root cause because the test cases affect each others. Restoring the mock keeps the Isolated principle so we are confident the test case does not affect each others.
    restoreConsoleMock();
  });
});
