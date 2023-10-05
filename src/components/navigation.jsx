import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Avatar } from 'antd';

const NavLinks =[
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
      title:'Webs',
      path:'/webs'
  },
    {
        title:'Contact Us',
        path:'/contactus'
    },
    {
        title:'Login',
        path:'/login'
    }
];

export default function Navigation({user}) {

  const [menuActive, setMenuActive] = useState(false);
  const menuContainerStyle = {
    left: menuActive ? '0' : '-300px',
  };
        return (
        <nav className={`site-navigation`}role="navigation">
            <span className="menu-title">TrustInfo</span>
            <div className={`menu-content-container`} style={menuContainerStyle}>          <ul>
                {NavLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                ))
                }
              </ul>
            <span className='menu-avatar-container'>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="{32}"/>
                <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
            </span>

            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)}/>
          </nav>
        );
  }