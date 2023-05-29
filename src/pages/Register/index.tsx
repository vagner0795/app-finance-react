import React from 'react'
import { InputText } from '../../components/inputs/inputText'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { TemplateContainer, TemplateContent, TemplateHeroSideBar, TemplateMain } from '../../components/templates'

export const Register = () => {
  return (
    <TemplateContainer>
        <TemplateContent>
            <TemplateHeroSideBar >
                <img className='h-40 md:h-96 my-8 md:my-0' src="create-account.png" alt="image-login" />
            </TemplateHeroSideBar>
            <TemplateMain>
                <h1 className='font-bold text-3xl'>Crie sua conta</h1>
                <form className='flex flex-col w-full gap-4 max-w-xs'>
                    <InputText label='Email' type='email' autoComplete='none'/>
                    <InputText label='Senha' type='password'/>
                    <Button >Criar conta</Button>
                </form>
                <Link  href='/'>Já possuo uma conta</Link>
            </TemplateMain>
        </TemplateContent>

    </TemplateContainer>
  )
}

