import React from 'react'
import SideBySide from './SideBySide'

const Data = () => {
  return (
      <section className='relative py-24'>
          <SideBySide  imgUp={true}  divImg={false} imgUrl='/data.png' textRight={true} heading='100% your data' para='The app is open source and your notes are saved to an open format, so you will always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.' buttonText='Read more'  />
   </section>
  )
}

export default Data