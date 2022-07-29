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
    link: {
      hash: "intro",
    },
  },
  {
    label: "Services",
    link: {
      hash: "services",
    },
  },
  {
    label: "Portfolio",
    link: {
      hash: "portfolio",
    },
  },
];

const MyShell = ({ children }: Props) => {
  return <AppShell header={<MyHeader links={links} />}>{children}</AppShell>;
};

export default MyShell;
