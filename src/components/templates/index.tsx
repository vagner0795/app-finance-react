import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.div`
w-screen h-screen bg-sky-100 flex justify-center
`

export const TemplateContent = tw.div`
h-full w-full max-w-screen-lg  md:grid md:grid-cols-2 gap-20 px-10

`

export const TemplateHeroSideBar = tw.aside`
flex items-center justify-center

`
export const TemplateMain = tw.main`
flex flex-col justify-center items-center gap-20

`