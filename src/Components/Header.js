import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import './styles/header.css'

function Header() {
  return (
    <header>
      <AiFillGithub color='white' className='headLogo'/>

    </header>
  )
}

export default Header