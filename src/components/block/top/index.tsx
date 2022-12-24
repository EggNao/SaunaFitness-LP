import { Inter } from '@next/font/google'
import Image from 'next/Image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

const inter = Inter({ subsets: ['latin'] })

export const Top: React.FC = () => {
  const appDisplay = '/appDisplay.svg'
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
          skyColor: 0xcf6839,
          THREE,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return (
    <div ref={vantaRef} className={'bg-gradient-to-r from-orange-500 to-yellow-400 py-28'}>
      <div className={'m-auto grid max-w-screen-lg grid-cols-2 justify-between'}>
        <div className={'text-black'}>
          <div className={'mb-16 text-6xl font-bold'}>
            ととのいを
            <br />
            科学する{' '}
          </div>{' '}
          <div className={'mb-12 text-3xl font-semibold'}>
            "ととのう"を追求し <br />
            あなただけの"ととのう"を提供します
          </div>
          <div className={'mb-5 text-xl'}>
            サウナタイマーと心拍数可視化で <br />
            あなたのサ活をアップデート．
            <br />
            新しい発見をして，もっとサウナを
            <br />
            好きになりましょう！
          </div>
          <div className={'mb-10 text-xl'}></div>
          <div className={'flex items-end'}>
            <Link
              target='_blank'
              href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%82%BF%E3%82%A4%E3%83%A0/id6443695248'
            >
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
