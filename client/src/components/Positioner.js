// Base Import
import React from 'react';

// Mui Components
import { Box } from '@mui/material';
import { getTheme } from '../styles/mainTheme';


export default class Positioner extends React.Component {
  theme = getTheme();

  render() {
    return(
      <Box sx={{
          color: this.props.color ? this.props.color : "none",
          backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "none",
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 0,
          width: "100%",
          maxWidth: "min(400px, calc(100% - 40px))",
          position: 'fixed',
          top: '50%',
          left: (this.props.position === 'left') ? '300px' : '50%',
          transform: 'translate(-50%, -50%)',
          [this.theme.breakpoints.down('sm')]: {
            left: '50%'
          }
      }}>
        {this.props.children}
      </Box>
    );
  }
}