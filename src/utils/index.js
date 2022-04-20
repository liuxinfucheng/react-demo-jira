export const isFalse = (value) => (value === 0 ? true : !!value);

export const cleanObject = (obj) => {
  const result = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (isFalse(value)) result[key] = value;
  }
  return result;
};
