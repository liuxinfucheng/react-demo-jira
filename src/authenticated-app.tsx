import React from "react";
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { Row } from "./components/lib";
import { Button, Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();

  const items = [
    {
      label: (
        <Button type="link" onClick={logout}>
          登出
        </Button>
      ),
      key: 1,
    },
  ];

  return (
    <Main>
      <HeaderWrap>
        <PageHeader gap={true}>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </PageHeader>
        <Dropdown overlay={<Menu items={items} />}>
          <Button onClick={(e) => e.preventDefault()}>Hi, {user?.name}</Button>
        </Dropdown>
      </HeaderWrap>
      <div>
        <ProjectListScreen />
      </div>
    </Main>
  );
};

const PageHeader = styled(Row)``;

const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;
