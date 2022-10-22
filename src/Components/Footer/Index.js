import React from 'react';
import "./Index.css"
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
    return (
        <>
            <div className="footer_supper">
                <Grid container spacing={2} className="footer_supper">
                    <Grid item xs={3.5} className="grid1">
                        <h4 style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}>EXPLORE MORE</h4>
                        <h2 className='footerA'>
                            <a href='#'>
                                Watch the Film
                            </a><br />
                            <a href='#'>
                                Explore Ana’s Jewelry
                            </a><br />
                            <a href='#'>
                                Styling Inspiration
                            </a><br />
                            <a href='#'>
                                Men’s Jewelry
                            </a><br />
                            <a href='#'>
                                Meet Ana de Armas
                            </a><br />
                            <a href='#'>
                                Meet the Jewelry Designer
                            </a>
                        </h2>

                        <br />
                        <span className='lastName'>
                            <a href='#'>Terms of Service
                            </a>
                            |
                            <a href='#'>Legal Notices
                            </a>
                            |
                            <a href='#'>Privacy Policy</a>
                        </span>
                    </Grid>
                    <Grid item xs={3.5}  className="grid2">
                        <h4 style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}>
                            FOLLOW US
                        </h4>
                        <div className='sociallinksMain'>
                            <div className='sociallinks'>
                                <button class="button-48" role="button"><span class="text"><FacebookIcon /></span></button>
                                <button class="button-48" role="button"><span class="text"><YouTubeIcon /></span></button>
                                <button class="button-48" role="button"><span class="text"><InstagramIcon /></span></button>
                            </div>
                            <div className='sociallinks2'>
                                <button class="button-48" role="button"><span class="text"><LinkedInIcon /></span></button>
                                <button class="button-48" role="button"><span class="text"><TwitterIcon /></span></button>
                                <button class="button-48" role="button"><span class="text"><PinterestIcon /></span></button>
                            </div>
                        </div>




                    </Grid>
                    <Grid item xs={3.5}  className="grid3">
                        <h4 style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}>
                            ONLY NATURAL DIAMONDS
                        </h4>
                        <p style={{ color: "#000000a1", fontSize: "13px", fontWeight: "500" }}>Only Natural Diamonds, brought to you by the Natural Diamond Council, is the definitive destination for inspiration, insights and information on natural diamonds.</p>
                        <br />
                        <h4 style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}>
                            ONLY NATURAL DIAMONDS
                        </h4 >
                        <p style={{ color: "#000000a1", fontSize: "13px", fontWeight: "500" }}>Only Natural Diamonds, brought to you by the Natural Diamond Council, is the definitive destination for inspiration, insights and information on natural diamonds.</p>
                    </Grid>
                </Grid>

            </div>
        </>
    );
}

export default Footer;