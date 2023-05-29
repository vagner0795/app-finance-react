import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import tw from 'tailwind-styled-components'

export const Button = ({ children, variant,...props }: Props) => {

    if(variant === 'ghost'){
        return(
            <GhostButton {...props} type='submit'>{children}</GhostButton>
    
        )
    } 

    return (
            <MainButton {...props} type='submit'>{children}</MainButton>
    )
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: ReactNode
    variant?: 'ghost'
}


export const BaseButton = tw.button`
h-12 px-8 text-white text-lg font-bold  rounded-md  disabled:cursor-not-allowed disabled:bg-gray-700
`

export const MainButton = tw(BaseButton)`
bg-violet-600 hover:bg-violet-800

`

export const GhostButton = tw(BaseButton)`
bg-transparent hover:bg-gray-50 text-violet-600 border border-violet-600

`