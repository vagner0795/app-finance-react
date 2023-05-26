import React from 'react'
import { InputText } from '../../components/inputs/inputText'
import { Button } from '../../components/button'
import { Link } from '../../components/link'

export const Login = () => {
  return (
    <div className='w-screen h-screen bg-sky-100 flex justify-center'>
        <div className='h-full w-full max-w-screen-lg  md:grid md:grid-cols-2 gap-20 px-10'>
            <aside className='flex'>
                <img src="login-image.svg" alt="image-login" />
            </aside>
            <main className='flex flex-col justify-center items-center gap-20'>
                <h1 className='font-bold text-3xl'>Controle seus gastos</h1>
                <form className='flex flex-col w-full gap-4'>
                    <InputText label='Email' type='email' autoComplete='none'/>
                    <InputText label='Senha' type='password'/>
                    <Button disabled>Login</Button>
                </form>
                <Link target='_blank' href='https://www.google.com'>Criar conta</Link>
            </main>
        </div>

    </div>
  )
}
