import React from 'react';
import './mainContainer.css';
import SideBar from '../sideBar/SideBar';
import WorkArea from '../workArea/WorkArea';

const MainContainer = () => {
  return (
    <div className='main-container'>
        <SideBar/>
        <WorkArea/>
        
        </div>
  )
}

export default MainContainer