import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';


const theme = createTheme({
    palette: {
        primary: {
            main: '#64717a',
            text: '#ffffff'
        },
        secondary: {
            main: '#f8f9fa'
        }
    },
});

const Nav = () => {
    const location = window.location.pathname
    const [value, setValue] = useState(location);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='primary' style={{ marginBottom: '25px' }}>
                <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" style={{ display: 'flex', margin: 'auto' }}>
                    <Tab value='/queue/3' component={Link} label="Tickets" to="/" />
                    <Tab value='/create' component={Link} label="Create A Ticket" to="/create" />
                </Tabs>
            </AppBar>
        </ThemeProvider>
    )
}

export default Nav

// 