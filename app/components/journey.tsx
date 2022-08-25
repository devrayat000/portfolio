import {
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  TimelineItem,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useLoaderData } from "@remix-run/react";
import { type TablerIcon, IconMedal2, IconCalendar } from "@tabler/icons";

import SectionWrapper from "./wrapper";
import type { GetHomePageDataQuery } from "~/graphql/generated";
import {
  MotionTimeline,
  MotionTimelineItem,
  slideY,
  stagger,
} from "~/animation";

type Props = {};

const useStyles = createStyles((theme) => ({
  grid: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
  },
}));

const MyJourney = (props: Props) => {
  const { educations, experiences } = useLoaderData<GetHomePageDataQuery>();
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
          journeys={educations.map((education) => ({
            ...education,
            time: `${new Date(education.from).getFullYear()} - ${new Date(
              education.to
            ).getFullYear()}`,
          }))}
        />
        {experiences.length > 0 && (
          <JourneyTimeline
            icon={IconMedal2}
            label="Experience"
            journeys={experiences.map((education) => ({
              ...education,
              time: `${new Date(education.from).getFullYear()} - ${new Date(
                education.to
              ).getFullYear()}`,
            }))}
          />
        )}
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
      <MotionTimeline
        active={journeys.length - 1}
        bulletSize={16}
        lineWidth={4}
        mt="xl"
        variants={stagger}
      >
        {journeys.map(({ title, subject, time }, i) => (
          <TimelineItem
            title={title}
            key={title + subject + i}
            // variants={slideY(40)}
          >
            <Text size="xs" color="gray">
              {subject}
            </Text>
            <Group mt="sm" spacing="xs">
              <IconCalendar
                size={theme.fontSizes.xs}
                color={theme.colors[theme.primaryColor][6]}
              />
              <Text size="xs" color={theme.colors[theme.primaryColor][6]}>
                {time}
              </Text>
            </Group>
          </TimelineItem>
        ))}
      </MotionTimeline>
    </Box>
  );
};

type JourneyItemProps = {
  title: string;
  subject: string;
  time: string;
};
