import React from 'react'
import Button from './Button'
import Image from 'next/image'

const FreeTrail = () => {
    return (
        <section className='relative py-20 bg-[#043873]'>
            <div className='2xl:max-w-[80%] md:max-w-[86%] max-w-[96%] mx-auto'>
                <div className='text-center text-white md:max-w-[50%] mx-auto'>
                    <h3 className='text-6xl'>Try Whitepace today</h3>
                    <p className='text-lg my-6 '>Get started for free. <br /> Add your whole team as your needs grow.</p>
                    <Button buttonText='Try Taskey free' />
                    <span className='block text-lg mt-8'>On a big team? Contact sales</span>
                    <div className='flex gap-10 md:flex-row flex-col items-center justify-center mt-10'>
                        <Image src='/appleWhite.png' alt='logo' width={40} height={50} />
                        <Image src='/android.png' alt='logo' width={40} height={50} />
                        <Image src='/windows.png' alt='logo' width={40} height={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeTrail