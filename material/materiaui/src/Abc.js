import { HMobiledata, Home, Add, Delete, MobileFriendlyRounded, MobileOff, Approval, Atm, AdminPanelSettings, Autocomplete,  Drafts, Inbox, ExpandMore, Menu,LocationOn, Favorite, Restore } from "@mui/icons-material";
import { Avatar, Badge, Card, CardContent, Chip, Divider, Fab, Grid, Radio, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Button, ButtonGroup, Alert, List, ListItemButton, ListItemIcon, ListItemText, ListItem, CircularProgress, LinearProgress, Skeleton, Accordion, AccordionSummary, AccordionDetails, Snackbar, AppBar, Toolbar, IconButton, CardActions, Paper, BottomNavigation, BottomNavigationAction,  Breadcrumbs, Link, Pagination } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
function Abc() {

    function del() {
        alert("deleted")
    }
    const [open, setopen] = useState(false);
    

    function close() {
        setopen(false);
    }

    function myfun() {
        setopen(true);
    }

    // function BottomNavigation(){
        
    // }
    const[value , setValue] = useState("");
   


    return (
        <>

            <Grid container>
                <Grid lg={6}>

                    <CardContent>
                        <Card>
                            <CardContent>
                                {/* for writing text */}
                                <Typography variant="h1">Vanshika</Typography>

                            </CardContent>
                        </Card>
                    </CardContent>



                    {/* next Grid */}
                    <Grid container>
                        <Grid lg={6}>
                            <CardContent>

                                <TextField type="text" variant="outlined" label="Name" size="medium" fullWidth value={"Aakash"} required />

                            </CardContent>
                        </Grid>
                    </Grid>

                    {/* next grid */}
                    <Grid lg={12}>
                        <CardContent>
                            <TextField label="rollno" size="large" variant="standard" />
                        </CardContent>
                    </Grid>

                    {/* Avatar */}
                    <Avatar variant="square" sx={{ bgcolor: "red" }}><Home /></Avatar><br></br>
                    <Avatar variant="circular" sx={{ bgcolor: "yellow" }}><Home /></Avatar>

                    {/* margin is not working */}
                    {/* variant can be rounded,circular */}

                    {/* Chip */}
                    <Chip label="vanshika"></Chip>
                    <br></br>
                    <Chip label="Delete" onDelete={del}></Chip>
                    {/* above function works as delete fnc */}

                    {/* Divider */}

                    <Card>
                        <CardContent>
                            <Typography variant="h4">Vanshika</Typography>
                            <Divider></Divider>
                            <Typography variant="h4">192111</Typography>
                            <Divider></Divider>
                            <Typography variant="h4">1905411</Typography>
                            <Divider></Divider>
                        </CardContent>
                    </Card>

                    {/* Badge */}
                    <Badge color="primary" badgeContent={5} sx={{ mt: 15 }}><Home /></Badge>
                    <Badge color="secondary" badgeContent={2}><Home sx={{ mt: 15 }} /></Badge>

                    {/* Button */}
                    <button variant="outlined" color="secondary">Click</button>

                    {/* variant can be text,outlined */}

                    {/* Fab */}
                    <Fab color="secondary"><Add /></Fab>
                    {/* add is imported in icon material */}

                    <Typography>Star rating</Typography>
                    <Rating></Rating>
                    {/* large */}
                    <Rating size="large"></Rating>

                    <Typography>Radio</Typography>
                    <Radio size="medium>"></Radio>

                    {/* Table in MUI*/}


                    <Card style={{ boxShadow: "1px 2px 40px yellow" }}>
                        <CardContent>
                            <TableContainer>
                                <Table>

                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>URN</TableCell>
                                            <TableCell>CRN</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Vanshika</TableCell>
                                            <TableCell>1905411</TableCell>
                                            <TableCell>1921111</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Yashika</TableCell>
                                            <TableCell>1905412</TableCell>
                                            <TableCell>1921112</TableCell>
                                        </TableRow>


                                    </TableBody>

                                </Table>
                            </TableContainer>

                        </CardContent>
                    </Card>

                    {/* icons */}
                    <Delete outlined />

                    <MobileOff></MobileOff>
                    <Approval></Approval>
                    <Atm></Atm>
                    <AdminPanelSettings></AdminPanelSettings>















                </Grid>
            </Grid>

            <Grid>
                <Card>
                    <CardContent>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </Grid>

            {/* Feedback icons */}

            {/* 1.alert */}

            <Alert severity="error">HERE IS THE ERROR</Alert>
            <Alert severity="warning">HERE IS THE WARNING</Alert>
            <Alert severity="info">HERE IS THE INFO</Alert>
            <Alert severity="success">This is a success alert</Alert>

            {/* variant in alert*/}
            {/* 1.outlined */}
            <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
            </Alert>
            {/* 2.filled */}
            <Alert variant="filled" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            {/* 3.color */}
            <Alert severity="success" color="success">
                This is a success alert — check it out!
            </Alert>

            {/* list */}
            <Grid container>
                <Grid lg={4}>
                    <Card>

                        <List style={{ border: "5px solid black" }}>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Inbox />
                                    </ListItemIcon>
                                    <ListItemText primary="inbox" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Drafts />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Delete />
                                    </ListItemIcon>
                                    <ListItemText primary="Trash" />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Card>
                </Grid>
            </Grid>
            <br></br>

            {/* Progress */}
            {/* 1. */}
            <Grid container>
                <grid lg={12}>
                    <Card>

                        <CircularProgress />

                    </Card>
                </grid>
            </Grid>
            <br></br>

            {/* 2. */}
            <Grid container>
                <Grid lg={6}>

                    <CircularProgress color="secondary" />
                    <CircularProgress color="primary" />
                    <CircularProgress color="inherit" />

                </Grid>
            </Grid>
            <br></br>

            {/* 3. */}
            <Grid container>
                <Grid>
                    <CircularProgress variant="determinate" value={25} />
                    <CircularProgress variant="determinate" value={50} />
                    <CircularProgress variant="determinate" value={75} />
                    <CircularProgress variant="determinate" value={100} />
                </Grid>
            </Grid>
            <br></br>

            {/* Linerar Progress */}
            <LinearProgress />
            <br></br>
            <LinearProgress color="secondary" />
            <br></br>
            <LinearProgress color="success" />
            <br></br>
            <LinearProgress color="inherit" />
            <br></br>

            {/* Skeleton */}
            <Grid container>
                <Grid lg={4}>
                    <Skeleton variant="text" />
                    <br></br>
                    <Skeleton variant="circular" height={50} width={50} />
                    <br></br>
                    <Skeleton variant="rectangular" height={150} width={150} />
                    <br></br><br></br>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Grid>
            </Grid>
            <br></br><br></br>

            {/* Accordian */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>

            {/* Snackbar */}
            <Button variant="outlined" onClick={myfun}>click</Button>
            {/* my fun function declared has open function which has value true and clicking on button will pop up the snackbar. */}

            <Snackbar open={open} message="this is success" />
            {/* open function is declared in use state */}

            <Button variant="outlined" onClick={close}>close</Button>
            {/* close function declared has value false it will disabale the snackbar. */}

            {/* App bar */}

            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit">
                        <Menu />

                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }} variant="h5">
                        NEWS
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* card */}
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Card>

            {/* paper */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}>
                <Paper elevation={0} />
                <Paper elevation={13} />
                <Paper elevation={24} />
            </Box>

            {/* NAVIGATION */}

            {/* 1.Bottom NAVIGATION */}
            <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
                setValue = (newValue);
            }}>

                <BottomNavigationAction label="Recents" icon={<Restore />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOn />} />

            </BottomNavigation>

            {/* Breadcrumbs */}
            <br></br>
            <Breadcrumbs>
                <Link underline="hover" color="inherit" >MUI</Link>
                <Link underline="hover" color="inherit" >CORE</Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>

            {/* Link */}
            <Link href="#">This is a link</Link><br></br>
            <Link href="#" color="inherit">{'This is link2'}</Link><br></br>
                   {/* Custom */}
            <Link href="#" underline="none">
                {'NO underline'}
            </Link><br></br>
            <Link href="#" underline="hover">
                {'underline on hover'}
            </Link><br></br>
            <Link href="#" underline="always">
                {'underline always'}
            </Link><br></br>

            {/* Pagination */}
            <Pagination count={10}/>
            <Pagination count={10} variant="outlined"/>
            <Pagination count={10} color="primary"/>
            <Pagination count={10} disabled/>
            <Pagination count={10} shape="rounded"/>
            <Pagination count={10} shape="circular" size="large"/>
            <Pagination count={10} showFirstButton showLastButton/>

            
        </>


    )

}


export default Abc;