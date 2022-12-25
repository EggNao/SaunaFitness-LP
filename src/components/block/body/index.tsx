import { Inter } from '@next/font/google'

import { useBreakpoint } from '~/hooks/breakpoints'
import { FadeIn } from '~/styles/FadeIn'

const inter = Inter({ subsets: ['latin'] })

export const Body: React.FC = () => {
  const breakpoint = useBreakpoint()
  const graphPCImage = '/graph-pc.svg'
  const graphMobileImage = '/graph-mobile.svg'
  return (
    <div className={'bg-gray-50'}>
      <div className={'py-10'}>
        <FadeIn>
          <div className={'text-center text-3xl font-bold text-black md:text-4xl'}>ととのうとは</div>
        </FadeIn>
        <FadeIn>
          <div className={'m-auto my-8 w-10/12 text-center text-base'}>
            サウナ→水風呂→外気浴という1サイクルにより，ととのいを感じることができます．100度近くの高温から20度の水風呂に入ることで私たちは非日常的な生命の危機を感じ，自律神経，血圧，心拍に変化が生じます．この2つのプロセスでは自律神経（ストレス・緊張）が優位になり．さらにこの温度差により幸福感やストレス緩和のための脳内物質が分泌します．そして外気浴をすることで，副交感神経が優位に働くことでリラックスした状態になり．さらに脳内物質が残った状態なのでよりリラックスできます．
          </div>
        </FadeIn>
        <FadeIn>
          {breakpoint.isDesktop ? (
            <img className={'m-auto'} src={graphPCImage} height={1000} width={1200} alt='' />
          ) : (
            <div className={'m-auto md:w-9/12'}>
              <img className={'m-auto px-4'} src={graphMobileImage} height={1000} width={1200} alt='' />
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  )
}
