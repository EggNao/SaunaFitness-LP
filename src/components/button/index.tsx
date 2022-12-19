import { Inter } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

type ButtonProps = {
  color: 'red' | 'orange' | 'blue'
  rounded?: boolean
  text: string
}

export const Button: React.FC<ButtonProps> = ({ color, rounded=false, text }) => {
  // colorで表示色を変える
  const colorSrc = {
    blue: 'border-transparent text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l',
    orange: 'border-transparent text-white bg-gradient-to-r from-orange-500 to-yellow-400 hover:bg-gradient-to-l',
    red: 'border-transparent text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:bg-gradient-to-l',
  }

  // ボタンの大きさを変える
  return (
    <button
      className={clsx(
        `px-4 py-2 text-base font-medium shadow-sm`,
        rounded ? 'rounded-full' : 'rounded-md',
        colorSrc[color]
      )}
    >
      {text}
    </button>
  )
}
