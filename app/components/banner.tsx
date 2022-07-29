import {
  createStyles,
  Container,
  Title,
  Box,
  Button,
  Center,
} from "@mantine/core";
import { Link } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][5]
        : theme.fn.rgba(theme.colors[theme.primaryColor][4], 0.35),
    position: "relative",
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  title: {
    color: theme.colorScheme === "light" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 500,
    textTransform: "capitalize",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
    },
  },
  grid: {
    marginTop: theme.spacing.xl * 2,
  },
}));

export default function BannerSection() {
  const { classes } = useStyles();

  return (
    <Box py="lg" className={classes.container} id="portfolio">
      <Container p="lg">
        <Title align="center" order={2} className={classes.title}>
          Have a project on your mind
        </Title>

        <Center mt="xl">
          <Button
            radius="xl"
            size="lg"
            variant="white"
            component={Link}
            to={{ hash: "contact" }}
          >
            Contact Me
          </Button>
        </Center>
      </Container>
    </Box>
  );
}
