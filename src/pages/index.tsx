import { Inter } from '@next/font/google'

import { Benefit } from '~/components/block/benefit'
import { Body } from '~/components/block/body'
import { Feature } from '~/components/block/feature'
import { Footer } from '~/components/block/footer'
import { Header } from '~/components/block/header'
import { Top } from '~/components/block/top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
      <Body />
      <Feature />
      <Benefit />
      <Footer />
    </div>
  )
}
