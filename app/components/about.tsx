import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  Grid,
  useMantineTheme,
  Box,
} from "@mantine/core";
import {
  type Icon,
  Mail,
  Phone,
  User,
  Headphones,
  Movie,
  Camera,
  BuildingSkyscraper,
} from "tabler-icons-react";

import dp from "~/assets/dp.png";

const useStyles = createStyles((theme) => ({
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
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
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

export default function AboutMe() {
  const { classes, theme } = useStyles();

  return (
    <Container p="xl" mt={60} id="intro">
      <Group position="apart" py="xl" spacing={80}>
        <Image src={dp} className={classes.image} />
        <div className={classes.content}>
          <Text color={theme.colors[theme.primaryColor][6]} size="xl">
            My Intro
          </Text>
          <Title order={2} className={classes.title}>
            About Me
          </Title>
          <Text color="dimmed" mt="md" component="p">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <Grid mt='xl'>
            <InfoItem
              icon={User}
              label="Name"
              value="Zul Ikram Musaddik Rayat"
            />
            <InfoItem icon={Phone} label="Phone" value="+8801741891955" />
            <InfoItem
              icon={Mail}
              label="Email"
              value="dev.rayat000@gmail.com"
            />
          </Grid>

          <Box mt="xl">
            <Title order={3}>My Interests</Title>
            <Group mt="sm" spacing="xl">
              <InterestItem icon={Headphones} label="Music" />
              <InterestItem icon={BuildingSkyscraper} label="Travel" />
              <InterestItem icon={Movie} label="Movie" />
              <InterestItem icon={Camera} label="Photo" />
            </Group>
          </Box>
        </div>
      </Group>
    </Container>
  );
}

interface InfoItemProps {
  icon: Icon;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({
  icon: InfoIcon,
  label,
  value,
}) => {
  const theme = useMantineTheme();

  return (
    <>
      <Grid.Col py={4} span={1}>
        <InfoIcon color={theme.colors[theme.primaryColor][6]} />
      </Grid.Col>
      <Grid.Col py={4} span={3}>
        <Text weight="bold">{label}:</Text>
      </Grid.Col>
      <Grid.Col py={4} span={8}>
        <Text weight={500}>{value}</Text>
      </Grid.Col>
    </>
  );
};

interface InterestItemProps {
  icon: Icon;
  label: string;
}

export const InterestItem: React.FC<InterestItemProps> = ({
  icon: InterestIcon,
  label,
}) => {
  const theme = useMantineTheme();
  return (
    <Group spacing="xs">
      <InterestIcon
        color={theme.colors[theme.primaryColor][6]}
        size={theme.fontSizes.sm}
      />
      <Text size="sm">{label}</Text>
    </Group>
  );
};