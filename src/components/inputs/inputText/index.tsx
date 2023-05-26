import { InputHTMLAttributes } from "react"


export const InputText = ({label,...props}: Props) => {
    return (
        <label className="flex flex-col w-full">
            <span className="px-2 py-2">{label}</span>
            <input type="email" {...props} className="border border-blue-500 h-10 px-4 rounded-md" />
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}