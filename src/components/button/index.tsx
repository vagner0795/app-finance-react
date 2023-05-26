import React, { Attributes, ButtonHTMLAttributes, ReactNode } from 'react'

export const Button = ({ children,...props }: Props) => {
    return (
            <button {...props} type='submit' className='h-12 text-white text-lg font-bold bg-violet-600 rounded-md hover:bg-violet-800 disabled:cursor-not-allowed disabled:bg-gray-700'>{children}</button>
    )
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: ReactNode
}