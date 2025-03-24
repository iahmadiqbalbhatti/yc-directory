import React, { ReactNode } from 'react'
import NavBar from "@/app/NavBar";

export default function RootLayout( { children }: { children: ReactNode } ) {
  return (
      <main className={ 'font-work-sans' }>
        <NavBar/>
        { children }
      </main>
  )
}
