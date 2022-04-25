import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" width={40} />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

    </div>
  )
}

export default Sidebar