import { Inter } from '@next/font/google'
import Image from 'next/Image'

import { useBreakpoint } from '~/hooks/breakpoints'

const inter = Inter({ subsets: ['latin'] })

export type CardProps = {
  title: string
  description: string
  img: string
}

export const Card: React.FC<CardProps> = ({ title, description, img }) => {
  const headerIcon = '/headerIcon.svg'
  const breakpoint = useBreakpoint()
  return (
    <div className='m-auto my-10 w-72 flex-row overflow-hidden rounded-md bg-white p-6 text-center shadow-lg hover:scale-105 md:flex md:h-72 md:w-128 md:p-10 xl:my-0'>
      <div className={'mb-6 md:mb-0'}>
        <div className='mb-4 text-2xl font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{description}</p>
      </div>
      {!breakpoint.isMobile ? (
        <Image className={'inline-block'} width={200} height={200} src={img} alt='cardImg' />
      ) : (
        <div className={'m-auto md:w-128'}>
          <Image className={'inline-block'} width={150} height={150} src={img} alt='cardImg' />
        </div>
      )}
    </div>
  )
}
