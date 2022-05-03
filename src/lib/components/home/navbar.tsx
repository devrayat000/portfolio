import { Avatar, Center, Navbar, Indicator } from '@mantine/core'

const MyNavbar = () => {
  return (
    <Navbar width={{ base: 280 }} p="sm">
      <Center>
        <Indicator
          inline
          size={20}
          offset={23}
          position="bottom-end"
          color="green"
          withBorder
        >
          <Avatar
            src="/images/rayat.jpg"
            alt="Me"
            radius={160}
            size={160}

            //   withPlaceholder
          />
        </Indicator>
      </Center>
    </Navbar>
  )
}

export default MyNavbar
