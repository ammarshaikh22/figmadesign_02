import React from 'react'
import SideBySide from './SideBySide'

const Banner = () => {
    return (
        <section className='bg-[#043873] py-28 md:py-16 h-auto text-white'>
            <SideBySide underline={false} divImg={true} divClass='md:max-w-[624px] md:h-[420px] w-full h-[214px]' img={true} heading='Get More Done with whitepace' para='Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks' buttonText='Try Whitepace free' textRight={true} />
        </section>
    )
}

export default Banner