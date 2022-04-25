import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Text,
  Paper,
} from '@mantine/core'
import { ArrowRight } from 'tabler-icons-react'

const useStyles = createStyles(theme => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    fontSize: 40,
    lineHeight: 1.4,
    letterSpacing: 1.1,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 20,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][5], 0.55)
        : theme.colors[theme.primaryColor][1],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

export default function Intro() {
  const { classes } = useStyles()

  return (
    <div>
      <Container>
        <Paper
          className={classes.inner}
          p={12 * 4}
          shadow="md"
          radius="sm"
          mb="xl"
        >
          <div className={classes.content}>
            <Title className={classes.title} order={1}>
              I’m Musaddik Rayat <br />
              <span className={classes.highlight}>Full-stack</span> Developer
            </Title>
            <Text color="dimmed" my="xl" component="p">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Button
              size="md"
              rightIcon={<ArrowRight size={18} strokeWidth={3} />}
            >
              Hire Me
            </Button>
          </div>
          <Image
            src="/images/rayat2.png"
            alt="Zul ikram Musaddik Rayat"
            withPlaceholder
            className={classes.image}
          />
        </Paper>
      </Container>
    </div>
  )
}
