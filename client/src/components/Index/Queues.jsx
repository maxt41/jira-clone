import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        buttons: {
            main: '#5e6c84',
            text: '#dfe1e6'
        },
        badge: {
            main: '#dfe1e6',
            secondary: '#172b4d'
        }
    },
});

const Queues = () => {
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} >
                <Typography variant='subtitle' color='buttons' fontWeight='bold'>Queues</Typography>
                <Button color='buttons' style={{ justifyContent: 'space-between', textTransform: 'none' }} onClick={() => navigate(`/queue/1`)}>Requests Queue </Button>
                <Button color='buttons' style={{ justifyContent: 'space-between', textTransform: 'none' }} onClick={() => navigate(`/queue/2`)}>Problems Queue</Button>
                <Button color='buttons' style={{ justifyContent: 'space-between', textTransform: 'none' }} onClick={() => navigate(`/queue/3`)}>All Tickets</Button>
                <Button color='buttons' style={{ justifyContent: 'space-between', textTransform: 'none' }} >Create Ticket</Button>
            </Stack>
        </ThemeProvider>
    )
}

export default Queues