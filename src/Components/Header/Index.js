import React from 'react';
import TemporaryDrawer from '../Drawer/Index';
import "./Index.css"
import Drawer from '../Drawer/Index';

import logo from '../assets/logobg.png'
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import banner from '../assets/banner.jpg'

function Header() {
    return (
        <>


            <div className='header_super'>
                {/* <TemporaryDrawer /> */}
                <div className="banner_header_div">
                    <img src={banner} className="banner_header" />
                </div>
                <div className='nav'>
                    <div className='menu_icon'>
                        <Drawer />
                        {/* <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div> */}
                    </div>
                    <div className='logo_container_header'>
                        <img src={logo} className="logo_header" />
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;