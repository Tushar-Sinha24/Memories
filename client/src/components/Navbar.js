import React from 'react'
import './css/navbar.css'
import {AppBar, Box, Toolbar , Typography , Button} from '@mui/material'
import {Link , NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' sx={{background : 'linear-gradient(90deg, rgba(0,2,28,1) 0%, rgba(10,18,88,1) 54%, rgba(0,104,255,1) 100%)'}}>
        <Toolbar>
        <NavLink to='/' className='navLink'><Typography variant="h6">Memories App</Typography></NavLink>
            <Box display='flex' marginLeft='auto'>
            <Link exact to='/login' className='navLink'><Button  variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Login</Button></Link>
            <Link exact to='/signup' className='navLink'><Button  variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Signup</Button></Link>
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
