import { useEffect, useState } from "react";

export const isFalse = (value: any) => (value === 0 ? true : !!value);

export const cleanObject = (obj: object) => {
  const result = {};
  for (const key of Object.keys(obj)) {
    // @ts-ignore
    const value = obj[key];
    // @ts-ignore
    if (isFalse(value)) result[key] = value;
  }
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器，
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 处理上一次剩下的定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
