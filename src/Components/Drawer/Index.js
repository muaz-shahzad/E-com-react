import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BasicGrid from '../../TestFile';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "./Index.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300, backgroundColor: "#d9e4e0", height: "100vh", paddingLeft: "40px" }}
            role="presentation"
            className='mainBox'
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem className='drawer_list1' disablePadding onClick={toggleDrawer(anchor, false)}>
                    <ClearOutlinedIcon sx={{ cursor: "pointer" }} />
                </ListItem>
            </List>
            <List>
                <div className="drawer_1st">
                    <h3>
                        For Moments Like No Other
                    </h3>
                    <a href='#'>Watch the Film</a><br />
                    <a href='#'>Explore Ana’s Jewelry</a><br />
                    <a href='#'>Styling Inspiration</a><br />
                    <a href='#'>Men’s Jewelry</a><br />
                    <a href='#'>Meet Ana de Armas</a><br />
                    <a href='#'>Meet the Jewelry Designer</a>
                </div>
                <br />
                <div className="drawer_1st">
                    <h3>
                        For Moments Like No Other
                    </h3>
                    <a href='#'>Watch the Film</a><br />
                    <a href='#'>Explore Ana’s Jewelry</a><br />
                    <a href='#'>Styling Inspiration</a><br />
                    <a href='#'>Men’s Jewelry</a><br />
                    <a href='#'>Meet Ana de Armas</a><br />
                    <a href='#'>Meet the Jewelry Designer</a>
                </div><br />   <div className="drawer_1st">
                    <h3>
                        For Moments Like No Other
                    </h3>
                    <a href='#'>Watch the Film</a><br />
                    <a href='#'>Explore Ana’s Jewelry</a><br />
                    <a href='#'>Styling Inspiration</a><br />
                    <a href='#'>Men’s Jewelry</a><br />
                    <a href='#'>Meet Ana de Armas</a><br />
                    <a href='#'>Meet the Jewelry Designer</a>
                </div>
                <br />
                <h4 style={{ fontSize: "13px", fontWeight: "200" }}>Follow Us</h4>
                <br />
                <div className='iconsDrawer'>
                    <a href='#'><FacebookIcon /></a>
                    <a href='#'><YouTubeIcon /></a>
                    <a href='#'><InstagramIcon /></a>
                    <a href='#'><LinkedInIcon /></a>
                    <a href='#'><TwitterIcon /></a>
                    <a href='#'><PinterestIcon /></a>
                </div>
                <br />
                <br />
                <h4 style={{ fontSize: "13px", fontWeight: "200" }} ><BasicGrid/></h4>
                {/* <div className='REGIONDrawer'>
                    <div className='hall'> <a href='#'>US</a><br /></div>
                    <div className='hall'>  <a href='#'>France</a><br /></div>
                    <div className='hall'>  <a href='#'>China</a><br /></div>
                    <div className='hall'> <a href='#'>India</a><br /></div>
                    <div className='hall'>  <a href='#'>UAE</a><br /></div>
                </div> */}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)} style={{ cursor: "pointer" }}>
                        <div className='menu_icon'>
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                        </div>
                    </div>
                    <Drawer
                        anchor={anchor}
                        elevation={16}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
