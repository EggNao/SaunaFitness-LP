import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='SaunaTime' content='SaunaTime' />
        <meta property='og:title' content='SaunaTime' />
        <meta property='og:image' content='/advertisementImage.png' />
        <meta property='og:description' content='ととのうを科学する' />
        <link rel='icon' href='/appIcon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
