import React, { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsregister] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  return (
    <Container>
      <div>
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <div>
          {error ? (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          ) : null}
        </div>
        <Button type="primary" onClick={() => setIsregister(!isRegister)}>
          切换到{isRegister ? "登录" : "注册"}
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .margin-10 {
    margin: 10px 0;
  }
`;
