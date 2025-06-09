'use client'

import { BsCalendar3Range } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <section className='flex flex-col items-center text-center p-10 bg-white shadow-lg rounded-lg'>
        <div className='flex items-center mb-3'>
          <BsCalendar3Range className='text-main text-4xl mr-3'/>
          <h1 className=' text-main logo text-4xl'>Shanatu</h1>
        </div>
        <h4 className='text-xl text-main mb-4 logo'>Time Management Systems</h4>
        <p className='text-sm text-dark italic max-w-md mb-6'>
          Shanatu empowers seamless scheduling, optimising productivity with intuitive calendar tools tailored for efficiency and clarity.
        </p>
        <div className='flex gap-4'>
          <button 
            onClick={() => router.push('/login')}
            className='px-6 py-2 bg-main text-light rounded-md hover:bg-dark uppercase transition'
          >
            Login
          </button>
          <button 
            onClick={() => router.push('/register')}
            className='px-6 py-2 bg-main text-light rounded-md hover:bg-dark uppercase transition'
          >
            Register
          </button>
        </div>
      </section>
    </main>
  )
}
