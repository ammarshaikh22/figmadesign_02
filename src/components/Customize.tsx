import React from 'react'
import SideBySide from './SideBySide'

const Customize = () => {
    return (
        <section className='py-20 text-white relative bg-[#043873]'>
            <SideBySide img={false} divImg={true} textRight={true} divClass='md:max-w-[548px] md:h-[350px] w-full h-[214px]' heading='Use as Extension' para='Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.'  buttonText='Let’s Go' />
        </section>
    )
}

export default Customize