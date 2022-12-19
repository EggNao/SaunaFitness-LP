import { Inter } from '@next/font/google'
import Image from 'next/Image'
import Link from 'next/link'

import { Button } from '~/components/button'

const inter = Inter({ subsets: ['latin'] })

export const Header: React.FC = () => {
  const headerIcon = '/headerIcon.svg'
  return (
    <header>
      <nav className='border border-gray-200 px-4 py-2.5'>
        <div className='flex max-w-screen-xl items-center justify-between'>
          <Link href='/'>
            <Image src={headerIcon} className='mr-3' width={250} height={50} alt='Header Icon' />
          </Link>
          <Button text={'Download'} color={'orange'}/>
        </div>
      </nav>
    </header>
  )
}
