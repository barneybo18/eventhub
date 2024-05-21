"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn } from '@clerk/clerk-react'
import Checkout from './Checkout'

const CheckoutButton = ({ event }: { event: IEvent }) => {
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
    const hasEventFinshed = new Date(event.endDateTime) < new Date();

    return (
        <div className='flex items-center gap-3'>
            {/* Cannot buy post event  */}
            {hasEventFinshed ? (
                <p className='p-2 text-red-200'>Sorry, no more tickets available</p>
            ): (
                <>
                    <SignedOut>
                        <Button asChild className='button rounded-full' size="lg">
                            <Link href="/sign-in">
                                Get Tickets
                            </Link>
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <Checkout event={event} userId={userId} />
                    </SignedIn>
                </>
            )}
        </div>
    )
}

export default CheckoutButton