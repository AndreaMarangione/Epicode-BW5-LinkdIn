import React from 'react';
import './mainbutton.css';

const MainButton = ({ children, variant, onClick, className, type }) => {
    if (variant === 'blue') {
        return <button c
            lassName={`btn main-button py-1 px-3 rounded-pill fw-semibold icon-link main-button-blue ${className}`}
            onClick={onClick}
            type={type || ''}>
            {children}
        </button>
    }
    if (variant === 'fill') {
        return <button
            className={`btn main-button py-1 px-3 rounded-pill fw-semibold icon-link main-button-blue-fill ${className} `}
            onClick={onClick}
            type={type || ''}>
            {children}
        </button>

    }
    if (!variant) {
        return <button
            className={`btn main-button py-1 px-3 rounded-pill fw-semibold icon-link ${className} `}
            onClick={onClick}
            type={type || ''}>
            {children}
        </button>
    }
}

export default MainButton;
