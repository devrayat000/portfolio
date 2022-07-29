import {
  createStyles,
  Group,
  Text,
  useMantineTheme,
  Box,
  SimpleGrid,
  Progress,
} from "@mantine/core";
import SectionWrapper from "./wrapper";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.6)
        : theme.fn.rgba(theme.colors[theme.primaryColor][4], 0.35),
    position: "relative",
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
  grid: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
    columnGap: theme.spacing.xl * 4,
  },
}));

export default function MyExpertise() {
  const { classes } = useStyles();

  return (
    <Box py="lg" className={classes.container}>
      <SectionWrapper
        title="My Expertise Area"
        subtitle="Why Choose Me"
        id="expertise"
      >
        <SimpleGrid cols={2} spacing="xl" className={classes.grid}>
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
        </SimpleGrid>
      </SectionWrapper>
    </Box>
  );
}

type SkillProps = {
  label: string;
  value: number;
};

const Skill = ({ label, value }: SkillProps) => {
  const theme = useMantineTheme();

  return (
    <Group direction="column" align="stretch">
      <Group position="apart">
        <Text weight={600}>{label}</Text>
        <Text weight={600}>{value}%</Text>
      </Group>
      <Progress
        color={theme.primaryColor}
        size="md"
        radius="sm"
        value={value}
      />
    </Group>
  );
};
