import { ActionIcon, createStyles, Tooltip } from '@mantine/core'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export interface NavLinkProps extends LinkProps {
  label: string
  children: React.ReactNode
}

// const useStyles = createStyles(theme => {
//   const activeColor =
//     theme.colorScheme == 'light'
//       ? theme.colors.yellow[6]
//       : theme.colors.yellow[7]
//   return {
//     active: {
//       backgroundColor: activeColor,
//       '&:hover': {
//         backgroundColor: theme.fn.lighten(activeColor, 0.85),
//       },
//     },
//   }
// })

const NavLink: React.FC<NavLinkProps> = ({ children, label, ...linkProps }) => {
  const router = useRouter()

  return (
    <Tooltip label={label} withArrow>
      <Link {...linkProps} passHref>
        <ActionIcon<'a'>
          component="a"
          size="xl"
          radius="xl"
          variant="filled"
          color={router.asPath === linkProps.href ? 'yellow' : undefined}
          aria-label={label}
        >
          {children}
        </ActionIcon>
      </Link>
    </Tooltip>
  )
}

export default NavLink
