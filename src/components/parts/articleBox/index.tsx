import { Inter } from '@next/font/google'

import { useBreakpoint } from '~/hooks/breakpoints'

const inter = Inter({ subsets: ['latin'] })

export type ArticleBoxProps = {
  title: string
  description: string
  img: string
}

export const ArticleBox: React.FC<ArticleBoxProps> = ({ title, description, img }) => {
  const breakpoint = useBreakpoint()
  return (
    <div className='m-auto w-64'>
      <img className={'m-auto mb-6'} height={200} width={200} src={img} alt='' />
      <div className={'mb-4 text-center text-2xl'}>{title}</div>
      <div>{description}</div>
    </div>
  )
}
