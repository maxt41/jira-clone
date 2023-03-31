import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
    const [anchorEl, setAnchorEl] = useState(null);
    const menu = Boolean(anchorEl);
    const [assigned, setAssigned] = useState(undefined)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (assigned) {
            const initialsArray = assigned.split(' ')
            const initials = ([initialsArray[0][0], initialsArray[1][0]]).join('')
            axios.put(`http://localhost:1000/api/ticket/${id}`,
                { assignee: assigned, initials })
                .then(() => {
                    setAssigned()
                    setAnchorEl(null);
                })
                .catch((error) => {
                    console.error(error)
                })
        }

    }, [assigned])


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
    }, [id, assigned])

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
                            <ListItemButton sx={{ pl: 4 }} onClick={handleMenu}>
                                <ListItemText primary="Assignee" secondary={ticket.assignee} />
                            </ListItemButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={menu}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => setAssigned('IT Support')}>IT Support</MenuItem>
                            </Menu>
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