import React from 'react'
import SideBySide from './SideBySide'

const YourWork = () => {
    return (
        <section className='py-20 text-white relative bg-[#043873]'>
            <div className='before:md:absolute before:bg-[url("/bg.png")] before:bg-start before:w-full before:h-full before:bg-no-repeat before:top-0 before:-left-40'>
                <div className='2xl:max-w-[80%] md:max-w-[90%] max-w-[96%] mx-auto text-start md:text-center'>
                    <h3 className='text-6xl'>Your work, everywhere you are</h3>
                    <p className='text-lg my-8'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    <button className='text-white bg-[#4F9CF9] py-2 px-6 rounded-lg'>Try Taskey</button>
                </div>
            </div>
        </section>
    )
}

export default YourWork