import {
  createStyles,
  keyframes,
  Image,
  Title,
  Button,
  Text,
  Paper,
} from '@mantine/core'
import { ArrowRight } from 'tabler-icons-react'
import { m as motion, type Variants } from 'framer-motion'

import { slideX } from '$lib/animation/slide'
import { expandX, MotionContainer } from '$lib/animation'
import { useGetMyInfoQuery } from '$graphql/generated'

const wiggle: Variants = {
  stop: {
    x: 0,
  },
  hover: {
    x: [4, -4],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

// const grow = keyframes({
//   from: { width: '0%', opacity: 0 },
//   to: { width: '100%', opacity: 1 },
// })

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
    // fontSize: 40,
    lineHeight: 1.4,
    letterSpacing: 1.1,
    fontWeight: 900,

    // [theme.fn.smallerThan('xs')]: {
    //   fontSize: 20,
    // },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  image2: {
    // flex: 1,
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'inline',
    },
  },

  highlight: {
    position: 'relative',
    padding: '4px 12px',
    isolation: 'isolate',
  },
  highlightBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '50%',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][5], 0.55)
        : theme.colors[theme.primaryColor][1],
    borderRadius: theme.radius.sm,
    zIndex: -1,
    // animation: `${grow} 300ms ease-in-out`,
  },
}))

export default function Intro() {
  const { classes } = useStyles()
  const [{ data }] = useGetMyInfoQuery()

  return (
    <MotionContainer
      variants={slideX(40)}
      initial="hidden"
      animate="show"
      exit="hidden"
      mx={0}
    >
      <Paper
        className={classes.inner}
        p={12 * 4}
        shadow="md"
        radius="sm"
        // mb="xl"
      >
        <div className={classes.content}>
          <Title className={classes.title} order={1}>
            I’m Musaddik Rayat <br />
            <span className={classes.highlight}>
              <motion.span
                className={classes.highlightBar}
                variants={expandX(100)}
              />
              {data?.admin?.rank}
            </span>{' '}
            Developer
          </Title>
          <Image
            src="/images/rayat2.png"
            alt="Zul Ikram Musaddik Rayat"
            // withPlaceholder
            className={classes.image2}
          />
          <Text color="dimmed" my="xl" component="p">
            Build fully functional accessible web applications faster than ever
            – with modern javascript frameworks to cover you in any situation
          </Text>

          <Button
            size="md"
            component={motion.a}
            initial="stop"
            whileHover="hover"
            href="https://www.fiverr.com/share/lm6QbR"
            rightIcon={
              <motion.span variants={wiggle}>
                <ArrowRight size={18} strokeWidth={3} />
              </motion.span>
            }
          >
            Hire Me
          </Button>
        </div>
        <Image
          src="/images/rayat2.png"
          alt="Zul Ikram Musaddik Rayat"
          // withPlaceholder
          className={classes.image}
        />
      </Paper>
    </MotionContainer>
  )
}
