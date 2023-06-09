import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

const theme = createTheme({
    palette: {
        icons: {
            problem: '#e3483a',
            request: '#63ba3c'
        },
        close: {
            main: '#f8f9fa'
        }
    },
});

const Tickets = () => {
    let { id } = useParams()
    const [issues, setIssues] = useState()

    const [alert, setAlert] = useState(false);

    const handleClickaway = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };

    useEffect(() => {
        axios.get(`http://localhost:1000/api/tickets`)
            .then((response) => {
                if (parseInt(id) === 1) {
                    setIssues(response.data.filter(x => x.type === 'request'))
                }
                if (parseInt(id) === 2) {
                    setIssues(response.data.filter(x => x.type === 'problem'))
                }
                if (parseInt(id) === 3) {
                    setIssues(response.data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id, alert])

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                color="close"
                onClick={handleClickaway}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Summary</TableCell>
                            <TableCell>Reporter</TableCell>
                            <TableCell>Assignee</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {issues ?
                        <TableBody>
                            {issues.map(issue => {
                                return (
                                    <TableRow key={issue._id}>
                                        <TableCell>
                                            {(issue.type === 'problem') ? < DisabledByDefaultRoundedIcon sx={{ color: 'icons.problem', maxHeight: '100%' }} /> : null}
                                            {(issue.type === 'request') ? < CheckBoxRoundedIcon sx={{ color: 'icons.request', maxHeight: '100%' }} /> : null}
                                        </TableCell>
                                        <TableCell><Link to={`/issue/${issue._id}`}>{issue.summary}</Link></TableCell>
                                        <TableCell>{issue.reporter}</TableCell>
                                        <TableCell>
                                            <Stack spacing={1} direction='row' style={{ alignItems: 'center' }} >
                                                <Avatar sx={{ height: 20, width: 20 }} style={{ fontSize: '75%', alignSelf: 'center' }}>{issue.initials}</Avatar>
                                                <Typography variant='body'>{issue.assignee}</Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{issue.status}</TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                        :
                        <TableBody>
                            <TableRow>
                                <TableCell><Skeleton variant='text' /></TableCell>
                                <TableCell><Skeleton variant='text' /></TableCell>
                                <TableCell><Skeleton variant='text' /></TableCell>
                                <TableCell><Skeleton variant='text' /></TableCell>
                                <TableCell><Skeleton variant='text' /></TableCell>
                                <TableCell><Skeleton variant='text' /></TableCell>
                            </TableRow>
                        </TableBody>}
                </Table>
            </TableContainer>
            <Snackbar
                open={alert}
                autoHideDuration={5000}
                onClose={handleClickaway}
                message="Ticket Deleted"
                action={action}
            />
        </ThemeProvider >
    )
}

export default Tickets