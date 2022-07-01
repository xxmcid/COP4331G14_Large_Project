// Base Import
import { React, Component } from 'react';

// Routing Imports
import { Link } from 'react-router-dom';

// Styling imports (May not be needed since App.js already imports it, but lets be safe)
import { ThemeProvider, createTheme } from '@mui/material';
import '../styles/common.css';
import'../styles/loginpage.css';

// MUI Components
import { Box, Paper, Button, TextField }from '@mui/material';

// Custom Components
import Header from '../components/Header';
import Info from '../components/Info';

class LoginPage extends Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            infopagevisible: false
        };
    }

    setvisibility()
    {
        console.log("Info page visible: " + !this.state.infopagevisible);
        this.setState({
            infopagevisible: !this.state.infopagevisible
        });
    }

    render()
    {
        
        console.log("Creating main theme palette from MUI");
        const theme = createTheme(
        {
          palette: 
          {
            // Dark Mode Palette
            primary: 
            {
              main: '#323031',
              light: '#7F7979',
              dark: '#3D3B3C',
              contrast: '#5F5B6B'
            },

            lightmode:
            {
              main: '#FEFFFE', // Pearl White
              light: '#E5FCF5', // Light Cyan
              contrast: '#EADEDA', // Timberwolf
              black: '#000000' // Black (For Text)
            }
          }
        });

        console.log("Rendering LoginPage");
        return (
                <ThemeProvider theme={theme}>
                    <div>
                        <Header onClick={this.setvisibility.bind(this)} />
                        <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                            },
                        }}>
                            { this.state.infopagevisible ? <Info onClick={this.setvisibility.bind(this)} /> : null }
                            <Paper 
                                id='loginContainer'
                                variant="outlined" 
                                square 
                                sx=
                                {{ 
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 5
                                }}>

                                <div id='signintitle'>Sign In</div>
                                <div id='inputcontainer'>
                                    <div className="label">Email</div>
                                    <TextField 
                                        id="emailinput" 
                                        sx=
                                        {{  
                                            backgroundColor: theme.palette.primary.light,
                                            maxWidth: 300,
                                            borderRadius: 2
                                        }}
                                        />
                                    <div className="label">Password</div>
                                    <TextField
                                        id="passwordinput"
                                        type="password"
                                        sx=
                                        {{  
                                            backgroundColor: theme.palette.primary.light, 
                                            maxWidth: 300,
                                            borderRadius: 2
                                        }}
                                        />
                                </div>
                                <div id="lowerbuttoncontainer">
                                        <Button 
                                            variant='contained'
                                            size='large'
                                            sx=
                                            {{ 
                                                textTransform: 'none',
                                                backgroundColor: theme.palette.primary.contrast,
                                                borderRadius: 5
                                            }}>
                                                Sign in
                                        </Button>
                                        <Link to="/forgotpassword" className='textlink'>Forgot your password?</Link>
                                </div>
                                <div id='footercontainer'>
                                    <div id='signuplabel'>
                                        Don't have an account?{'\n'}
                                        <Link to="/signup" className='textlink'>Sign up now.</Link>
                                    </div>
                                </div>
                            </ Paper>
                        </Box>
                    </div>
                </ThemeProvider>
        );
    }

}

export default LoginPage;