import React from 'react'
import './mainbutton.css'

const MainButton = ({children, variant, onClick, className}) => {

    if (variant === 'blue') {
        return <button className={`btn main-button py-1 px-3 rounded-pill fw-semibold mt-2 icon-link main-button-blue ${className}`} onClick={onClick}
                       onClick={onClick}>{children}</button>
    }
    if (variant === 'fill') {
        return <button className={`btn main-button py-1 px-3 rounded-pill fw-semibold mt-2 icon-link main-button-blue-fill ${className} `}
                       onClick={onClick}>{children}</button>

    }


}

export default MainButton