import {
  createStyles,
  Container,
  Title,
  Text,
  Grid,
  useMantineTheme,
  Box,
  TypographyStylesProvider,
} from "@mantine/core";
import {
  type TablerIcon,
  IconMail,
  IconPhone,
  IconUser,
  IconHeadphones,
  IconMovie,
  IconCamera,
  IconBuildingSkyscraper,
} from "@tabler/icons";
import { useLoaderData } from "@remix-run/react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { m } from "framer-motion";

import dp from "~/assets/dp.png";
import type { GetHomePageDataQuery } from "~/graphql/generated";
import {
  MotionGrid,
  MotionGroup,
  MotionImage,
  slideX,
  slideY,
  stagger,
} from "~/animation";

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
  const { info } = useLoaderData<GetHomePageDataQuery>();
  const { classes, theme } = useStyles();

  return (
    <Container p="xl" mt={60} id="intro">
      <MotionGroup variants={stagger} position="apart" py="xl" spacing={80}>
        <MotionImage
          variants={slideX(-40)}
          src={dp}
          className={classes.image}
        />
        <m.div variants={slideX(-40)} className={classes.content}>
          <Text color={theme.colors[theme.primaryColor][6]} size="xl">
            My Intro
          </Text>
          <Title order={2} className={classes.title}>
            About Me
          </Title>
          <TypographyStylesProvider>
            <RichText content={info?.aboutMe.raw} />
          </TypographyStylesProvider>

          <Box mt="xl" component={m.section} variants={stagger}>
            <InfoItem icon={IconUser} label="Name" value={info?.name!} />
            <InfoItem
              icon={IconPhone}
              label="Phone"
              value={`+880${info?.phone}`}
            />
            <InfoItem icon={IconMail} label="Email" value={info?.email!} />
          </Box>

          <Box mt="xl">
            <Title order={3}>My Interests</Title>
            <MotionGroup mt="sm" spacing="xl" variants={stagger}>
              <InterestItem icon={IconHeadphones} label="Music" />
              <InterestItem icon={IconBuildingSkyscraper} label="Travel" />
              <InterestItem icon={IconMovie} label="Movie" />
              <InterestItem icon={IconCamera} label="Photo" />
            </MotionGroup>
          </Box>
        </m.div>
      </MotionGroup>
    </Container>
  );
}

interface InfoItemProps {
  icon: TablerIcon;
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
    <MotionGrid variants={slideY(20)}>
      <Grid.Col py={4} span={1}>
        <InfoIcon color={theme.colors[theme.primaryColor][6]} />
      </Grid.Col>
      <Grid.Col py={4} span={3}>
        <Text weight="bold">{label}:</Text>
      </Grid.Col>
      <Grid.Col py={4} span={8}>
        <Text weight={500}>{value}</Text>
      </Grid.Col>
    </MotionGrid>
  );
};

interface InterestItemProps {
  icon: TablerIcon;
  label: string;
}

export const InterestItem: React.FC<InterestItemProps> = ({
  icon: InterestIcon,
  label,
}) => {
  const theme = useMantineTheme();
  return (
    <MotionGroup spacing="xs" variants={slideY(20)}>
      <InterestIcon
        color={theme.colors[theme.primaryColor][6]}
        size={theme.fontSizes.sm}
      />
      <Text size="sm">{label}</Text>
    </MotionGroup>
  );
};
