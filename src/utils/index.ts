import { useEffect, useState } from "react";

export const isFalse = (value: unknown) => (value === 0 ? true : !!value);

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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器，
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 处理上一次剩下的定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <V>(person: V[]) => {
  const [value, setValue] = useState(person);
  const clear = (): void => {
    setValue([]);
  };
  const removeIndex = (index: number): void => {
    const value1 = [...value];
    value1.splice(index, 1);
    setValue(value1);
  };
  const add = (item: V): void => {
    setValue([...value, item]);
  };

  return { value, clear, removeIndex, add };
};
