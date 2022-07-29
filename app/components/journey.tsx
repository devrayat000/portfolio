import {
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { type TablerIcon, IconMedal2 } from "@tabler/icons";
import SectionWrapper from "./wrapper";

type Props = {};

const useStyles = createStyles((theme) => ({
  grid: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
  },
}));

const MyJourney = (props: Props) => {
  const { classes } = useStyles();

  return (
    <SectionWrapper
      subtitle="My Qualification"
      title="Awesome Journey"
      id="journey"
    >
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
    </SectionWrapper>
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
