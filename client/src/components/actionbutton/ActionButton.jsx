import React from 'react'
import './actionbutton.css'

const ActionButton = ({iconName, onClick}) => {
  return (
    <button className='btn action-button rounded-circle ' onClick={onClick}><ion-icon name={iconName}></ion-icon></button>
  )
}

export default ActionButton