import React from 'react';
import './mainContainer.css';
import SideBar from '../sideBar/SideBar';
import { ChatArea } from '../chatArea/ChatArea';


const MainContainer = () => {
  return (
    <div className='main-container'>
        <SideBar/>
        <ChatArea/>
        
        </div>
  )
}

export default MainContainer