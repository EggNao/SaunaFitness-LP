import { Inter } from '@next/font/google'
import Image from 'next/Image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const Footer: React.FC = () => {
  const headerIcon = '/headerIcon.svg'
  const appStore = '/appStore.svg'
  return (
    <div>
      <div
        className={
          'items-center justify-evenly bg-gray-50 bg-gradient-to-r from-orange-500 to-yellow-400 py-10 md:flex'
        }
      >
        <div className={'mb-4 text-center text-2xl font-bold text-white md:mb-0 md:text-3xl'}>
          さあ！ととのいを科学しよう！
        </div>
        <Link
          target='_blank'
          href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'
        >
          <Image className={'m-auto w-32 md:w-48'} src={appStore} height={500} width={180} alt='App Store' />
        </Link>
      </div>
      <div className={'p-6'}>
        <div className={'mb-4 flex justify-evenly text-xs text-black md:text-base'}>
          <Link
            target='_blank'
            href=''
          >
            利用規約
          </Link>
          <Link
            target='_blank'
            href='https://official.kacchanblog.com/sauna-fitness-privacy_policy/'
          >
            プライバシーポリシー
          </Link>
          <Link target='_blank' href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'>
            問い合わせ
          </Link>
        </div>
        <div className={'w-40 md:w-64'}>
          <Image src={headerIcon} height={500} width={300} alt='App Icon' />
        </div>
      </div>
    </div>
  )
}
