import React from 'react'
import './sbSearch.css'

import SearchIcon from '@mui/icons-material/Search';


export const SbSearch = () => {
  return (
    <div className='sb-search'>
     <SearchIcon/>
     <input type='text' placeholder='search' className='search-input'/>
    </div>
  )
}
