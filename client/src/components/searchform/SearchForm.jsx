import React from 'react'
import './searchform.css'

const SearchForm = () => {
  return (
    <div className='search-form d-flex'>
        <button className='search-form__button btn p-0 ps-2 lh-1 '>
            <ion-icon name='search'></ion-icon>
        </button>
        <input type="text" placeholder='Cerca' className='form-control border-0 '/>
    </div>
  )
}

export default SearchForm