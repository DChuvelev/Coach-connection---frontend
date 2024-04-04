function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x;
}

export const copyCommonKeys = (
  fromObject: Object,
  toObject: Object
): number => {
  let numOfKeysCopied = 0;
  Object.assign(toObject, fromObject);
  return numOfKeysCopied;
};
