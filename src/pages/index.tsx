import { Inter } from '@next/font/google'

import { Feature } from '~/components/block/feature'
import { Header } from '~/components/block/header'
import { Top } from '~/components/block/top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
      <Feature/>
    </div>
  )
}
