import React, { FormEvent } from "react";
import * as qs from "qs";
import { useAuth } from "context/auth-context";
import { Input } from "antd";

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    const cpassword = (event.currentTarget.elements[2] as HTMLInputElement)
      .value;

    if (cpassword !== password) return onError(new Error("请确认两次密码相同"));
    register({ username, password }).catch((e) => onError(e));
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
      <div>
        <label htmlFor="password">确认密码</label>
        <Input className="margin-10" type="password" id="cpassword" />
      </div>
      <button className="margin-10" type="submit">
        注册
      </button>
    </form>
  );
};
