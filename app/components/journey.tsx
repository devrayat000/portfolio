import {
  Box,
  Container,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { type TablerIcon, IconMedal2 } from "@tabler/icons";

type Props = {};

const useStyles = createStyles((theme) => ({
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
    marginBottom: theme.spacing.xl * 2,
  },
}));

const MyJourney = (props: Props) => {
  const { classes, theme } = useStyles();

  return (
    <Container p="xl" mt="xl" id="intro">
      <Text
        align="center"
        color={theme.colors[theme.primaryColor][6]}
        size="xl"
      >
        Why Choose Me
      </Text>
      <Title align="center" order={2} className={classes.title}>
        My Expertise Area
      </Title>

      <SimpleGrid cols={2} spacing="xl" className={classes.grid}>
        <JourneyTimeline
          icon={IconMedal2}
          label="Education"
          journeys={[
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
          ]}
        />
        <JourneyTimeline
          icon={IconMedal2}
          label="Experience"
          journeys={[
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
            {
              title: "Bachelor of Engineering",
              subject: "Mechanical Engineering",
              time: "2022 - 2026",
            },
          ]}
        />
      </SimpleGrid>
    </Container>
  );
};

export default MyJourney;

type JourneyTimelineProps = {
  icon: TablerIcon;
  label: string;
  journeys: JourneyItemProps[];
};
const JourneyTimeline: React.FC<JourneyTimelineProps> = ({
  icon: JourneyTablerIcon,
  journeys,
  label,
}) => {
  const theme = useMantineTheme();

  return (
    <Box>
      <Group>
        <JourneyTablerIcon
          size={theme.fontSizes.xl * 1.5}
          color={theme.colors[theme.primaryColor][6]}
        />
        <Title
          order={4}
          sx={(theme) => ({ fontSize: theme.fontSizes.xl * 1.5 })}
        >
          {label}
        </Title>
      </Group>
      <Timeline
        active={journeys.length - 1}
        bulletSize={16}
        lineWidth={4}
        mt="xl"
      >
        {journeys.map(({ title, subject, time }, i) => (
          <Timeline.Item title={title} key={title + subject + i}>
            <Text size="xs" color="gray">
              {subject}
            </Text>
            <Text size="xs" mt="sm" color={theme.colors[theme.primaryColor][6]}>
              {time}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

type JourneyItemProps = {
  title: string;
  subject: string;
  time: string;
};
