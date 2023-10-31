'use client'

import React from 'react'
import { SessionProvider} from 'next-auth/react'
import ReduxProvider from '@/redux/ReduxProvider'

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ReduxProvider>
  )
}

export default Providers