
import React from 'react'
import { Box,Grid, Typography,Button } from "@mui/material";
import { createTheme,responsiveFontSizes,ThemeProvider } from "@mui/material/styles";
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import pic from "./0-removebg-preview.png";
import "./Landing.css"
import { useNavigate } from 'react-router-dom';
import { Signup } from '../Authentication/Signup';
import { useStateValue } from '../../MyContexts/StateProvider';
import { auth } from '../../firebase';
import { Offer } from '../Offer/Offer.js';


let theme = createTheme();


theme = responsiveFontSizes(theme);
export const Landing = () => {
    const [{user,name},dispatch]=useStateValue();
  const navigate= useNavigate(); 

 const goToSignup = ()=>{
  navigate('./signup');
 } 
 const goToLogin = ()=>{
    navigate('./login');
 }
    const Logout = () =>{
        auth.signOut();
    }   
  return (
    <>
<div className='main_page_container'>
    <ThemeProvider theme={theme}>

    <Grid className='landing_grid' container direction="column" spacing={2} my={9} sx={{ height:"100%"}}>
        <Grid item container sx={{
            height: "100vh"
        }} >
            <Grid item xs={12} md={6} container spacing={3}>
                {/* <Typography mx={9} sx={{ typography: {
                    xs: 'h1',
                    md: 'h2'
                }
                , display: "flex",
                 alignContent:"center",
                 alignItems:"center" ,
                 overflow:"hidden",
                 textOverflow: "ellipsis" ,

                }} >
                    Connect.
                    Collaborate.Create
                </Typography> */}
                <Grid item xs={12} >

                    <Typography mx={5} my={1} variant='h2'sx={{
                        color:"rgba(66,1,83,1)"
                    }} >
                        Connect.
                        Collaborate.Create
                    </Typography>
                    <Typography mx={5} my={7} variant='h6'sx={{
                        color:"rgba(66,1,83,1)"
                    }} >
                         Unlock the power of collaborations to fuel your innovation, accelerate your progress, and embark on an exciting journey of limitless possibilities with us.
                    </Typography>
                </Grid>
                <Grid my={-7} mx={7} item xs={12} sx={{display:"flex",
                        justifyContent:"flex-start",
                        alignItems:"flex-start",
                        justifyItems:"flex-start"
                    }} >

                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        {(!user)?<Button sx={{ maxHeight:"35px" ,marginLeft: "auto", borderRadius: "50" }} variant="outlined" color="secondary" 
                        onClick={()=> goToLogin()}
                        >Login</Button>:
                        <Button sx={{ maxHeight:"35px" ,marginLeft: "auto", borderRadius: "50" }} variant="outlined" color="secondary" 
                        onClick={()=> Logout()}
                        >Logout</Button>
                        }
                        {!user && <Button sx={{maxHeight:"35px" ,marginLeft: 2, borderRadius: "50" }} variant="outlined" color="secondary" onClick={()=> goToSignup()}>Sign Up</Button>}
                    </Box>

{/* {
    user!==null && <Button sx={{ maxHeight:"35px" ,marginLeft: "auto", borderRadius: "50" }} variant="outlined" color="secondary" 
   
    >Welcome to Campus Connect
    </Button>
} */}
                </Grid>
                {/* <Grid item mx={5} container xs={12} spacing={1}>
                    
                        <SecurityIcon  />
                    <Grid my={-1.5} item xs={12} md={2} >
                        <Typography variant='h6'>
                            connect
                        </Typography>
                    </Grid>
                        <SecurityIcon/>
                    <Grid my={-1.5} item xs={12} md={3}>
                        <Typography variant='h6'>
                            communicate
                        </Typography>
                    </Grid>
                        <SecurityIcon/>
                    <Grid my={-1.5} item xs={12} md={5}>
                        <Typography variant='h6'>
                            create
                        </Typography>
                    </Grid>
                    
                </Grid> */}
            </Grid>
            <Grid item xs={12} md={6} container spacing={1} sx={{
                paddingLeft:"20px"
            }} >
                <img className='landing_page_img'
                    width="100%" height="80vh"
                    alt="complex"
                    src={pic}
                />
            </Grid>
        </Grid>
        <Grid item container sx={{background: "rgba(192,104,232,0.5)",
            height: "60vh",
        }} >
            <Grid item xs={12} md={5} container spacing={1} sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"10px"
                
            }} >
                <Typography variant='h3'sx={{
                        color:"rgba(66,1,83,1)"
                    }}>
                         What We Do ? 
                
                    
                </Typography>
            </Grid>
            <Grid item xs={10} md={6} container spacing={1} sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"20px"
            }} >
                <Typography variant='body'sx={{
                        color:"rgba(66,1,83,1)"
                    }}>
                   
                
               <b style={{fontSize: "19px"}}> At Campus-Connect we believe that finding the right people can be the catalyst for innovation and success. Whether you're seeking a startup co-founder, a talented team member for your project, or even a co-host for your podcast, we've got you covered. </b> 
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    </ThemeProvider>
  <Offer/>
  </div>
    </>
  )
}