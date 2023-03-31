import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Ticket = () => {
    let { id } = useParams();
    const [ticket, setTicket] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:1000/api/ticket/${id}`)
            .then((response) => {
                setTicket(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    return (
        <Card>
            <CardContent>
                <Typography variant='h4'>{ticket.summary}</Typography>
                <Typography variant='subtitle'>Raised by: {ticket.reporter}</Typography>
                <Typography variant='h5'>Description</Typography>
                <Typography variant='body'>{ticket.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default Ticket