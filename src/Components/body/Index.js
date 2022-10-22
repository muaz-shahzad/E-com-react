import React from 'react';
import "./Index.css"
import "././animation/indexAni.scss"
import style from '../assets/style.jpg'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import pic19 from "../assets/pic19.jpg"
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"
import pic9 from "../assets/pic9.jpg"
import pic10 from "../assets/pic10.jpg"
import pic11 from "../assets/pic11.jpg"
import pic12 from "../assets/pic12.jpg"
import pic13 from "../assets/pic13.jpg"
import pic14 from "../assets/pic14.jpg"
import pic15 from "../assets/pic15.jpg"
import pic16 from "../assets/pic16.jpg"
import pic17 from "../assets/pic17.jpg"

import IndexAni from './animation/indexAni';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Body() {
    return (
        <>
            <div className='body_super'>
                {/* first part */}
                <div className='first_section'>
                    <div className='part1'>
                        <Box sx={{ width: "100%" }}>
                            <Grid container>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <div className="title_wrapper">
                                            <h4 className="subtitle">
                                                STYLING INSPIRATION
                                            </h4>
                                            <h1 className="title">
                                                <p>A Sense of <em>Adventure</em></p>
                                            </h1>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12}>
                                    <div className='banerr'>
                                        <img src={style} style={{ height: "100%", width: "100%" }} />
                                    </div>
                                </Grid>
                                <Grid container spacing={3} className='firstRow'>
                                    <Grid item xs={6}>
                                        <img src={pic1} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic2} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p style={{ width: "550px", fontSize: "13px", marginTop: "-5px", }}>
                                            The adventurous spirit of a link bracelet makes it the ideal accompaniment for any wrist, especially those dangling off the back of a boat in the Med. Timeless in nature, this free-spirited piece styles well with delicate diamond bands and a classic line necklace or choker.
                                        </p>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={4} className='firstRow'>
                                    <Grid item xs={6}>
                                        <img src={style} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic3} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p style={{ width: "550px", fontSize: "13px", marginTop: "-5px", }}>
                                        To add a sense of adventure to your own classic diamond choker, pair it with a pendant that has symbolism or other special meaning. For an even more carefree style, layer diamond necklaces of varying lengths — you’ll instantly look and feel like you’re on vacation, even if you’re not.
                                        </p>
                                    </Grid>
                                </Grid>     <Grid container spacing={4} className='firstRow'>
                                    <Grid item xs={6}>
                                        <img src={pic4} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic5} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p style={{ width: "550px", fontSize: "13px", marginTop: "-5px", }}>
                                        A historic and favored silhouette of royalty, the marquise cut diamond ring is de rigueur once again. Whether you wear it traditionally as a diamond solitaire or in a trendy east-west setting, its long narrow shape elongates the finger and is the ideal blend of timeless and unique. It also looks pretty great clutching the steering wheel of a vintage vehicle.


                                        </p>
                                    </Grid>
                                </Grid>     <Grid container spacing={4} className='firstRow'>
                                    <Grid item xs={6}>
                                        <img src={pic6} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic7} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p style={{ width: "550px", fontSize: "13px", marginTop: "-5px", }}>
                                        Like a winding road in a yet-to-be-explored landscape, the diamond Cuban link necklace will weave its way into your heart. It’s just as easily styled on an open neckline as it is over a crew neck tee, making it an everyday essential piece that effortlessly transitions from day to night.
                                        </p>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} className='secoundRow'>
                                    <Grid item xs={6}>
                                        <img src={pic8} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic9} style={{ height: "600px", width: "100%" }} />
                                    </Grid>
                                </Grid>


                                <Grid container spacing={2} className='secoundRow'>
                                    <Grid item xs={6}>
                                        <img src={style} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic10} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                </Grid>



                                <Grid container>
                                    <Grid item xs={12}>
                                        <div className='banerr'>
                                            <img src={style} style={{ height: "100%", width: "100%", objectFit: "cover", marginTop: "30px" }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <p style={{ width: "50%", padding: "30px" }}>
                                        As you softly brush your hair back into place, scintillating diamond rings catch the sunlight. Mix and match the diamond styles that speak to you — there’s no rules when it comes to expressing your renewed sense of freedom and spirit.
                                        </p>
                                    </Grid>
                                </Grid>

                                <Grid container xs={12}>
                                    <div className='banerr'>
                                        <img src={style} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                    </div>
                                </Grid>


                                <Grid container spacing={4} style={{ padding: "30px  " }}>
                                    <Grid item xs={4}>
                                        <img src={pic11} style={{ height: "450px", width: "100%" }} />

                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={pic12} style={{ height: "450px", width: "100%" }} />

                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={pic13} style={{ height: "450px", width: "100%" }} />

                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-50px" }}>
                                        <p style={{ width: "50%", padding: "30px" }}>
                                        As the breeze gently wrestles your hair during a fête with your favorite people, stand out in a classic or statement-making diamond earring. Whether for a day party look or as dusk sets in, wearing diamond studs, mini cuff, or hoop earrings will instantly draw light to your face and keep even the last glimmers of the sunshine twinkling off these remarkable stones.
                                        </p>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={4} style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                    <Grid item xs={6}>
                                        <img src={pic14} style={{ height: "450px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={pic15} style={{ height: "450px", width: "100%" }} />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={4} style={{ paddingTop: "40px" }} className="piccontainersmall">
                                    <Grid item xs={4}>
                                        <img src={pic16} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={pic17} style={{ height: "400px", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6.1} >
                                        <p>
                                        Stacking diamond rings and bands will also catch the light, as will a long, lariat necklace that finishes off a casual and festive look.
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
                {/* first part */}

                {/* Secound part */}
                <div className='secound_section'>
                    First Section
                </div>
                {/* Secound part */}

                {/* Third part */}
                <div className='third_section'>
                    <Grid container className='third_section'>
                        <Grid item xs={4} style={{ paddingLeft: "100px" }}>
                            <h2 style={{ fontFamily: "serif", fontWeight: "400", fontSize: "40px", width: "200px" }}><i>Join our
                                Mailing List</i>
                            </h2>
                            <p style={{ fontFamily: "monospace", fontWeight: "500", fontSize: "14px", width: "200px" ,color:"rgba(0, 0, 0, 0.877)"}}>Sign up for diamond news,
                                inspiration, and specials.
                            </p>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                            <div style={{}}>
                                <div className='inputstyle' >
                                    <input type='text' className='inputfield_third' placeholder="Email Address " /><p><ArrowForwardIcon className='p' /></p></div></div>
                            <span style={{width:"350px",marginTop:"30px",display:"flex",justifyContent:"space-between"}}>
                                <input type='radio' className='xyz' />
                                <span style={{fontSize:"12px"}}>
                                   By submittingthis from, I give consent to Only  Natural Diamond to use mu email address to send  me perioducal newsletters
                                </span>
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={pic19} style={{ height: "100%", width: "100%", objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </div>
                {/* Third part */}
            </div>
            {/* <Grid container spacing={2}>
                <Grid item xs={6}>
                </Grid>
            </Grid> */}

        </>
    );
}

export default Body;