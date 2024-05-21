import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-top '>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image 
            src="/assets/images/event_hub.svg"
            alt='logo'
            width={128}
            height={38}
          />
        </Link>

        <p>2024 EventHub. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer