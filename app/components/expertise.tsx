import {
  createStyles,
  Container,
  Title,
  Group,
  Text,
  useMantineTheme,
  Box,
  SimpleGrid,
  Progress,
} from "@mantine/core";

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
    marginBottom: theme.spacing.xl * 2,
    columnGap: theme.spacing.xl * 4,
  },
}));

export default function MyExpertise() {
  const { classes, theme } = useStyles();

  return (
    <Box py="lg" className={classes.container}>
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
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
          <Skill label="Facebook Marketing" value={90} />
        </SimpleGrid>
      </Container>
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
