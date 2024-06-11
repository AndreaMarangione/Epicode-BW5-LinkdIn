import React from 'react'
import './mainbutton.css'

const MainButton = ({children, variant, onClick}) => {

    switch (variant) {
        case 'blue':
            return (
                <button className='btn main-button py-1 px-3 rounded-pill fw-semibold mt-2 icon-link main-button-blue' onClick={onClick}>{children}</button>
              )
    
        default:
            return (
                <button className='btn main-button py-1 px-3 rounded-pill fw-semibold mt-2 icon-link ' onClick={onClick}>{children}</button>
              )
    }

  
}

export default MainButton