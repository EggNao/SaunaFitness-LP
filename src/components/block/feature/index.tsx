import { Inter } from '@next/font/google'

import { Card } from '~/components/parts/card'
import { FadeIn } from '~/styles/FadeIn'

const inter = Inter({ subsets: ['latin'] })

export const Feature: React.FC = () => {
  const appDisplay = '/appDisplay.svg'
  const appStore = '/appStore.svg'
  return (
    <div className={'bg-gray-50 bg-gradient-to-r from-orange-500 to-yellow-400 py-10'}>
      <div className={'m-auto max-w-screen-lg'}>
        <div className={'mb-10 text-center text-3xl font-bold text-white md:text-4xl'}>アプリの特徴</div>
        <div className={'grid-cols-2 justify-center justify-items-center gap-3.5 xl:grid'}>
          <FadeIn>
            <Card
              title={'Timer'}
              description={
                '各パートの活動を記録することができます．時間になったら，振動でお知らせします．サウナを出る時間はあなたのタイミングです．あなただけの整うを見つけましょう．'
              }
              img={'/timer.svg'}
            />
          </FadeIn>
          <FadeIn>
            <Card
              title={'Alert'}
              description={
                'サウナに入ると心拍数が上昇し，水風呂では心拍が減少します．心拍数の閾値を超えるとアラートでお知らせします．つまりあの日の”ととのい”を再現することができます．'
              }
              img={'/alert.svg'}
            />
          </FadeIn>

          <div className={'col-span-2'}>
            <FadeIn>
              <Card
                title={'Health Kit'}
                description={
                  'ヘルスケアアプリと統合し，健康状態に関する重要な情報を簡単に整理し，アクセスできます．過去のサ活も簡単に振り返ることができます．'
                }
                img={'/healthKit.svg'}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
