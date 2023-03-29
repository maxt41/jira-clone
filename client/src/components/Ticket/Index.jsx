import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Ticket from './Ticket'
import Nav from '../Nav';
import Queues from '../Index/Queues';

const TicketView = () => {
    return (
        <Container>
            <Nav />
            <Grid container spacing={2}>
                <Grid item xs={3}><Queues /></Grid>
                <Grid item xs={9}><Ticket /></Grid>
            </Grid>
        </Container>
    )
}

export default TicketView