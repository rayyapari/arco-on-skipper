import { castError } from '@/helpers/error/castError';

describe('castError', () => {
  it.each`
    title                | parameter                           | resultErrorMessage
    ${'is string'}       | ${'Sample Error String'}            | ${'Sample Error String'}
    ${'is error object'} | ${new Error('Sample Error Object')} | ${'Sample Error Object'}
    ${'is number'}       | ${0}                                | ${'Unknown error: 0'}
    ${'is undefined'}    | ${undefined}                        | ${'Unknown error: undefined'}
    ${'is null'}         | ${null}                             | ${'Unknown error: null'}
  `('Testing castingError with parameter $title', ({ parameter, resultErrorMessage }) => {
    const { message } = castError(parameter);

    expect(message).toBe(resultErrorMessage);
  });
});
