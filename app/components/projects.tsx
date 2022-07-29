import {
  createStyles,
  Container,
  Title,
  Text,
  Box,
  SimpleGrid,
  Card,
  Button,
  Center,
} from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.6)
        : theme.fn.rgba(theme.colors[theme.primaryColor][4], 0.35),
    position: "relative",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
    },
  },
  grid: {
    marginTop: theme.spacing.xl * 2,
  },
  showMore: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
  },
}));

export default function MyProjects() {
  const { projects } = useLoaderData();
  const { classes, theme } = useStyles();

  return (
    <Box py="lg" className={classes.container} id="portfolio">
      <Container p="xl" mt="xl">
        <Text
          align="center"
          color={theme.colors[theme.primaryColor][6]}
          size="xl"
        >
          My Portfolio
        </Text>
        <Title align="center" order={2} className={classes.title}>
          Recent Works
        </Title>

        <SimpleGrid cols={3} spacing="md" className={classes.grid}>
          {projects.map((project: any, i: number) => (
            <ImageCard
              key={project.id + i}
              title={project.title}
              link={project.slug}
              image={project.images[0].image.url}
              disabled={i % 2 == 0}
            />
          ))}
        </SimpleGrid>

        <Center>
          <Button radius="xl" size="lg" className={classes.showMore}>
            Show More
          </Button>
        </Center>
      </Container>
    </Box>
  );
}

const useCardStyles = createStyles(
  (theme, _params: { disabled?: boolean }, getRef) => {
    const image = getRef("image");
    const overlay = getRef("overlay");

    return {
      card: {
        position: "relative",
        height: 200,
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        ...(!_params.disabled && {
          [`&:hover .${image}`]: {
            transform: "scale(1.03)",
          },
          [`&:hover .${overlay}`]: {
            opacity: 1,
          },
        }),
      },

      image: {
        ref: image,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: "cover",
        transition: "transform 500ms ease",
        ...(_params.disabled && {
          opacity: 0.4,
        }),
      },

      overlay: {
        ref: overlay,
        opacity: 0,
        zIndex: 1,
        transition: "opacity 200ms ease-in-out",
        ...theme.fn.cover(),
        height: "100%",
        width: "100%",
        backgroundColor: theme.fn.rgba(
          theme.colors[theme.primaryColor][5],
          0.75
        ),
        display: "grid",
        placeItems: "center",
      },

      title: {
        color: theme.white,
        marginBottom: 5,
      },

      bodyText: {
        color: theme.colors.dark[2],
        marginLeft: 7,
      },
    };
  }
);

interface ImageCardProps {
  link: string;
  image: string;
  title: string;
  disabled?: boolean;
}

function ImageCard({ image, title, link, disabled }: ImageCardProps) {
  const { classes } = useCardStyles({ disabled });

  return (
    <Card
      p="lg"
      shadow="xs"
      className={classes.card}
      radius="md"
      component={Link}
      to={link}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay}>
        <Text size="lg" className={classes.title} weight={500}>
          {title}
        </Text>
      </div>
    </Card>
  );
}
ImageCard.defaultProps = { disabled: false };
