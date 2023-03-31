import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';


const Stats = () => {
    let { id } = useParams();
    const [ticket, setTicket] = useState({})
    const [date, setDate] = useState('')

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        axios.get(`http://localhost:1000/api/ticket/${id}`)
            .then((response) => {
                setTicket(response.data)
                let dmy = new Date(response.data.date)
                setDate(dmy.toLocaleDateString("en-US"))

            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    return (
        <Card>
            <CardContent>
                <List disablePadding>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Details" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {open ? <Divider /> : null}
                    <Collapse in={open} unmountOnExit>
                        <List disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Assignee" secondary={ticket.assignee} />
                            </ListItemButton>
                            {open ? <Divider /> : null}
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Status" secondary={ticket.status} />
                            </ListItemButton>
                            {open ? <Divider /> : null}
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Request Type" secondary={ticket.type} />
                            </ListItemButton>
                            {open ? <Divider /> : null}
                        </List>
                    </Collapse>
                </List>
                <Typography variant='caption'>Created {date}</Typography>
            </CardContent>
        </Card>

    )
}

export default Stats