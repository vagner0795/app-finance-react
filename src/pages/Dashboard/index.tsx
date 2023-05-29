import React from 'react'
import Router from 'next/router'
import { TemplateContainer } from '../../components/templates'
import { Button } from '../../components/button'
import { Card } from './Components/Cards'



export const Dashboard = () => {

  const array = [
    { id: '0', title: 'Netflix', category: 'Streaming', price: 39.99 },
    { id: '1', title: 'Água', category: 'Item Basico', price: 209.99 },
    { id: '2', title: 'Internet', category: 'Item Basico', price: 89.99 },
    { id: '3', title: 'Energia', category: 'Item Basico', price: 139.99 },
    { id: '4', title: 'Amazon Video', category: 'Streaming', price: 19.99 },
    { id: '5', title: 'Nubank', category: 'Cartão', price: 79.99 },
    { id: '6', title: 'Gás', category: 'Item Basico', price: 99.99 },
    { id: '7', title: 'Inter', category: 'Cartão', price: 899.99 },
    { id: '8', title: 'Mercado', category: 'Alimentação', price: 739.99 },
    { id: '9', title: 'Disney', category: 'Streaming', price: 19.99 },
  ]

  const handleNavigateToNewExpense = () => {
    Router.push('dashboard/add')
  }
  return (
    <TemplateContainer className='flex-col items-center justify-start'>
      <header className='w-full max-w-screen-lg flex justify-between h-1/6 items-center px-4'>
        <span className='font-bold text-xl sm:text-2xl text-center'>Controle seus gastos</span>

        <nav className=' flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row'>
          <Button onClick={() => handleNavigateToNewExpense()}>Adicionar Conta</Button>
          <Button variant='ghost'>Sair</Button>
        </nav>
      </header>
      <main className='w-full max-w-screen-lg h-5/6 p-4 mb-5 sm:mb-10 rounded-lg shadow-xl space-y-4 overflow-y-scroll sm:space-y-0 sm:grid content-start sm:grid-cols-3 bg-sky-200 sm:gap-4'>
        {array?.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              category={item.category}
              price={item.price} />

          ))
        }
      </main>
    </TemplateContainer>
  )
}






