import React from 'react';
import './chatAreaInput.css';
import SearchIcon from '@mui/icons-material/Search';

export const ChatAreaInput = () => {
  return (
    <div className='chat-area-input'>


     <SearchIcon/>
     <input type='text' placeholder='typing...' className='search-input'/>
   
    </div>
  )
}
