import { SignUp } from '@clerk/nextjs'

export default function RegisterPage() {
  return (
    <main className='flex flex-col items-center p-5 gap-10'>
      <h1 className='logo text-4xl'>Shanatu</h1>
      <div className='mt-3'>
        <SignUp />
      </div>
    </main>
  )
}