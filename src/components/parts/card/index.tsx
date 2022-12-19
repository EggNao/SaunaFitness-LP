import { Inter } from '@next/font/google'
import Image from 'next/Image'

const inter = Inter({ subsets: ['latin'] })

export type CardProps = {
    title: string,
    description: string,
    img: string
}

export const Card: React.FC<CardProps> = ({ title, description, img }) => {
  const headerIcon = '/headerIcon.svg'
  return (
    <div className='m-5 w-64 overflow-hidden rounded shadow-lg'>
      <Image className='w-full' src={img} alt='cardImg' />
      <div className='px-6 py-4'>
        <div className='mb-2 text-lg font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{description}</p>
      </div>
    </div>
  )
}



