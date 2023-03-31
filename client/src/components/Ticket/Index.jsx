import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Ticket from './Ticket'

import Queues from '../Index/Queues';
import Stats from './Stats';

const TicketView = () => {
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={3}><Queues /></Grid>
                <Grid item xs={6}><Ticket /></Grid>
                <Grid item xs={3}><Stats /></Grid>
            </Grid>
        </Container>
    )
}

export default TicketView