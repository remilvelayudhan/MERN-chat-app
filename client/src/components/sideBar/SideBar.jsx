import React from 'react'
import './sideBar.css'

import { SbSearch } from '../sbSearch/SbSearch'
import { SbHeader } from '../sbHeader/SbHeader'
import { SbConversation } from '../sbConversation/SbConversation'

const SideBar = () => {
    return (
        <div className='side-bar-container'>
          <SbHeader/>
          <SbSearch/>
          <SbConversation/>
        </div>
    )
}

export default SideBar