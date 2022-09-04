import React from 'react'
import logo from '../../photos/logo.png'
import '../Hameburger/hameburger.css'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function Hameburger() {
    const [state, setState] = React.useState({
  
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className='main'>
              <div className="close"><CloseIcon/></div>
            <NavLink className="nav" to="/Home">Home</NavLink>
            <NavLink className="nav" to="/Service">Service</NavLink>
            <NavLink className="nav" to="/About">About</NavLink>
            <NavLink className="nav" to="/Portfolio">Portfolio</NavLink>
            <NavLink className="nav" to="/Team">Team</NavLink>
            <NavLink className="nav" to="/Testimonial">Testimonial</NavLink>
            <NavLink className="nav" to="/Blog">Blog</NavLink>
            <NavLink className="nav" to="/Contact">Contact Us</NavLink>
            <div className="btn">BUY NOW</div>
          </div>
          
        </Box>
      );
    
  return (
      <>
    <div className="hameburger">
        <div className="pic">
                <img src={logo} alt="ERROR" />

                </div>

                <div  className='ham_none'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <div className="menu">
            <MenuIcon onClick={toggleDrawer(anchor, true)}/>
        </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
     
       
    </div>



 
    </>
  )
}
