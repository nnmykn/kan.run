import { Suspense } from "solid-js";
import {
  ErrorBoundary,
  Body,
  FileRoutes,
  Html,
  Head,
  Routes,
  Scripts,
  Meta,
  Link,
  Title,
} from "solid-start";
import { SolidNProgress } from "solid-progressbar";

import "./style/global.css";

export default function Root() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
        <Title>二宮 貫(Kan Ninomiya)</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Meta property="og:url" content="https://kan.run/" />
        <Meta property="og:title" content="二宮 貫(Kan Ninomiya)" />
        <Meta
          property="og:description"
          content="RouteXでSmartAcceptを作っている二宮貫です。"
        />
        <Meta property="og:type" content="website" />
        <Meta property="og:image" content="https://kan.run/ogp.png" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <SolidNProgress color="#ff3e3e" />
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
