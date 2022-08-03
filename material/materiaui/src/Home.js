import{Home, Add, VolumeDown, VolumeUp, Delete, Phone, PhoneMissed, Favorite, PersonPin, LocationOn, Restore, Face, Mail, ViewQuilt, ViewModule, ViewList, Navigation, Edit, Inbox, Drafts} from "@mui/icons-material";
import {ListItem,Alert,Tooltip,IconButton,ButtonGroup, Avatar, Badge, Button, Card, CardContent, Chip,Divider, Fab,  Grid, Radio,Rating, Table,TextField, TableBody,TableCell,TableContainer,TableHead,TableRow,Typography, Stack, Slider, Skeleton, Paper, BottomNavigationAction, Pagination, FormControl, InputLabel, Select, MenuItem,ToggleButtonGroup, ListItemButton, ListItemText, Popover, TextareaAutosize, List, Box, NoSsr, ClickAwayListener,  Tab, NativeSelect,Snackbar, Backdrop, Tabs,  Link, Breadcrumbs, BottomNavigation, ToggleButton, CircularProgress, ListItemIcon, FormControlLabel} from "@mui/material";

import React from "react";
    
function PageHome(){

 function del(){
    alert("Aakash")
 }


function SimpleDialog(){
    
}

function open(){

}

function value(){

}

function handleChange(){

}

function selectedValue(){

}
function handleClickOpen(){

}
function handleClose(){

}

function progress(){

}



function handleClick(){

}

function handleClickAway(){

}

function setValue(){

}

function handleToggle(){

}

function handleDelete(){

}
function view(){

}
function alignment(){

}

function id(){

}
function anchorEl(){

}
function styles(){

}
return(
 <>
       
    {/*
             <Grid container>
        <Grid lg = {4}>
            <CardContent> 
                <Card style = {{background:"red"}}> 
                    <CardContent>
                <Typography>Aakash</Typography> 
            </CardContent>
            </Card>
            </CardContent>
            <Grid lg = {12}>
                <Grid>
                    <CardContent>
                        <Card style = {{background:"blue"}}>
                            <CardContent>
                        <Typography variant="h4">Aakash</Typography> //body2
                    </CardContent>
                    </Card>
                    </CardContent>
                </Grid>
            </Grid>
        </Grid>
       </Grid>

       <Typography variant = "h6">Aakash</Typography>
       <Card style = {{background:"ghostwhite"}}>
        <CardContent>
            <TableContainer>
                <Table arial-label="customized-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Class</TableCell>
                            <TableCell align="center">RollNo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Class</TableCell>
                            <TableCell align="center">RollNo</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
            </TableContainer>
        </CardContent>
       </Card>

*/}


       <Grid container>
        <Grid lg={6}>
            <CardContent>
                <Card>
                    <CardContent>
                   
                        {/* <Typography variant = "body2">Aakash</Typography> */}
                <Grid container>
                    <Grid lg = {6}>
                        <CardContent>
                <TextField type = "text" variant = "standard" label = "contact" size = "small" fullWidth required/>
            </CardContent>
        </Grid>

        <Grid lg = {6}>
             <CardContent>
                 <TextField variant= "outlined" label = "contact" size = "small" fullWidth/>

                </CardContent>
       </Grid>

        </Grid>
</CardContent>
</Card>
</CardContent>
</Grid>
</Grid>
     
         <Avatar variant = "square" sx={{bgcolor:"yelo"}}><Home/></Avatar>
        <Avatar variant = "square" sx={{bgcolor:"red"}}><Home/></Avatar>
        
        <Avatar variant = "circular"><Home/></Avatar>
        {/* sx = {{m:"auto", p:12, mt:""}}  */}

        <Chip label = "aakash" onDelete={del}></Chip>
        <Card>
            <CardContent>
                   <Typography variant = "h5" >Aakash </Typography>
                 <Divider/>
                 <Typography variant = "h5">Aakash </Typography>
                 <Divider/>
                 <Typography variant = "h5">Aakash</Typography>
                 <Divider/>
                 <Typography variant = "h5">Aakash</Typography>
                 <Divider/>
                </CardContent>
            </Card>
            <br/><br/><br/>
            <Badge color = "primary" badgeContent={5}>
         <Home/>
         </Badge>
            
         <Button variant = "contained" color = "secondary">Click</Button>
         <Button variant = "contained" color = "secondary">click</Button>
         <Button variant = "text">click</Button>
         <Button variant = "outlined">click</Button>
         <Button variant = "text">Click</Button>
         <Button variant = "oulined" color = "secondary">Click</Button>
         <Button variant = "contained" color = "secondary">Click</Button>

         <Fab color = "secondary">
             <Add/>
        </Fab>
        <Fab color = "primary">
            <Add/>
        </Fab>
        <Typography>Start Rating</Typography>
        <Rating size = "large"/>
        <Typography>star rating </Typography>
        <Rating size = "large"/>
        <Typography>Radio</Typography>
        <Radio size = "large"/>
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow align = "right">
                        <TableCell >name</TableCell>
                        <TableCell >name</TableCell>
                        <TableCell >name</TableCell>
                    </TableRow>
                </TableHead>
     <TableBody>
        <TableRow>
            <TableCell>name</TableCell>
            <TableCell>name</TableCell>
            <TableCell>name</TableCell>
        </TableRow>
     </TableBody>
     </Table>
     </TableContainer>

     <Typography variant = "h5" >Button </Typography>
     <Button variant="text">Text</Button>
     <Button variant="contained">Contained</Button>
     <Button variant="outlined">Outlined</Button>
      

     <Button>Primary</Button>
     <Button disabled>Disabled</Button>
     <Button href="#text-buttons">Link</Button>
  



     <Button variant="contained">Contained</Button> 
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>  

<Button variant="contained" disableElevation>
  Disable elevation
</Button>


<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>


{/*
<IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
<IconButton aria-label="fingerprint" color="success">
  <Fingerprint />
</IconButton>

*/}
<ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<br/>
<ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />
  <Slider aria-label="Volume" value={50}  />
  <VolumeUp />
</Stack>
<Slider disabled defaultValue={30} aria-label="Disabled slider" />
       
<Tooltip title="Delete">
  <IconButton>
    <Delete/>
  </IconButton>
</Tooltip>


<Delete/>

<Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>



<Typography variant="subtitle1" component="div">
  Selected: {selectedValue}
</Typography>
<br />
<Button variant="outlined" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<SimpleDialog
  selectedValue={selectedValue}
  open={open}
  onClose={handleClose}
/>
{/* 
<CircularProgress />

<CircularProgress color="secondary" />
<CircularProgress color="success" />
<CircularProgress color="inherit" />

<CircularProgress variant="determinate" value={25} />
<CircularProgress variant="determinate" value={50} />
<CircularProgress variant="determinate" value={75} />
<CircularProgress variant="determinate" value={100} />
<CircularProgress variant="determinate" value={progress} /> */}

<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />


<Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} />

 {/* 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      }}
      alt={item.title}
      src={item.src}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}

*/}

<Paper elevation={0} />
<Paper />
<Paper elevation={3} />
  
<Paper variant="outlined" />
<Paper variant="outlined" square />

{/*
<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
  
*/}
  <Pagination count={10} />
<Pagination count={10} color="primary" />
<Pagination count={10} color="secondary" />
<Pagination count={10} disabled />

<Pagination count={10} variant="outlined" />
<Pagination count={10} variant="outlined" color="primary" />
<Pagination count={10} variant="outlined" color="secondary" />
<Pagination count={10} variant="outlined" disabled />
  
<Pagination count={10} shape="rounded" />
<Pagination count={10} variant="outlined" shape="rounded" />


{/* 
<Stepper activeStep={1} alternativeLabel>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper> */}
  
{/*
    
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>

  <Switch {...label} defaultChecked />
  <Switch {...label} />
  <Switch {...label} disabled defaultChecked />
  <Switch {...label} disabled />

  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" />

  <TextField
    hiddenLabel
    id="filled-hidden-label-small"
    defaultValue="Small"
    variant="filled"
    size="small"
  />
  <TextField
    hiddenLabel
    id="filled-hidden-label-normal"
    defaultValue="Normal"
    variant="filled"
  />



  <RedBar />
  <TextField label={'margin="none"'} id="margin-none" />
  <RedBar />
  <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
  <RedBar />
  <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
  <RedBar />


  <TextField label="Outlined secondary" color="secondary" focused />
  <TextField label="Filled success" variant="filled" color="success" focused />
  <TextField
    label="Standard warning"
    variant="standard"
    color="warning"
    focused
  />

  <ToggleButtonGroup size="small" {...control}>
    {children}
  </ToggleButtonGroup>
  <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
  <ToggleButtonGroup size="large" {...control}>
    {children}
  </ToggleButtonGroup>

*/}

<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
{/* 
<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList> */}

{/* <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{style, width: 400 }}>
    <h2 id="parent-modal-title">Text in a modal</h2>
    <p id="parent-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
    <ChildModal />
  </Box>
</Modal> */}

{/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
  Open Popover
</Button>
<Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
</Popover> */}


<TextareaAutosize
  maxRows={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
  style={{ width: 200 }}
/>
{/* 
{addFruitButton}
<Box sx={{ mt: 1 }}>
  <List>
    <TransitionGroup>
      {fruitsInBasket.map((item) => (
        <Collapse key={item}>
          {renderItem({ item, handleRemoveFruit })}
        </Collapse>
      ))}
    </TransitionGroup>
  </List>
</Box> */}

<TextareaAutosize
  aria-label="empty textarea"
  placeholder="Empty"
  style={{ width: 200 }}
/>

<Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
  Server and Client
</Box>
<NoSsr>
  <Box
    sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
  >
    Client only
  </Box>
</NoSsr>

<ClickAwayListener onClickAway={handleClickAway}>
  <Box sx={{ position: 'relative' }}>
    <button type="button" onClick={handleClick}>
      Open menu dropdown
    </button>
    {open ? (
      <Box sx={styles}>
        Click me, I will stay visible until you click outside.
      </Box>
    ) : null}
  </Box>
</ClickAwayListener>


<Paper elevation={0} />
<Paper />
<Paper elevation={3} />

<Paper variant="outlined" />
<Paper variant="outlined" square />



<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

<ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>


{/* 
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  {...label}
  icon={<BookmarkBorder />}
  checkedIcon={<Bookmark />} 
    />*/}

{/* 
<Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked /> */}

<Fab color="primary" aria-label="add">
  <Add />
</Fab>
<Fab color="secondary" aria-label="edit">
  <Edit />
</Fab>
<Fab variant="extended">
  <Navigation sx={{ mr: 1 }} />
  Navigate
</Fab>
<Fab disabled aria-label="like">
  <Favorite />
</Fab>

<Fab size="small" color="secondary" aria-label="add">
  <Add />
</Fab>
<Fab size="medium" color="secondary" aria-label="add">
  <Add />
</Fab>
<Fab color="secondary" aria-label="add">
  <Add />
</Fab>

<Fab variant="extended" size="small" color="primary" aria-label="add">
  <Navigation sx={{ mr: 1 }} />
  Extended
</Fab>
<Fab variant="extended" size="medium" color="primary" aria-label="add">
  <Navigation sx={{ mr: 1 }} />
  Extended
</Fab>
<Fab variant="extended" color="primary" aria-label="add">
  <Navigation sx={{ mr: 1 }} />
  Extended
</Fab>
{/* 
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl> */}


{/* 
<RadioGroup name="use-radio-group" defaultValue="first">
  <MyFormControlLabel value="first" label="First" control={<Radio />} />
  <MyFormControlLabel value="second" label="Second" control={<Radio />} />
</RadioGroup> */}

<Rating name="size-small" defaultValue={2} size="small" />
<Rating name="size-medium" defaultValue={2} />
<Rating name="size-large" defaultValue={2} size="large" />

<Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={value} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={value} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />

<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

<Typography component="legend">Custom icon and color</Typography>
{/* <StyledRating
  name="customized-color"
  defaultValue={2}
  getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
  precision={0.5}
  icon={<Favorite fontSize="inherit" />}
  emptyIcon={<FavoriteBorder fontSize="inherit" />}
/> */}
<Typography component="legend">10 stars</Typography>
<Rating name="customized-10" defaultValue={2} max={10} />
{/* 
<StyledRating
  name="highlight-selected-only"
  defaultValue={2}
  IconContainerComponent={IconContainer}
  getLabelText={(value: number) => customIcons[value].label}
  highlightSelectedOnly
/> */}
{/* 
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}


<FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Age
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </NativeSelect>
</FormControl>

<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>

<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />


  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>
<Slider disabled defaultValue={30} aria-label="Disabled slider" />


<Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />




{/* <Switch {...label} defaultChecked />
<Switch {...label} />
<Switch {...label} disabled defaultChecked />
<Switch {...label} disabled />

<FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
  <FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup> */}

{/* 
<Switch {...label} defaultChecked size="small" />
<Switch {...label} defaultChecked />


<Switch {...label} defaultChecked />
<Switch {...label} defaultChecked color="secondary" />
<Switch {...label} defaultChecked color="warning" />
<Switch {...label} defaultChecked color="default" />
<GreenSwitch {...label} defaultChecked /> */}

<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />

<TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Small"
  variant="filled"
  size="small"
/>
<TextField
  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
/>
{/* 
<RedBar />
<TextField label={'margin="none"'} id="margin-none" />
<RedBar />
<TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
<RedBar />
<TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
<RedBar /> */}


<TextField label="Outlined secondary" color="secondary" focused />
<TextField label="Filled success" variant="filled" color="success" focused />
<TextField
  label="Standard warning"
  variant="standard"
  color="warning"
  focused
/>


{/* <ToggleButtonGroup size="small" {...control}>
  {children}
</ToggleButtonGroup>
<ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
<ToggleButtonGroup size="large" {...control}>
  {children}
</ToggleButtonGroup> */}

<ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
>
  <ToggleButton value="web">Web</ToggleButton>
  <ToggleButton value="android">Android</ToggleButton>
  <ToggleButton value="ios">iOS</ToggleButton>
</ToggleButtonGroup>

<ToggleButtonGroup
  orientation="vertical"
  value={view}
  exclusive
  onChange={handleChange}
>
  <ToggleButton value="list" aria-label="list">
    <ViewList />
  </ToggleButton>
  <ToggleButton value="module" aria-label="module">
    <ViewModule />
  </ToggleButton>
  <ToggleButton value="quilt" aria-label="quilt">
    <ViewQuilt />
  </ToggleButton>
</ToggleButtonGroup>

<ToggleButtonGroup
  orientation="vertical"
  value={view}
  exclusive
  onChange={handleChange}
>
  <ToggleButton value="list" aria-label="list">
    <ViewList />
  </ToggleButton>
  <ToggleButton value="module" aria-label="module">
    <ViewModule />
  </ToggleButton>
  <ToggleButton value="quilt" aria-label="quilt">
    <ViewQuilt />
  </ToggleButton>
</ToggleButtonGroup>


{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}

<Avatar>H</Avatar>
<Avatar sx={{ bgcolor: "deepOrange[500]" }}>N</Avatar>
<Avatar sx={{ bgcolor: "deepPurple[500]" }}>OP</Avatar>


{/* <Avatar {...stringAvatar('Kent Dodds')} />
<Avatar {...stringAvatar('Jed Watson')} />
<Avatar {...stringAvatar('Tim Neutkens')} /> */}

<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 24, height: 24 }}
/>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>


{/* <Avatar>
  <FolderIcon />
</Avatar>
<Avatar sx={{ bgcolor: pink[500] }}>
  <PageviewIcon />
</Avatar>
<Avatar sx={{ bgcolor: green[500] }}>
  <AssignmentIcon />
</Avatar> */}

{/* <AvatarGroup max={4}>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup> */}

{/* <AvatarGroup total={24}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup> */}

{/* <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge> */}
{/* <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  }
>
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
</Badge> */}


<Badge badgeContent={4} color="primary">
  <Mail color="action" />
</Badge>

<Badge badgeContent={4} color="secondary">
  <Mail color="action" />
</Badge>
<Badge badgeContent={4} color="success">
  <Mail color="action" />
</Badge>

<Badge color="secondary" badgeContent={0}>
  <Mail />
</Badge>
<Badge color="secondary" badgeContent={0} showZero>
  <Mail />
</Badge>

<Badge color="secondary" badgeContent={99}>
  <Mail />
</Badge>
<Badge color="secondary" badgeContent={100}>
  <Mail />
</Badge>
<Badge color="secondary" badgeContent={1000} max={999}>
  <Mail />
</Badge>


<Chip label="Chip Filled" />
<Chip label="Chip Outlined" variant="outlined" />

<Chip label="Clickable" onClick={handleClick} />
<Chip label="Clickable" variant="outlined" onClick={handleClick} />


<Chip label="Deletable" onDelete={handleDelete} />
<Chip label="Deletable" variant="outlined" onDelete={handleDelete} />

{/* 
<Chip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<DoneIcon />}
/> */}
{/* <Chip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<DeleteIcon />}
  variant="outlined"
/> */}

<Chip label="Small" size="small" />
<Chip label="Small" size="small" variant="outlined" />

<Stack direction="row" spacing={1}>
  <Chip label="primary" color="primary" />
  <Chip label="success" color="success" />
</Stack>
<Stack direction="row" spacing={1}>
  <Chip label="primary" color="primary" variant="outlined" />
  <Chip label="success" color="success" variant="outlined" />
</Stack>

<Chip icon={<Face />} label="With Icon" />
<Chip icon={<Face />} label="With Icon" variant="outlined" />


<List  component="nav" aria-label="mailbox folders">
  <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List>


<Home />
<Home color="primary" />
<Home color="secondary" />
<Home color="success" />
<Home color="action" />
<Home color="disabled" />
{/* <HomeIcon sx={{ color: pink[500] }} /> */}

<Home />
<Home color="primary" />
<Home color="secondary" />
<Home color="success" />
<Home color="action" />
<Home color="disabled" />
{/* <Home sx={{ color: pink[500] }} /> */}





<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>


{/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {[1, 2, 3].map((value) => (
    <ListItem
      key={value}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`Line item ${value}`} />
    </ListItem>
  ))}
</List> */}


{/* <FixedSizeList
  height={400}
  width={360}
  itemSize={46}
  itemCount={200}
  overscanCount={5}
>
  {renderRow}
</FixedSizeList> */}



{/* <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
/> */}

{/* <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip> */}

<Tooltip title="Add" arrow>
  <Button>Arrow</Button>
</Tooltip>

{/* <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip> */}

<Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>


<Alert variant="filled" severity="error">
  This is an error alert — check it out!
</Alert>
<Alert variant="filled" severity="warning">
  This is a warning alert — check it out!
</Alert>
<Alert variant="filled" severity="info">
  This is an info alert — check it out!
</Alert>
<Alert variant="filled" severity="success">
  This is a success alert — check it out!
</Alert>


{/* <Button onClick={handleToggle}>Show backdrop</Button>
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
> */}
   {/* <CircularProgress color="inherit" /> */}
{/* </Backdrop>  */}


{/* <Typography variant="subtitle1" component="div">
  Selected: {selectedValue}
</Typography>
<br />
<Button variant="outlined" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<SimpleDialog
  selectedValue={selectedValue}
  open={open}
  onClose={handleClose}
/> */}
{/* 
<CircularProgress />

<CircularProgress color="secondary" />
<CircularProgress color="success" />
<CircularProgress color="inherit" />

<CircularProgress variant="determinate" value={25} />
<CircularProgress variant="determinate" value={50} />
<CircularProgress variant="determinate" value={75} />
<CircularProgress variant="determinate" value={100} />
<CircularProgress variant="determinate" value={progress} />

<CircularProgressWithLabel value={progress} /> */}

{/* <LinearProgress />

<LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" />

<LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />

<LinearProgressWithLabel value={progress} /> */}

<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />


{/* {buttons}
<Snackbar
  anchorOrigin={{ vertical, horizontal }}
  open={open}
  onClose={handleClose}
  message="I love snacks"
  key={vertical + horizontal}
/> */}

{/* <Button onClick={handleClick(TransitionLeft)}>Right</Button>
<Button onClick={handleClick(TransitionUp)}>Up</Button>
<Button onClick={handleClick(TransitionRight)}>Left</Button>
<Button onClick={handleClick(TransitionDown)}>Down</Button>
<Snackbar
  open={open}
  onClose={handleClose}
  TransitionComponent={transition}
  message="I love snacks"
  key={transition ? transition.name : ''}
/> */}

{/* <Button variant="outlined" onClick={handleClick}>
  Open success snackbar
</Button>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  
</Snackbar> */}
<Alert  severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
<Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert>


<Paper elevation={0} />
<Paper />
<Paper elevation={3} />

<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<Restore/>} />
  <BottomNavigationAction label="Favorites" icon={<Favorite />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
</BottomNavigation>


<Breadcrumbs maxItems={2} aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="#">
    Home
  </Link>
  <Link underline="hover" color="inherit" href="#">
    Catalog
  </Link>
  <Link underline="hover" color="inherit" href="#">
    Accessories
  </Link>
  <Link underline="hover" color="inherit" href="#">
    New Collection
  </Link>
  <Typography color="text.primary">Belts</Typography>
</Breadcrumbs>


<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>

{/*
{(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
  <React.Fragment key={anchor}>
    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  </React.Fragment>
))}


<Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>

<Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>


<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Dashboard
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Profile</MenuItem>
        <MenuItem onClick={popupState.close}>My account</MenuItem>
        <MenuItem onClick={popupState.close}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>

  */}
<Pagination count={10} />
<Pagination count={10} color="primary" />
<Pagination count={10} color="secondary" />
<Pagination count={10} disabled />

<Pagination count={10} variant="outlined" />
<Pagination count={10} variant="outlined" color="primary" />
<Pagination count={10} variant="outlined" color="secondary" />
<Pagination count={10} variant="outlined" disabled />

<Pagination count={10} showFirstButton showLastButton />
<Pagination count={10} hidePrevButton hideNextButton />
{/* 
<TablePagination
  component="div"
  count={100}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/> */}

{/* 
 <SpeedDial
  ariaLabel="SpeedDial openIcon example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon openIcon={<EditIcon />} />}
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
    />
  ))}
</SpeedDial>  */}

{/* <Stepper activeStep={1} alternativeLabel>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper> */}

{/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box> */}
{/* <TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel> */}

<Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Item One" />
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>
{/* 
<TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
</TabContext> */}

{/* <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
  <LinkTab label="Page One" href="/drafts" />
  <LinkTab label="Page Two" href="/trash" />
  <LinkTab label="Page Three" href="/spam" />
</Tabs> */}

<Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
  <Tab icon={<Phone />} aria-label="phone" />
  <Tab icon={<Favorite />} aria-label="favorite" />
  <Tab icon={<PersonPin />} aria-label="person" />
</Tabs>

<Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
  <Tab icon={<Phone />} label="RECENTS" />
  <Tab icon={<Favorite />} label="FAVORITES" />
  <Tab icon={<PersonPin />} label="NEARBY" />
</Tabs>

<Tabs
  value={value}
  onChange={handleChange}
  aria-label="icon position tabs example"
>
  <Tab icon={<Phone />} label="top" />
  <Tab icon={<PhoneMissed />} iconPosition="start" label="start" />
  <Tab icon={<Favorite />} iconPosition="end" label="end" />
  <Tab icon={<PersonPin />} iconPosition="bottom" label="bottom" />
</Tabs>

  {/* <Container maxWidth="sm">
  <Container fixed> */}

{/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}

{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>4</Item>
  </Grid>
</Grid> */}

{/* <Stack spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}

{/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList> */}
<nav arai-label = "main mailbox folders">
<List>
  <ListItem>
    <ListItemButton>
      <ListItemIcon>
         <Inbox/>
      </ListItemIcon>
      <ListItemText primary = "Inbox"/>
    </ListItemButton>
  </ListItem>
  <ListItem>
    <ListItemButton>
      <ListItemIcon>
        <Drafts/>
      </ListItemIcon>
      <ListItemText primary = "Drafts"/>
    </ListItemButton>
  </ListItem>
</List>
</nav>
<Divider/>
<nav arial-label = "secondary mailbox folder">
  <List>
    <ListItem disablePadding>
      <ListItemButton>
        <listItemText primary = "Trash"/>
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component = "a" href = "#simple-list">
        <ListItemText primary = "Spam"/>
       
      </ListItemButton>
    </ListItem>
  </List>
</nav>


{
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="body1" component="h2">
  h1. Heading
</Typography>;

{/* <Paper elevation={0} />
<Paper />
<Paper elevation={3} /> */}

 

</>




   );



}

export default PageHome;