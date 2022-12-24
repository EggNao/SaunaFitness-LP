import { Inter } from '@next/font/google'

import { ArticleBox } from '~/components/parts/articleBox'
import { useBreakpoint } from '~/hooks/breakpoints'
import { FadeIn } from '~/styles/FadeIn'

const inter = Inter({ subsets: ['latin'] })

export const Benefit: React.FC = () => {
  const breakpoint = useBreakpoint()
  const graphPCImage = '/graph-pc.svg'
  const graphMobileImage = '/graph-mobile.svg'
  return (
    <div className={'bg-gray-50'}>
      <div className='m-auto h-0 w-0 border-x-[50px] border-t-[75px] border-x-transparent border-t-gray-700 md:border-x-[100px] md:border-t-[150px]'></div>
      <div className={'py-10'}>
        <FadeIn>
          <div className={'mb-10 text-center text-3xl font-bold text-black md:text-4xl'}>ととのうメリット</div>
        </FadeIn>

        <div className={'m-auto my-10 grid grid-cols-6 gap-10 px-10 md:w-5/6'}>
          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'ストレスの解消'}
                description={'高温と湿度が身体をリラックスさせ，ストレスを解消します．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>

          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'血流の改善'}
                description={'高温の環境に入ることで，血管が拡張し，血流が促進されます．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>
          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'疲れの軽減'}
                description={'血流の改善により，疲れが軽減します．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>
          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'肌のトーンアップ'}
                description={'汗をたくさんかいた後に，皮膚が引き締まります．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>
          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'リフレッシュ'}
                description={'高温と湿度が身体をリラックスさせ，リフレッシュ感を得られます．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>
          <div className={'col-span-6 hover:scale-105 md:col-span-3 xl:col-span-2'}>
            <FadeIn>
              <ArticleBox
                title={'インフルエンザ予防'}
                description={'サウナを利用することで，免疫力がアップします．'}
                img={'/alert.svg'}
              />
            </FadeIn>
          </div>
        </div>

        <FadeIn>
          <div className={'m-auto mt-16 w-5/6 text-center'}>
            ※ただし、サウナを利用する際は，注意することもあります．例えば，高温と湿度の環境に不適応である方や，
            妊娠中の方，心臓病の方や血圧が高い方は，サウナを利用することができません．また，サウナを利用する前には，
            必ず健康状態を確認することが重要です．
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
