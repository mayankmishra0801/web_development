import { BatteryFullRounded, Menu, ShoppingBag } from "@mui/icons-material";
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom";

function Pagedrawer(){

const [open1,setopen1] = useState(false);

function handle(){
setopen1(true)
}

function close(){
    setopen1(false)
}

return(

<>

<Box style={{display:"flex"}}>

<AppBar  color="secondary" >
<Toolbar>
<IconButton onClick={handle} color="inherit">
  <Menu/>  
</IconButton>
<Typography variant="h5">Appbar</Typography>
</Toolbar>
</AppBar>

<Drawer open={open1} anchor="bottom" onClose={close}>

<List>
<Link to="/App">
    <ListItem>
        <ListItemButton>
            <IconButton>
            <ShoppingBag/>
            </IconButton>
            <ListItemText primary="shoppingbag" secondary="shoppingbag"/>
        </ListItemButton>
    </ListItem>
    </Link>

    <ListItem>
        <ListItemButton>
            <IconButton>
            <ShoppingBag/>
            </IconButton>
            <ListItemText primary="shoppingbag" secondary="shoppingbag"/>
        </ListItemButton>
    </ListItem>


    <ListItem>
        <ListItemButton>
            <IconButton>
            <ShoppingBag/>
            </IconButton>
            <ListItemText primary="shoppingbag" secondary={
        
        <BatteryFullRounded/>
            }/>
        </ListItemButton>
    </ListItem>


</List>




</Drawer>



    <Box sx={{mt:6,p:3}}>
    <Typography variant="h5">Search Quality Answers Now. Get The Best Result With ZapMeta About Quality Answers Now. Find More Harvard Digital Transformation. ZapMeta Offers The Overview from 6 Engines. The Complete Overview. Web, Images & Video. Information 24/7.</Typography>

    <Typography variant="h5">Search Quality Answers Now. Get The Best Result With ZapMeta About Quality Answers Now. Find More Harvard Digital Transformation. ZapMeta Offers The Overview from 6 Engines. The Complete Overview. Web, Images & Video. Information 24/7.</Typography>
    <Typography variant="h5">Search Quality Answers Now. Get The Best Result With ZapMeta About Quality Answers Now. Find More Harvard Digital Transformation. ZapMeta Offers The Overview from 6 Engines. The Complete Overview. Web, Images & Video. Information 24/7.</Typography>







    </Box>
</Box>








</>



)



}

export default Pagedrawer;