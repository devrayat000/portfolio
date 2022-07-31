import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Button,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { NavLink, type NavLinkProps } from "@remix-run/react";
import IconBrand from "~/icons/brand";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

export interface MyHeaderProps {
  links: { link: NavLinkProps["to"]; label: string }[];
}

export default function MyHeader({ links }: MyHeaderProps) {
  const [opened, toggleOpened] = useToggle([false, true]);
  const { classes } = useStyles();

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <IconBrand size={36} />
        <Group spacing={5} className={classes.links}>
          {links.map((link) => (
            <Button
              key={link.label}
              component={NavLink}
              to={link.link}
              variant="subtle"
            >
              {link.label}
            </Button>
          ))}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
