import { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

const Container = styled.div`
  background-color: #dfeaec;
  min-height: 100vh;
`;

export const AppLayout: Component<{ children: JSX.Element }> = (props) => {
  return <Container>{props.children}</Container>;
};
