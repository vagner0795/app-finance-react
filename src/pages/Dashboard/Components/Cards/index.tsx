import React from 'react'
import { Button } from '../../../../components/button'
import tw from 'tailwind-styled-components'

export const Card = ({ title, category, price }) => {
    return (
        <CardContainer>

            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='px-4 py-1 bg-sky-200 text-violet-600 font-semibold rounded-full self-start'>{category}</p>
            <p className='font-medium'>{price}</p>
            <footer className='w-full flex justify-center gap-2'>
            <Button variant='ghost' className='px-4 text-md border-none text-emerald-500 hover:bg-emerald-100'>Editar</Button>
            <Button variant='ghost' className='px-4 text-md text-red-500 border-none hover:bg-red-100'>Excluir</Button>
            </footer>
        </CardContainer>
    )
}


export const CardContainer = tw.article`
bg-gray-200 p-6 shadow-lg space-y-3 rounded-xl relative flex justify-between flex-col

`