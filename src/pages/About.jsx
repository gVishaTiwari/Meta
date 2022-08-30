import './About.css';
import { GiDeerHead } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
const About =()=>{
    return(
        <div id='container'>
           <div id="upper">

           </div>
           <div id="middle">
            <div className="heading">
           Welcome to onepage website
           </div>
           <div className="middle-subheading">
                
           Everything you need to manage your 
           <br/>
           one page website, in your pocket.
           </div>

           </div>
           <div id='lower'>
                    <div id="div1">
                        <GiDeerHead size='60px' color='#017afe'/>
                        <h3>Better Approach</h3>
                        <div className='text'>
                        Cobbler's pose, bound angle pose staff pose bow pose sage koundinya.
                        </div>
                        <a className="hover"
                        href='self' target='#'>Learn More</a>
                    </div>
                    <div id="div2">
                    <BiBarChart size='60px' color='#017afe'/>
                    <h3>Better Strategy</h3>
                        <div className='text'>Cobbler's pose, bound angle pose staff pose bow pose sage koundinya.</div>
                        <a className='hover'
                        href='self' target='#'>Learn More</a>

                    </div>
                    <div id="div3">
                        <BsGraphUp size='60px' color='#017afe'/>
                    <h3>Better Understanding</h3>
                        <div className='text'>Cobbler's pose, bound angle pose staff pose bow pose sage koundinya.</div>
                        <a className='hover'
                        href='self' target='#'>Learn More</a>


                    </div>
           </div>
        </div>
    )
}
export default About;