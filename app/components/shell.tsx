import { AppShell } from "@mantine/core";
import { MyFooter } from "./footer";
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
  return (
    <AppShell header={<MyHeader links={links} />} footer={<MyFooter />}>
      {children}
    </AppShell>
  );
};

export default MyShell;
