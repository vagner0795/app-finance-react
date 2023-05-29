import React from 'react'
import { Button } from '../../../../components/button'

export const Card = ({ title, category, price }) => {
    return (
        <article className='bg-gray-200 p-6 shadow-lg h-40 space-y-2 rounded-xl relative flex justify-between flex-col'>
            <Button variant='ghost' className='border-none text-sm absolute top-0 end-0 '>Excluir</Button>
            <Button variant='ghost' className='border-none text-sm absolute bottom-0 end-0 '>Editar</Button>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='px-4 py-1 bg-sky-200 text-violet-600 font-semibold rounded-full self-start'>{category}</p>
            <p className='font-medium'>{price}</p>
        </article>
    )
}
