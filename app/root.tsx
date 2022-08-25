import { useEffect } from "react";
import { Global, MantineProvider, ScrollArea } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { StylesPlaceholder } from "@mantine/remix";

import MyShell from "./components/shell";
import apiServer from "./services/api.server";
import { LazyMotion } from "framer-motion";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Zul - My Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const fbclid = url.searchParams.get("fbclid");

  if (fbclid) {
    await apiServer.AddVisitor({ uid: fbclid });
  }

  const data = await apiServer.GetVisitorCount();

  return { visitorCount: data.visitors.length };
}

export default function App() {
  const location = useLocation();
  const { scrollableRef, targetRef, cancel, scrollIntoView } =
    useScrollIntoView();

  useEffect(() => {
    if (location.hash) {
      targetRef.current =
        document.querySelector(location.hash) ?? document.body;
      scrollIntoView();
    }

    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables={process.env.NODE_ENV === "production"}
      theme={{
        colorScheme: "light",
        primaryColor: "violet",
      }}
    >
      <html lang="en">
        <head>
          <Meta />
          <Links />
          <StylesPlaceholder />
        </head>
        <body>
          <Global
            styles={{
              "html, body": {
                overflowY: "hidden",
              },
            }}
          />
          <ScrollArea
            sx={{ height: "100vh" }}
            styles={{ viewport: { scrollBehavior: "smooth" } }}
            type="scroll"
            viewportRef={scrollableRef}
          >
            <MyShell>
              <LazyMotion
                strict
                features={() =>
                  import("framer-motion").then((m) => m.domAnimation)
                }
              >
                <Outlet key={location.key} />
              </LazyMotion>
            </MyShell>
          </ScrollArea>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
