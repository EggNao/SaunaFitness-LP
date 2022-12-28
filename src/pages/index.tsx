import { Inter } from '@next/font/google'
import Head from 'next/head'

import { Benefit } from '~/components/block/benefit'
import { Body } from '~/components/block/body'
import { Feature } from '~/components/block/feature'
import { Footer } from '~/components/block/footer'
import { Header } from '~/components/block/header'
import { Top } from '~/components/block/top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SaunaTime</title>
        <link rel='icon' href={process.env.FAVICON_URL} />
      </Head>
      <div>
        <Header />
        <Top />
        <Body />
        <Feature />
        <Benefit />
        <Footer />
      </div>
    </>
  )
}
