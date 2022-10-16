import { Link } from "@solidjs/router";
import { styled } from "solid-styled-components";
import { AppLayout } from "~/layouts/app-layout";

const Container = styled.div`
  display: block;
  width: 60vw;
  margin: 0 auto;
  padding-top: 9rem;
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  @media screen and (max-width: 800px) {
    padding-top: 6rem;
    width: 95vw;
  }
`;

const Header = styled.header`
  font-weight: 500;
  color: #333;
  font-size: 1rem;
  line-height: 2rem;
  .icon {
    width: 5rem;
    height: 5rem;
    border-radius: 13px;
    margin-bottom: 0.8rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 800;
  }
  a {
    color: #333;
    cursor: pointer;
  }
`;

const Main = styled.main``;

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Header>
          <Link href="/">
            <img src="/icon-super-mini.png" class="icon" />
          </Link>
          <h1>二宮 貫(Kan Ninomiya)</h1>
          <p>
            <Link href="https://routex.jp/">RouteX</Link>で
            <Link href="https://smartaccept.jp/">SmartAccept</Link>
            というデジタル士業事務所を開発しています。
          </p>
        </Header>
        <Main></Main>
      </Container>
    </AppLayout>
  );
}
