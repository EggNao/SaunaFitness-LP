import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export type FadeInProps = {
    children: ReactNode
}

export const FadeIn: React.FC<FadeInProps> = ({ children }) => {
    const { inView, ref } = useInView({
        // オプション
        rootMargin: '-20px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "translate-y-[50%] opacity-0"} duration-[1s]`}
        >
            {children}
        </div>
    )
}