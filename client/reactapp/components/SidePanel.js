// Base Import
import { React, Component } from 'react';

// Styling Imports
import { getTheme } from './mainTheme';

// MUI Components
import { Drawer, Paper, Typography, ThemeProvider, Grid, TextField, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

function SidePanel()
{
    return (
        <ThemeProvider theme={getTheme()}>
            <Drawer 
                id='sidepanel' 
                open={this.props.open}
                hideBackdrop
                PaperProps={{ 
                    style: { 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        height: '95vh', 
                        position: 'absolute', 
                        top: '6%', 
                        width: '15.5%', 
                        opacity: '75%', 
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: 5 } }}>
                <Typography 
                    variant='h4' 
                    align='center' 
                    sx={{ 
                        marginTop: 2,
                        color: 'white',
                        fontWeight: 'bold' }}>
                    {this.state.selectedPlanetName}
                </Typography>
                <Grid container rowSpacing={1} justifyContent='center' paddingBottom={2}>
                    <Grid item xs={11}>
                        <Paper elevation={10} sx={{ backgroundColor: 'grey', width: '100%', height: 200 }}></Paper>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} justifyContent='center' paddingBottom={3} maxHeight='100%' sx={{ overflowY: 'scroll' }}>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Name</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField 
                            id='planetNameInput' 
                            type="text" 
                            sx={{ width: '100%', borderRadius: 2}}
                            defaultValue={this.state.selectedPlanetName}
                            onChange={(e) => this.props.editselection('selectedPlanetName', e.target.value)}>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Mass</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField 
                            id='planetMassInput' 
                            type="text" 
                            InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>}} 
                            sx={{ width: '100%', borderRadius: 2}}
                            defaultValue={this.state.selectedPlanetMass}
                            onChange={(e) => this.props.editselection('selectedPlanetMass', e.target.value)}>    
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Gravitational Pull</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField 
                            id='planetGravityInput' 
                            type="text" 
                            defaultValue={this.state.selectedPlanetGravity}
                            InputProps={{ endAdornment: <InputAdornment position="end">m/s^2</InputAdornment>}} 
                            sx={{ width: '100%', borderRadius: 2}}
                            onChange={(e) => this.props.editselection('selectedPlanetGravity', e.target.value)}>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Distance (From nearest star)</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField 
                            id='planetDistanceInput' 
                            type="text" 
                            defaultValue={this.state.selectedPlanetDistance}
                            InputProps={{ endAdornment: <InputAdornment position="end">m</InputAdornment>}} 
                            sx={{ width: '100%', borderRadius: 2}}
                            onChange={(e) => this.props.editselection('selectedPlanetDistance', e.target.value)}>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Color</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField 
                            id='planetColorInput' 
                            type="text" 
                            select 
                            sx={{ width: '100%', borderRadius: 2 }}>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h7' align='left'>Moons</Typography>
                    </Grid>
                    <Grid item xs={11} paddingBottom={2}>
                        <TextField 
                            id='planetMoonInput' 
                            type="text" 
                            sx={{ width: '100%', borderRadius: 2 }}>
                        </TextField>
                    </Grid>
                    <Grid item xs={5} justifyContent='center'>
                        <Button
                            onClick={this.handleSave}
                            variant='contained'
                            id='saveChangesButton'
                            startIcon={<SaveIcon/>}
                            color={'success'}
                            sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                                Save
                        </Button>
                    </Grid>
                    <Grid item xs={5} justifyContent='center'>
                        <Button
                            onClick={this.handleCancel}
                            variant='contained'
                            id='CancelChangesButton'
                            startIcon={<CancelIcon/>}
                            color={'error'}
                            sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                                Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Drawer>
        </ThemeProvider>
    );
}