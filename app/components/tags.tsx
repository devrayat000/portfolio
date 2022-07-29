import {
  Box,
  createStyles,
  Divider,
  Group,
  Paper,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { IconAward, IconNotebook, IconUserCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    transform: "translateY(50%)",
    display: "grid",
    placeItems: "center",
  },
  paper: {
    borderRadius: 9999,
    padding: theme.spacing.xl * 1.2,
    boxShadow: theme.shadows.xl,
  },
}));

type Props = {};

const MyTags = (props: Props) => {
  const { classes } = useStyles();

  const divider = (
    <Divider
      sx={{ height: 36, alignSelf: "center" }}
      size="sm"
      orientation="vertical"
    />
  );

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Group position="apart" spacing="xl" align="center">
          <Tag
            icon={<IconAward />}
            label="8 Years Job"
            highlighted="Experience"
          />
          {divider}
          <Tag
            icon={<IconNotebook />}
            label="50+ Projects"
            highlighted="Completed"
          />
          {divider}
          <Tag
            icon={<IconUserCheck />}
            label="Support"
            highlighted="Online 24/7"
          />
        </Group>
      </Paper>
    </div>
  );
};

export default MyTags;

interface TagProps {
  icon: React.ReactNode;
  label: string;
  highlighted: string;
}

const Tag = (props: TagProps) => {
  const theme = useMantineTheme();

  return (
    <Group spacing="md">
      <ThemeIcon radius="xl" size="xl">
        {props.icon}
      </ThemeIcon>
      <Box>
        <Text size="xs" weight="bold">
          {props.label}
        </Text>
        <Text
          size="xs"
          weight="bold"
          color={theme.colors[theme.primaryColor][6]}
        >
          {props.highlighted}
        </Text>
      </Box>
    </Group>
  );
};
