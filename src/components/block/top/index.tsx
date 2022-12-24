import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
/* @ts-ignore */
import CLOUDS from 'vanta/dist/vanta.clouds.min'

const inter = Inter({ subsets: ['latin'] })

export const Top: React.FC = () => {
  const appDisplay = '/appDisplay.png'
  const appStore = '/appStore.svg'

  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          color: 0x14b679,
          el: vantaRef.current,
          maxDistance: 34.0,
          skyColor: 0xca7640,
          speed: 1.5,
          THREE,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return (
    <div ref={vantaRef}>
      <div className={'m-auto max-w-screen-lg flex-row justify-between py-12 px-10 md:flex md:py-28'}>
        <div className={'text-black'}>
          <div className={'mb-4 text-4xl font-bold md:mb-16 md:text-6xl'}>
            ととのいを
            <br />
            科学する{' '}
          </div>{' '}
          <div className={'mb-4 text-lg font-semibold md:mb-8 md:text-2xl'}>
            ととのうを追求し <br />
            あなただけのととのうを提供します
          </div>
          <div className={'mb-5 text-base md:text-lg'}>
            サウナタイマーと心拍数可視化で <br />
            あなたのサ活をアップデート．
            <br />
            新しい発見をして，もっとサウナを
            <br />
            好きになりましょう！
          </div>
          <Link
            target='_blank'
            href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'
          >
            <img className={'w-32 md:w-40'} src={appStore} height={30} width={150} alt={'App Store Icon'} />
          </Link>
        </div>

        <img src={appDisplay} height={500} width={480} alt='App Icon' />
      </div>
    </div>
  )
}
