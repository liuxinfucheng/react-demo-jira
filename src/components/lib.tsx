import styled from "@emotion/styled";
import { Spin, Typography } from "antd";
import React from "react";

export const Row = styled.div<{
  gap?: number | boolean;
}>`
  display: flex;
  align-items: center;
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "px"
        : props.gap
        ? "20px"
        : undefined};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullPageLoading = () => (
  <FullPage>
    <Spin size="large" />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </FullPage>
);
