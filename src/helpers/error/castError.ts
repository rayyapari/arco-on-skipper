/**
 * Return an Error object from an error.
 * An error in Javascript is not always an instance of Error class. This helper converts the error into an Error object so you can always manipulate it as an Error object
 * @param {unknown} e - error
 * @returns {Error}
 */
export const castError = (e: unknown): Error => {
  if (typeof e !== 'undefined' && e instanceof Error) return e;
  if (typeof e === 'string') return new Error(e);

  return new Error(`Unknown error: ${e}`);
};
