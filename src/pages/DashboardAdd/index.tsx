import React from 'react'
import { InputText } from '../../components/inputs/inputText'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { TemplateContainer, TemplateContent, TemplateHeroSideBar, TemplateMain } from '../../components/templates'

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
        <TemplateContent>
            <TemplateHeroSideBar >
                <img className='h-40 md:h-96 my-8 md:my-0' src="" alt="image-login" />
            </TemplateHeroSideBar>
            <TemplateMain>
                <h1 className='font-bold text-3xl'>Cadastrar nova despesa</h1>
                <form className='flex flex-col w-full gap-4 max-w-xs'>
                    <InputText label='Nome da despesa'  type='text' autoComplete='none'/>
                    <InputText label='Categiria'  type='text' autoComplete='none'/>
                    <InputText label='Valor'  type='number' autoComplete='none'/>
                    <Button >Cadastrar</Button>
                </form>
                <Link href='/dashboard'>Voltar</Link>
            </TemplateMain>
        </TemplateContent>

    </TemplateContainer>
  )
}
