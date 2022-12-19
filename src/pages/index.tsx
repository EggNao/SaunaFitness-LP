import { Inter } from '@next/font/google'

import { Header } from '~/components/header'
import { Top } from '~/components/top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
    </div>
  )
}
