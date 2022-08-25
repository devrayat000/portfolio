import {
  Container,
  type ContainerProps,
  createStyles,
  Text,
  Title,
} from "@mantine/core";
import { m } from "framer-motion";
import { grow } from "~/animation";

type Props = React.PropsWithChildren<{
  title: string;
  subtitle: string;
}> &
  ContainerProps &
  React.RefAttributes<HTMLDivElement>;

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 900,
    textTransform: "capitalize",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
    },
  },
}));

const SectionWrapper: React.FC<Props> = ({
  children,
  title,
  subtitle,
  ...props
}) => {
  const { classes, theme } = useStyles();

  return (
    <Container p="xl" mt="xl" {...props}>
      <m.div variants={grow(0.7)}>
        <Text
          align="center"
          color={theme.colors[theme.primaryColor][6]}
          sx={{ textTransform: "capitalize" }}
          size="xl"
        >
          {subtitle}
        </Text>
        <Title align="center" order={2} className={classes.title}>
          {title}
        </Title>
      </m.div>

      {children}
    </Container>
  );
};

export default SectionWrapper;
