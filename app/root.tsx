import { MantineProvider } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MyShell from "./components/shell";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Zul - My Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          // withCSSVariables
          theme={{
            colorScheme: "light",
            primaryColor: "orange",
          }}
        >
          <MyShell>
            <Outlet />
          </MyShell>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
