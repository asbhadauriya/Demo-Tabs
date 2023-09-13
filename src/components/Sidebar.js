import React from 'react';
import '../App.css';

import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from '../json/SidebarData';
const Sidebar = () => {
  const location=useLocation()
  return (
    <div className="sidebar">
    <ul className="sidebarList">
    {
      SidebarData.map((val,key)=>{
        return(
          <Link style={{textDecoration:'none'}} to={val.link}>
          <li key={key}
          className='row'
          id={location.pathname== val.link?"active":""}
          >
          <div id="icon"><span class="mdi mdi-home"></span></div><div id="title">{val.title}</div>
          </li>
          </Link>
          )
        })
    } 
  </ul>
    </div>
  );
};

export default Sidebar;