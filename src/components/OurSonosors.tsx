import Image from 'next/image'
import React from 'react'

const OurSonosors = () => {
  return (
      <section className='py-16'>
          <div className='2xl:max-w-[80%] md:max-w-[94%] max-w-[96%] mx-auto text-center'>
              <h3 className='text-6xl'>Our sponsors</h3>
              <div className='flex items-center justify-between mt-24 md:flex-row flex-col gap-28 md:gap-0'>
                  <Image src='/Apple.png' alt='logo' width={55} height={68} />
                  <Image src='/Microsoft.png' alt='logo' width={287} height={62} />
                  <Image src='/Slack.png' alt='logo' width={280} height={71} />
                  <Image src='/Google.png' alt='logo' width={211} height={68} />
              </div>
          </div>
    </section>
  )
}

export default OurSonosors