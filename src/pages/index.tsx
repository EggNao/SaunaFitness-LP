import { Inter } from '@next/font/google'

import { Top } from '~/components/block/top'
import { Header } from '~/components/parts/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
    </div>
  )
}
