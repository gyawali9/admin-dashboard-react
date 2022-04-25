import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../../Data/Data';
import './Sidebar.css'

import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" width={60} />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected === index? 'menuItem active' : 'menuItem' }key={index} onClick={()=>setSelected(index)}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div> 
                )
            })}  
            <div className="menuItem">
                <FiLogOut/>
            </div> 
        </div> 
    </div>
  )
}

export default Sidebar