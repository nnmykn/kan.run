import { Title } from "solid-start";
import { Link } from "@solidjs/router";
import { styled } from "solid-styled-components";
import { AppLayout } from "~/layouts/app-layout";
import { createSignal, onMount, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";

const Container = styled.div`
  display: block;
  width: 60vw;
  height: 80vh;
  margin: 0 auto;
  padding-top: 9rem;
  font-family: "Noto Sans JP", sans-serif;
`;

const Header = styled.header`
  font-weight: 500;
  color: #eeeff18b;
  font-size: 1rem;
  line-height: 1.5rem;
  .icon {
    width: 5rem;
    height: 5rem;
    border-radius: 13px;
  }
`;

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Header>
          <Link href="/">
            <img src="https://github.com/nnmykn.png" class="icon" />
          </Link>
          <p>RouteXでSmartAcceptというデジタル士業事務所を開発しています。</p>
        </Header>
      </Container>
    </AppLayout>
  );
}
