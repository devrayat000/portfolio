import { pageFade } from '$lib/animation/fade'
import { Avatar, Center, Navbar, Indicator } from '@mantine/core'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const MyNavbar = () => {
  const opacity = useMotionValue(0)
  const size = useTransform(opacity, [0, 1], [2, 20])
  return (
    <Navbar width={{ base: 280 }} p="sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </Navbar>
  )
}

export default MyNavbar
