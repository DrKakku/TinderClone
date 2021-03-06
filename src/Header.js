import React from 'react'
import "./Header.css"
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import logo from "./logo.png"

function Header() {
    return (
        <div className='Header'>
            
            <IconButton >
                <AccountCircleIcon  fontSize="large" className="header_icon" />
            </IconButton>

            <IconButton >
            <img
            className="header_logo"
            src = {logo}
            alt=""
            onClick={hello}
            />
</IconButton>

            <IconButton>
                <ChatBubbleRoundedIcon  fontSize="large" className="header_icon"  />
            </IconButton>
        </div>
    )
}

function hello ()
{
    console.log('Hello');
}

export default Header
