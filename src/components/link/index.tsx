import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link'

export const Link = ({ children, href, ...props }: Props) => {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}