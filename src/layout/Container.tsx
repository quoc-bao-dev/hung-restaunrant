import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className="max-w-[1440px] mx-auto h-full md:px-[32px]  lg:px-[64px] px-[16px]">
            {children}
        </div>
    )
}

export default Container