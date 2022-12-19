import { Inter } from '@next/font/google'
import Image from 'next/Image'

const inter = Inter({ subsets: ['latin'] })

export type CardProps = {
    title: string,
    description: string,
    img: string,
    size: 'small' | 'medium' | 'large'
}

export const Card: React.FC<CardProps> = ({ title, description, img, size }) => {
  const headerIcon = '/headerIcon.svg'
  const iconSize = {
    large: {height: 80, width: 80},
    medium: {height: 80, width: 60},
    small: {height: 80, width: 40}
  }
  return (
    <div className='w-64 overflow-hidden rounded-md bg-white p-6 text-center shadow-lg'>
      <Image className={'inline-block'} width={iconSize[size].width} height={iconSize[size].height} src={img} alt='cardImg' />
      <div className='p-2'>
        <div className='m-4 text-2xl font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{description}</p>
      </div>
    </div>
  )
}



