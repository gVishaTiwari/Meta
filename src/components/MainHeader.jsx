import React from 'react';
import classes from './MainHeader.module.css';
import {
  NavLink
} from 'react-router-dom';


const MainHeader =()=>{
    return (
      <div className={classes.main}>
        <header>
        <a href="https://themebubble.com/demo/webify/onepage/" ><img className={classes.logo} style={{height:'30px', width:'47px',}} src="https://themebubble.com/demo/webify/onepage/wp-content/themes/webify/assets/img/logo-dark.png" alt="logo"  /></a>
        </header>
         <header  className={classes.header}>
          <nav>
             <ul>
              <li>
                <NavLink activeClassName={classes.active}
                 to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink 
                activeClassName={classes.active}
                to='/pricing'>Pricing</NavLink>
              </li>
              <li>
                <NavLink 
                activeClassName={classes.active}
                to='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink 
                activeClassName={classes.active}
                to='/contact'>Contact</NavLink>
              </li>
              <li>
                <NavLink
                activeClassName={classes.active}
                
                to='/testimonical'>Testimonial</NavLink>
              </li>
              <li>
                <NavLink
                activeClassName={classes.active}
                 to='/about'>About</NavLink>
              </li>
            </ul>
          </nav>
            
        </header>
        </div>
     )
}

export default MainHeader;