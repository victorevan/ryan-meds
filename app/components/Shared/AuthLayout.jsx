import Image from 'next/image'

import backgroundImage from '@images/background-auth.jpg'

export function AuthLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-1 md:px-28">
          <div className="mx-auto w-full max-w-lg sm:px-4 md:max-w-xl md:px-0">
            {children}
          </div>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
