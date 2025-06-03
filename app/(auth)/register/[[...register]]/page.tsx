import { SignUp } from '@clerk/nextjs'
import { BsCalendar3Range } from 'react-icons/bs'

export default function RegisterPage() {
  return (
    <main className='flex flex-col items-center p-5 gap-10'>
      <div className='flex mt-3'>
        <BsCalendar3Range className='text-4xl mr-5 text-main'/>
        <h1 className='logo text-4xl text-main'>Shanatu</h1> 
      </div>
      <div className='mt-3'>
        <SignUp />
      </div>
    </main>
  )
}