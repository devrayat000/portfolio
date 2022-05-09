import { LoadingOverlay } from '@mantine/core'
// @ts-ignore next-line
import { Loading } from 'https://framerusercontent.com/modules/NQ9LlTfXzHTRhTTi6qMI/tXuubIdpb4aq5IPqZT6G/Loading.js#Loading'

const PageLoader: React.FC<{ open: boolean }> = ({ open }) => (
  <LoadingOverlay
    visible={open}
    loader={
      <Loading indicator="Material" style={{ height: 120, width: 120 }} />
    }
  />
)

export default PageLoader
