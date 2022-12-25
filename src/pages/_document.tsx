import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='Sauna Time' content='Sauna Time' />
        <meta property='og:title' content='Sauna Time' />
        <meta property='og:image' content='/advertisementImage.png' />
        <meta property='og:description' content='ととのいを科学する' />
        <link rel='icon' href='/appIcon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
