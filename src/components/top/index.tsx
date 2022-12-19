import { Inter } from '@next/font/google'
import Image from 'next/Image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const Top: React.FC = () => {
  const appDisplay = '/appDisplay.svg'
  const appStore = '/appStore.svg'
  return (
    <div className={' bg-gradient-to-r from-orange-500 to-yellow-400 py-32'}>
      <div className={'m-auto grid max-w-screen-lg grid-cols-2 justify-between'}>
        <div className={'text-white'}>
          <div className={'mb-16 text-6xl font-bold'}>
            ととのい
            <br />
            を科学する{' '}
          </div>{' '}
          <div className={'mb-12 text-3xl'}>
            "ととのう"を追求し <br />
            あなただけの"ととのう"を提供します
          </div>
          <div className={'mb-5 text-xl'}>
            整うためには心拍数の
            <br />
            変化量が最も大切と言われています
          </div>
          <div className={'mb-10 text-xl'}>
            サウナタイムで最高に整った時の心拍や時間を
            <br />
            記録することで最高の整いが再現できます
          </div>
          <div className={'flex items-end'}>
            <Link target="_blank" href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'>
              <Image src={appStore} height={30} width={180} alt={'App Store Icon'} />
            </Link>
            <div className={'mx-10'}>@整い総研公認アプリ（仮）</div>
          </div>
        </div>

        <Image src={appDisplay} height={500} width={480} alt='App Icon' />
      </div>
    </div>
  )
}
