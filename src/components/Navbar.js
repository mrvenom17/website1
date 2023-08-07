import React, { useState } from 'react';
import logo from "../assets/cybercelllogoo.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  /* usestate for icon change of sidenavbar*/
    const [navbarOpen, setNavbarOpen] = useState(false);


  return (<> 
  
  
    {/* ***************** Hero section start ************* */}
    <div className="box">
        <input type="checkbox" name="readmore" id="readmore"/>
        <div className="content">
            <div className="des">
            <span>W</span>elcome to <span>CyberCell</span> GU , where we ignite Cybersecurity Awareness and Innovation. Join us in safeguarding the digital realm through cutting-edge events and initiatives. Unveil the enigma, empower change makers, and collaborate to break barriers.
           Our tribe of cybersecurity enthusiasts, hackers, and tech visionaries is on a mission to disrupt the disruptors. From immersive workshops to boundary-pushing hackathons, CyberCell is your launchpad for groundbreaking innovation.
           Our diverse team of dreamers, thinkers, and doers is united by a singular purpose – to make the world better through knowledge. Join us today!
            </div>
            <div className="button">
                <label htmlFor="readmore"
                    data-more="READ MORE"
                    data-less="READ LESS"
                ></label>
            </div>
        </div>
    </div>



    
    <div id="header" className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={120} height={35} loading="lazy"/>
        </Link>


        <nav >
            <ul id="navbar" className={navbarOpen?"text-richblack-100 flex gap-x-6 #navbar active":"text-richblack-100 flex gap-x-6 #navbar"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <Link to="/">Events</Link>
                </li>
               
                <li>
                    <Link to="/">Games</Link>
                </li>
                <li>
                    <Link to="/">Team</Link>
                </li>

                 <li>
                    <Link to="/">About</Link>
                </li>

                
                 <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Register
                    </button>
                </Link>
            }
         
        </div>
      </ul>
  </nav>
       
      
      <div id="mobile" onClick={() => setNavbarOpen((prev) => !prev)}>
        <i id='bar' className={navbarOpen ? "fas fa-times":"fas fa-bars"}></i>
      </div>

    </div>
       {/* ***************************Navbar end************************ */}




  









</>
  )
}

export default Navbar
