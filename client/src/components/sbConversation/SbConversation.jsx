import React, { useState } from 'react'
import './sbConversation.css'
import SbConversationItem from '../sbConversationItem/SbConversationItem'

export const SbConversation = () => {
 const [conversation,useConversation] =useState(
[
  {
    name: "Test 1",
    lastMessage: 'last message 1',
    timeStamp: 'today'
  },
  {
    name: "Test 2",
    lastMessage: 'last message 2',
    timeStamp: 'today'
  }
 
]
 );



  return (
    <div className='sb-conversation'> 
    {
      conversation.map((item,index)=>{
        return <SbConversationItem key={index} data={item}/>
      })
    }
    </div>
  )
}
