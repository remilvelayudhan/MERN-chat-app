import React from 'react'
import './sbHeader.css'


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';


export const SbHeader = () => {
  return (
    <div className='sb-header'>
        <div>
        <IconButton aria-label="account"> <AccountCircleIcon/></IconButton>
        </div>
        <div>
        <IconButton aria-label="person add"> <PersonAddIcon/></IconButton>
     
        <IconButton aria-label="group add"> <GroupAddIcon/></IconButton>
        <IconButton aria-label="add circle"> <AddCircleIcon/></IconButton>
        <IconButton aria-label="night light"> <NightlightIcon/></IconButton>
        </div>
    </div>
  )
}
