import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            main: '#64717a',
            text: '#ffffff'
        },

    },
});

const Nav = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='background' style={{ marginBottom: '25px', }}>
                <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center', color: 'background.text' }}>
                    Jira
                </Typography>
            </AppBar>
        </ThemeProvider>
    )
}

export default Nav