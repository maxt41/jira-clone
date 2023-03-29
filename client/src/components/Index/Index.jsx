import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Nav from '../Nav';
import Queues from './Queues';
import Queue from './Queue';

const QueueView = () => {

    return (
        <Container>
            <Nav />
            <Grid container spacing={2}>
                <Grid item xs={3}><Queues /></Grid>
                <Grid item xs={9}><Queue /></Grid>
            </Grid>
        </Container>
    )
}

export default QueueView