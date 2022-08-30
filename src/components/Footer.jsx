import './Footer.css';
import { FiChevronUp } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkerAlt,FaPhone,FaRegClock } from "react-icons/fa";

  


const Footer =()=>{
    return(
      
        <div className="footer-container">
       
             <div className="upper">
                <div className="empty__space1"></div>
                <div className="upper__container">
                <div className='ready'>
                <h2>Ready to revolutionize your website?</h2>
                </div>
                <div className='learn'>Learn More
                </div>
                </div>
                <div className="empty__space2"></div>
             </div>
             <hr/>
             <div className="middle">
               <div className='resource'>
               
                <ul>
                <h2>Resources</h2>
                <li><a href='self' target='#'>Home</a></li>
                <li><a href='self' target='#'>Product</a></li>
                <li><a href='self' target='#'>Privacy Policy</a></li>
                <li> <a href='self' target='#' >Terms & Conditions</a></li>
                </ul>
               </div>
               <div className='company'>
                <ul>
                <h2>Company</h2>
                
                <li><a href='self' target='#'>Home</a></li>
                <li><a href='self' target='#'>Product</a></li>
                <li><a href='self' target='#'>Privacy Policy</a></li>
                <li> <a href='self' target='#' >Terms & Conditions</a></li>
                </ul>
               </div>
               <div className='contact__address'>
               <h2>Contact Details</h2>
              <div className='map'>
                <div id='map__logo'><FaMapMarkerAlt size='20'/></div>
                <div id='map__text'>221B Baker Street</div>
                </div> 
              <div className='phone'>
                <div id='phone__logo'><FaPhone size='20'/></div>
                <div id='phone__num'>(372) 587-2335</div>
                </div> 
              <div className='clock'>
                <div id='clock__logo'><FaRegClock size='20'/></div>
                <div id='clock__text'> 11 a.m - 12 p.m</div>
               
                </div> 
               </div>
               <div className='sign__up'>
               <h2 >Sign up for Newsletter</h2>

                <input type='text' value='Enter Email Adress'></input>
                <div className='fa'>
                <FaPaperPlane  size='22px' />
                </div>
               </div>
             
             </div>
       
             <hr/>
        <div className="footer">
                <div id='footer__Built'>© Built with pride and caffeine. All rights reserved.</div>
                <div id='footer__FiChe'> <FiChevronUp size='50px' color='black'/></div>
             
             </div>
             </div>
     

        
    )
}

export default Footer;