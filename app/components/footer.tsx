import { createStyles, Group, ActionIcon, Footer, Text } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons";
import IconBrand from "~/icons/brand";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors[theme.primaryColor][9],
    borderTop: 0,
  },

  inner: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.md}px`,
  },
  text: {
    maxWidth: "72ch",
    textAlign: "center",
    color: theme.white,
  },
}));

export function MyFooter() {
  const { classes, theme } = useStyles();

  return (
    <Footer height="auto" className={classes.footer}>
      <Group className={classes.inner}>
        <IconBrand size={40} variant="dark" />

        <Text mt="md" component="p" className={classes.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          asperiores itaque dolorem ullam nihil ducimus iste, nesciunt minus
          numquam tempore placeat ipsa sequi nulla corrupti!
        </Text>

        <Group spacing="xl" position="right" noWrap>
          <ActionIcon
            color={theme.primaryColor}
            size="lg"
            variant="filled"
            radius="xl"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            color={theme.primaryColor}
            size="lg"
            variant="filled"
            radius="xl"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            color={theme.primaryColor}
            size="lg"
            variant="filled"
            radius="xl"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            color={theme.primaryColor}
            size="lg"
            variant="filled"
            radius="xl"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>

        <Text mt="xl" color="white">
          All Right Reserved
        </Text>
      </Group>
    </Footer>
  );
}
