import { useRouter } from 'next/router'

const TagsPage = () => {
  const router = useRouter()
  return (
    <div>
      <h2>{router.pathname}</h2>
      <h2>{router.route}</h2>
      <h2>{router.basePath}</h2>
      <h2>{JSON.stringify(router.query)}</h2>
      <h2>{router.asPath}</h2>
    </div>
  )
}

export default TagsPage
