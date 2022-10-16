import { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

const Container = styled.div`
  background-color: #1a1e2e;
  min-height: 100vh;
`;

export const AppLayout: Component<{ children: JSX.Element }> = (props) => {
  return <Container>{props.children}</Container>;
};
