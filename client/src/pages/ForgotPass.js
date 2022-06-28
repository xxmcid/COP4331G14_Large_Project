// Base Import
import { React, Component } from 'react';

// Styling Imports
import '../styles/forgotpass.css';

// Custom Components

// Mui Components
import { ThemeProvider, createTheme, Paper, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';



class ForgotPass extends Component
{

    render()
    {
        console.log("Creating main theme palette from MUI");
        const theme = createTheme(
        {
          palette: 
          {
            // Shades of grey
            primary: 
            {
              main: '#323031',
              light: '#7F7979',
              dark: '#3D3B3C',
              contrast: '#5F5B6B'
            }
          }
        });

        console.log("Rendering Forgot Password Page.");

        return(
            <ThemeProvider theme={theme}>
                <div id='centerheader'>
                    <div id='title'>SOLSTICE</div>
                </div>
                <Box sx={{
                    display: 'flex',
                    '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                    },
                }}>
                    <Paper
                        id="forgotpasscontainer"
                        variant='outlined'
                        square
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 5
                        }}>
                        <div id="forgotpasstitle">Forgot Password?</div>
                        <div id="instructionprompt">Enter your email address below.</div>
                        <br id="linebreak"/>
                        <div id="instructionprompt">You will receive a reset password email.</div>
                        <TextField 
                            id="emailinput" 
                            sx=
                            {{  
                                backgroundColor: 'none',
                                width: 350,
                                borderRadius: 2,
                                marginTop: '10%',
                                marginBottom: '10%'
                            }}
                        />
                        <Button 
                            variant='contained'
                            size='large'
                            sx=
                            {{ 
                                textTransform: 'none',
                                backgroundColor: 'black',
                                borderRadius: 5
                            }}>
                                Reset
                        </Button>
                    </Paper>
                </Box>
            </ThemeProvider>
        );

    }

}

export default ForgotPass;