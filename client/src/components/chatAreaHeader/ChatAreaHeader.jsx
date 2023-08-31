import React from 'react'
import './chatAreaHeader.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ChatAreaHeader = () => {
    return (
        <div className='chat-area-header'>

            <div className='con-icon'>{'R'}</div>
            <div className='con-name'>{'remil'}</div>
            <div className='con-lastmessage'>{'last message'}</div>
            <div className='con-delete'><DeleteOutlineIcon/></div>
        </div>
    )
}
