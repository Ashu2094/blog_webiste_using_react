import { useState } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'



export default function TopBar(props) {
  
  return (
   

    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className='topCenter'>
        <ul className="topList">
            <li className="topListItem"><Link className='link' to="/" >HOME</Link></li>
            <li className="topListItem"><Link className='link' to="/" >ABOUT</Link></li>
            <li className="topListItem"><Link className='link' to="/" >CONTACT</Link></li>
            <li className="topListItem"><Link className='link' to="/write" >WRITE</Link></li>
            {/* <li className="topListItem" onClick={() => props.setMessage(user=>!user)}>TOGGLE USER</li> */}
            
        </ul>
      </div>
      <div className='topRight'>
        {
          props.user ?(
            <>
            <Link className='.link' to="/settings"><img className='topImg'
                src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" /></Link>
            
            </>
          
  ) : (
    <ul className='topList'>
        <li className='topListItem'>
        <Link className='link' to="/login" >LOGIN</Link>
        </li>
        <li className='topListItem'>
        <Link className='link' to="/register" >REGISTER</Link>
    </li>
    </ul>
    
    
  )
        }
        
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
