import { AppShell } from "@mantine/core";
import MyHeader, { type MyHeaderProps } from "./header";

type Props = React.PropsWithChildren<{}>;

const links: MyHeaderProps["links"] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "My Intro",
    link: "#intro",
  },
  {
    label: "Services",
    link: {
      pathname: "/",
      hash: "services",
    },
  },
  {
    label: "Portfolio",
    link: "#portfolio",
  },
];

const MyShell = ({ children }: Props) => {
  return (
    <AppShell
      header={<MyHeader links={links} />}
      styles={{
        main: {
          padding: 0,
        },
      }}
    >
      {children}
    </AppShell>
  );
};

export default MyShell;
