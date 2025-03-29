'use client'
import Loader from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCallbyId } from '@/hooks/useGetCallbyId'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

export default function Meeting({params}: {params: Promise<{ id:string }>}) {
    const {id} = React.use(params);
    const {user, isLoaded} = useUser();
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    const {call, isCallLoading} = useGetCallbyId(id);

    if (!isLoaded || isCallLoading) return <Loader />
    return (
      <main className='h-screen w-full'>
        <StreamCall call={call}>
          <StreamTheme>
            {!isSetupComplete ? (
              <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
            ): (
              <MeetingRoom />
            )}
          </StreamTheme>
        </StreamCall>
      </main>
    )
  }
