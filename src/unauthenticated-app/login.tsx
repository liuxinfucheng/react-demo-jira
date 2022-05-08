import React, { FormEvent } from "react";
import * as qs from "qs";
import { useAuth } from "context/auth-context";
import { Input } from "antd";
import { useAsync } from "utils/use-async";

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    run(login({ username, password })).catch((e) => onError(e));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">用户名</label>
        <Input className="margin-10" type="text" id="userName" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <Input className="margin-10" type="password" id="password" />
      </div>
      <button className="margin-10" type="submit">
        登录
      </button>
    </form>
  );
};
