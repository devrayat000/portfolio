import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Box,
} from "@mantine/core";

import dp from "~/assets/dp.png";
import MyTags from "./tags";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.colors.gray[2]
        : theme.colors.dark[7],
    position: "relative",
  },
  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HeroSection() {
  const { classes, theme } = useStyles();

  return (
    <Box py="xl" className={classes.container}>
      <Container p="xl">
        <Group position="apart" py="xl">
          <div className={classes.content}>
            <Text color={theme.colors[theme.primaryColor][6]} size="xl">
              Hi, I am
            </Text>
            <Title className={classes.title}>Zul Ikram Musaddik Rayat</Title>
            <Text size="xl" weight={600}>
              Full Stack Web Developer
            </Text>
            <Text color="dimmed" mt="md" component="p">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Download CV
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Contact Me
              </Button>
            </Group>
          </div>
          <Image src={dp} className={classes.image} />
        </Group>
      </Container>

      <MyTags />
    </Box>
  );
}
