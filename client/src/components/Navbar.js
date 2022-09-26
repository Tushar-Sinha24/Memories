import React from 'react'
import './css/navbar.css'
import {AppBar, Box, Toolbar , Typography , Button ,Avatar} from '@mui/material'
import {Link , NavLink ,useNavigate} from "react-router-dom"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div>
      <AppBar position='static' sx={{background : 'linear-gradient(90deg, rgba(0,2,28,1) 0%, rgba(10,18,88,1) 54%, rgba(0,104,255,1) 100%)'}}>
        <Toolbar>
        <NavLink to='/' className='navLink'><Typography variant="h6">Memories App</Typography></NavLink>
            <Box display='flex' marginLeft='auto'>
            {!localStorage.getItem('token')?
            <div className="login-signup">
              <Link exact="true" to='/login' className='navLink'><Button  variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Login</Button></Link>
              <Link exact="true" to='/signup' className='navLink'><Button  variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Signup</Button></Link>
            </div>:
            
            <div className="drop-down" >
              <ul>
                <li><Avatar>H</Avatar> 
                  <ul>
                    <li><a href="#">Tusharasf asdfda sf asd Sinha</a></li>
                    <li><a href="#">Tushar Sinha</a></li>
                    <li><a href="#" onClick={handleLogout}>Logout</a></li>
                  </ul>
                </li>
              </ul>
              {/* <Button  onClick={handleLogout} variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>User Name</Button>
              <Button  onClick={handleLogout} variant='contained' sx={{margin:1 , borderRadius:10}} color='warning'>Logout</Button> */}
            </div>
            }
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
