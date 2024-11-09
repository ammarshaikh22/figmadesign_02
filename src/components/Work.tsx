import React from 'react'
import SideBySide from './SideBySide'

const Work = () => {
    return (
        <section className='relative py-28 md:py-20 text-black'>
            <div className='mb-20 relative before:w-full before:h-full before:absolute before:bg-[url("/bg.png")] before:bg-no-repeat before:-top-20 before:-left-60'>
                <SideBySide img={false} heading='Project Management' para='Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.' buttonText='Get Started' divImg={true} divClass='md:max-w-[548px] md:h-[350px] w-full h-[214px]' textRight={true} />
            </div>
            <div>
                <SideBySide divImg={false} imgUrl='/work.png' img={false} heading='Work together' para='With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.' buttonText='Try it now' textRight={false} />
            </div>
        </section >
    )
}

export default Work