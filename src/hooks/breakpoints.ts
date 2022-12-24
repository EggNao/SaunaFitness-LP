import { useEffect, useState } from 'react'
import { createBreakpoint } from 'react-use'

type Breakpoint = {
  current: BreakpointType
  isDesktop: boolean
  isMobile: boolean
  isTablet: boolean
}

type BreakpointType = 'desktop' | 'mobile' | 'tablet'

// 端末ごとのサイズはメルカリのサイトを参考にした
// https://jp.mercari.com/
const useCustomBreakpoint = createBreakpoint({ desktop: 960, mobile: 0, tablet: 600 })

export const useBreakpoint = (): Breakpoint => {
  const customBreakpoint = useCustomBreakpoint()
  const [breakpoint, setIsBreakpoint] = useState<Breakpoint>({
    current: 'desktop',
    isDesktop: true,
    isMobile: false,
    isTablet: false,
  })
  useEffect(() => {
    if (customBreakpoint === 'desktop') {
      setIsBreakpoint({
        current: customBreakpoint,
        isDesktop: true,
        isMobile: false,
        isTablet: false,
      })
    } else if (customBreakpoint === 'mobile') {
      setIsBreakpoint({
        current: customBreakpoint,
        isDesktop: false,
        isMobile: true,
        isTablet: false,
      })
    } else if (customBreakpoint === 'tablet') {
      setIsBreakpoint({
        current: customBreakpoint,
        isDesktop: false,
        isMobile: false,
        isTablet: true,
      })
    }
  }, [customBreakpoint])
  return breakpoint
}
