import { useEffect, useRef, useState } from "react";

export const isFalse = (value: unknown) => (value === 0 ? true : !!value);

export const cleanObject = (obj: { [key: string]: unknown }) => {
  const result: { [key: string]: unknown } = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
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

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, []);
};
