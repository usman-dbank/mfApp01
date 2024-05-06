export const prefixFieldValues = <T extends Record<string, any>>(
  obj: T,
  keyPrefixes: Partial<Record<keyof T, string>>,
  commonPrefix: string
): T => {
  const mutatedObj: T = { ...obj };

  for (const key in mutatedObj) {
    if (Object.prototype.hasOwnProperty.call(mutatedObj, key) && key in keyPrefixes) {
      // Append prefix to the value associated with the key
      mutatedObj[key] = (keyPrefixes[key] + commonPrefix + mutatedObj[key]) as any;
    }
  }

  return mutatedObj;
};
