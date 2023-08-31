import React from 'react'
import './chatArea.css'
import { ChatAreaHeader } from '../chatAreaHeader/ChatAreaHeader'
import { ChatAreaMessage } from '../chatAreaMessage/ChatAreaMessage'
import { ChatAreaInput } from '../chatAreaInput/ChatAreaInput'

export const ChatArea = () => {
  return (
    <div className='chat-area-container'>
      <div>
        <ChatAreaHeader />
      </div>
      <div className='chat-area-message'>
        <ChatAreaMessage />
      </div>
      <div>
        <ChatAreaInput />
      </div>
    </div>
  )
}
