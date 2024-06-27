import { OrganizationSwitcher, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import AdminNavItems from './AdminNavItems'
import AdminMobileNav from './AdminMobileNav'

const AdminHeader = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href={"/"} className='w-48'>
          <Image 
            src='/assets/images/event_hub.svg'
            width={190}
            height={50}
            alt='EventHub logo'
          />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-max'>
            <AdminNavItems />
          </nav>
        </SignedIn>

        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <AdminMobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full bg-[#B675B2] hover:bg-[#944d90]' size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader