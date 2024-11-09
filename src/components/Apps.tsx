import React from 'react'
import SideBySide from './SideBySide'

const Apps = () => {
    return (
        <section className='relative py-20 bg-[#043873]'>
            <div className='text-white'>
                <SideBySide imgUp={true} imgUrl='/apps.png' img={true} heading='Work with Your Favorite Apps Using whitepace' para='Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.' textRight={false} buttonText='Read more' />
            </div>
        </section>
    )
}

export default Apps