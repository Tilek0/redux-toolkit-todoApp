import React from "react";
interface ButtonProps {
    children: React.ReactNode
    btnHandler: () => void
}
export const MyButton: React.FC<ButtonProps> = ({children, btnHandler}) => {
    return (
        <button
            onClick={btnHandler}
            className='grassCard'
        >{children}</button>
    )
}