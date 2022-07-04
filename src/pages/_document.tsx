import { type NextPage } from 'next'
import {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentProps,
  type DocumentInitialProps,
} from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const MyDocument: NextPage<DocumentProps, DocumentInitialProps> = props => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        {process.env.NODE_ENV === 'production' && (
          <script src="/scripts/devtools.js" defer />
        )}
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = createGetInitialProps()

export default MyDocument
