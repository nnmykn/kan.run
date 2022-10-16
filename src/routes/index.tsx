import { Title } from "solid-start";
import { styled } from "solid-styled-components";
import { AppLayout } from "~/layouts/app-layout";
import { createSignal, onMount, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";

const Container = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <p>Hello!</p>
      </Container>
    </AppLayout>
  );
}
