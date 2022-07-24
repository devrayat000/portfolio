import {
  Container,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { type Icon, Apps } from "tabler-icons-react";

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
    marginTop: theme.spacing.xl * 3.5,
    marginBottom: theme.spacing.xl * 3.5,
    gap: theme.spacing.xl * 2,
  },
}));

const MyServices = (props: Props) => {
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

      <SimpleGrid cols={3} className={classes.grid}>
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={Apps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
      </SimpleGrid>
    </Container>
  );
};

export default MyServices;

const useCardStyles = createStyles((theme) => ({
  paper: {
    borderTopRightRadius: theme.spacing.xl * 2,
    position: "relative",
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl}px`,
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 32,
    transform: "translateY(-50%)",
  },
}));

type ServiceCardProps = {
  icon: Icon;
  title: string;
  description: string;
};
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: ServiceIcon,
  title,
  description,
}) => {
  const { classes, theme } = useCardStyles();

  return (
    <Paper withBorder className={classes.paper}>
      <ThemeIcon size="xl" className={classes.icon}>
        <ServiceIcon color={theme.white} />
      </ThemeIcon>
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Text size="xs" color="gray" mt="xs">
        {description}
      </Text>
    </Paper>
  );
};
