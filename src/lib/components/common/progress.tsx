import { expandX } from '$lib/animation'
import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/core'
import {
  type HTMLMotionProps,
  m as motion,
  domAnimation,
  LazyMotion,
} from 'framer-motion'
import { forwardRef } from 'react'

const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
}

const useStyles = createStyles(
  (theme, { color, radius, size }: Omit<Props, 'value'>) => ({
    root: {
      position: 'relative',
      flexGrow: 0,
      height: theme.fn.size({ size: 'sm' ?? size, sizes }),
      borderRadius: theme.fn.size({
        size: radius ?? 'sm',
        sizes: theme.radius,
      }),
      overflow: 'hidden',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
    },
    bar: {
      position: 'absolute',
      inset: 0,
      height: '100%',
      backgroundColor: theme.fn.themeColor(
        color ?? theme.primaryColor,
        theme.fn.primaryShade(),
        false
      ),
      borderRadius: theme.fn.size({
        size: radius ?? 'sm',
        sizes: theme.radius,
      }),
    },
  })
)

type Props = {
  color?: MantineColor
  size?: MantineNumberSize
  radius?: MantineNumberSize
  value: number
} & HTMLMotionProps<'div'>

const defaultProps: Partial<Props> = {
  color: 'blue',
  size: 'md',
  radius: 'md',
}

const ProgressBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { color, radius, size, value, ...rest } = useMantineDefaultProps(
    'MyProgressBar',
    defaultProps,
    props
  )
  //   const { color, radius, size, value, ...rest } = props
  const { classes } = useStyles(
    { color, radius, size },
    { name: 'MyProgressBar' }
  )

  return (
    <LazyMotion features={domAnimation}>
      <motion.div className={classes.root} ref={ref} {...rest}>
        <motion.div
          role="progressbar"
          className={classes.bar}
          variants={expandX(value)}
        />
      </motion.div>
    </LazyMotion>
  )
})

ProgressBar.displayName = 'MyProgressBar'
ProgressBar.defaultProps = defaultProps

export default ProgressBar
