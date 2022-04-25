import { Avatar, Center, Navbar } from '@mantine/core'

const MyNavbar = () => {
  return (
    <Navbar width={{ base: 280 }} p="sm">
      <Center>
        <Avatar
          src="/images/rayat.jpg"
          alt="Me"
          radius={160}
          size={160}

          //   withPlaceholder
        />
      </Center>
    </Navbar>
  )
}

export default MyNavbar
