import { Inter } from '@next/font/google'
import Link from 'next/link'

import { Button } from '~/components/parts/button'

const inter = Inter({ subsets: ['latin'] })

export const Header: React.FC = () => {
  const headerIcon = '/appIconName.svg'
  return (
    <header>
      <nav className='border border-gray-200 py-2.5'>
        <div className='m-auto flex max-w-screen-lg grid-cols-2 place-content-center items-center justify-between px-4 xl:p-0'>
          <Link href='/'>
            <div className={'w-48 md:w-64'}>
            <img src={headerIcon} className='mr-3' width={250} height={50} alt='Header Icon' />
            </div>
          </Link>
          <div className={'items-center'}>
            <Link target="_blank" href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'>
              <Button text={'Download'} color={'orange'} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
