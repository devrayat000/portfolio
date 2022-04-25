import { ActionIcon, Tooltip } from '@mantine/core'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export interface NavLinkProps extends LinkProps {
  label: string
  children: React.ReactNode
}

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
          color={router.asPath === linkProps.href ? 'primaryColor' : undefined}
          aria-label={label}
        >
          {children}
        </ActionIcon>
      </Link>
    </Tooltip>
  )
}

export default NavLink
