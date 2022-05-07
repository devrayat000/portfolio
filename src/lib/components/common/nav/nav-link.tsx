import { ActionIcon, Tooltip } from '@mantine/core'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { m as motion } from 'framer-motion'
import { slideX } from '$lib/animation/slide'

export interface NavLinkProps extends LinkProps {
  label: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ children, label, ...linkProps }) => {
  const router = useRouter()

  return (
    // <motion.div>
    <Tooltip label={label} position="left" withArrow>
      <Link {...linkProps} passHref>
        <ActionIcon<typeof motion.a>
          component={motion.a}
          size="xl"
          radius="xl"
          variant="filled"
          color={router.asPath === linkProps.href ? 'primaryColor' : undefined}
          aria-label={label}
          variants={slideX(20)}
          // initial="hidden"
          // animate="show"
          // exit="hidden"
        >
          {children}
        </ActionIcon>
      </Link>
    </Tooltip>
    // </motion.div>
  )
}

export default NavLink
