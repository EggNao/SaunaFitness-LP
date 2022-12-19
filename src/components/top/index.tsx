import { Inter } from '@next/font/google'
import Image from 'next/Image'

const inter = Inter({ subsets: ['latin'] })

export const Top: React.FC = () => {
  const appDisplay = '/appDisplay.svg'
  return (
    <div className={'flex bg-gradient-to-r from-orange-500 to-yellow-400'}>
        <div className={'text-base text-white'}>これはアプリです</div>
        <Image src={appDisplay} height={500} width={500} alt='App Icon'/>
    </div>
  )
}
