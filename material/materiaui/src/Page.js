import { AttachFile, AudioFile, Speed } from "@mui/icons-material";
import { Autocomplete, Card, CardContent, Grid, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField } from "@mui/material";
import React from "react";

function Page(){

    const top100Films = [
        { label: 'The Shawshank Redemption'},
        { label: 'The Godfather', },
        { label: 'The Godfather: Part II',  },
        { label: 'The Dark Knight',  },
        { label: '12 Angry Men',  },
        { label: "Schindler's List", },
        { label: 'Pulp Fiction', },
        { label: 'City of God', },
        { label: 'Se7en',  },
        { label: 'The Silence of the Lambs', },
        { label: "It's a Wonderful Life",},
        { label: 'Life Is Beautiful', },
        { label: 'The Usual Suspects',},
        { label: 'Léon: The Professional',  },
        { label: 'Spirited Away',  },
        { label: 'Saving Private Ryan',  },
        { label: 'Once Upon a Time in the West', },
        { label: 'American History X',  },
        { label: 'Interstellar',  },
        { label: 'Casablanca', },
        { label: 'City Lights',  },
        { label: 'Psycho', },
        { label: 'The Green Mile',  },
        { label: 'The Intouchables',  },
        { label: 'Modern Times', },
        { label: 'Raiders of the Lost Ark',  },
        { label: 'Rear Window',  },
        { label: 'The Pianist', },
        { label: 'The Departed',  },
        { label: 'Terminator 2: Judgment Day',  },
        { label: 'Back to the Future',  },
        { label: 'Whiplash',  },
        { label: 'Gladiator',  },
        { label: 'Memento',  },
        { label: 'The Prestige',  },
        { label: 'The Lion King',  },
        { label: 'Apocalypse Now', },
        { label: 'Alien',  },
        { label: 'Sunset Boulevard', },
        ]
    



return(

<>
<Grid container>

<Grid lg={6}>
<CardContent>
    <Card>
        <CardContent>
        <Autocomplete options={top100Films} renderInput={(bhumi)=> <TextField {...bhumi} fullWidth size="small" />}/>

        </CardContent>
    </Card>
</CardContent>


</Grid>

</Grid>

<SpeedDial icon={<SpeedDialIcon/>} ariaLabel="SpeedDial basic example">
                        <SpeedDialAction tooltipTitle="Apple" icon={<AudioFile color="inherit" />} sx={{bgcolor:"palevioletred"}} />
                        <SpeedDialAction tooltipTitle="Mango" icon={<Speed color="primary"/>} sx={{bgcolor:"palevioletred"}} />
                        <SpeedDialAction tooltipTitle="Grapee"  icon={<AttachFile color="primary"/>} sx={{bgcolor:"palevioletred"}}/>
                    </SpeedDial>

</>

)


}

export default Page;