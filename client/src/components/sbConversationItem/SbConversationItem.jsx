import React from 'react'
import './sbConversationItem.css'

const SbConversationItem = ({ data }) => {
    return (
        <div className='conversation-container'>
            <div className='con-icon'>{data.name[0]}</div>
            <div className='con-name'>{data.name}</div>
            <div className='con-lastmessage'>{data.lastMessage}</div>
            <div className='con-timestamp'>{data.timeStamp}</div>
        </div>


    )
}

export default SbConversationItem