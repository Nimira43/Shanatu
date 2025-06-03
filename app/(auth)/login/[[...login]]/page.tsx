import { SignIn } from '@clerk/nextjs'
import { BsCalendar3Range } from 'react-icons/bs'

export default function LoginPage() {
  return (
    <main className='flex flex-col items-center p-5 gap-10'>
      <div className='flex mt-3'>
        <BsCalendar3Range className='text-4xl mr-5'/>
        <h1 className='logo text-4xl'>Shanatu</h1> 
      </div>
      <div className='mt-3'>
        <SignIn />
      </div>
    </main>
  )
}