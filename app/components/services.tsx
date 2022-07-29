import {
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { type TablerIcon, IconApps } from "@tabler/icons";
import SectionWrapper from "./wrapper";

type Props = {};

const useStyles = createStyles((theme) => ({
  grid: {
    marginTop: theme.spacing.xl * 3.5,
    marginBottom: theme.spacing.xl * 3.5,
    gap: theme.spacing.xl * 2,
  },
}));

const MyServices = (props: Props) => {
  const { classes } = useStyles();

  return (
    <SectionWrapper
      subtitle="Specialized In"
      title="What I Offer"
      id="services"
    >
      <SimpleGrid cols={3} className={classes.grid}>
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
        <ServiceCard
          icon={IconApps}
          title="Frontend Marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            deleniti expedita, fuga tempora animi."
        />
      </SimpleGrid>
    </SectionWrapper>
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
  icon: TablerIcon;
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
