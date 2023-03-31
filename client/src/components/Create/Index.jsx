import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const theme = createTheme({
    palette: {
        create: {
            main: '#64717a',
            text: '#f8f9fa'
        },
        close: {
            main: '#f8f9fa'
        }
    },
});

const CreateView = () => {
    const [summary, setSummary] = useState('')
    const [reporter, setReporter] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        axios.post(`http://localhost:1000/api/ticket`,
            { summary, reporter, description, type, status: 'new' })
            .then((response) => {
                setSummary('')
                setReporter('')
                setDescription('')
                setType('')
                setMessage(response.data.msg)
                setAlert(true)
            })
            .catch((error) => {
                try {
                    setMessage(error.response.data.errors[0].msg)
                } catch {
                    setMessage('An Error Occured')
                }

                setAlert(true)
            })
    }

    const [alert, setAlert] = useState(false);

    const handleClickaway = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };

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
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant='h5'>Create A Ticket</Typography>
                        <FormGroup style={{ width: '50%', margin: 'auto' }}>
                            <FormControl style={{ margin: '10px' }}>
                                <InputLabel color='create'>Request Summary</InputLabel>
                                <Input color='create' value={summary} onChange={e => setSummary(e.target.value)} />
                                <FormHelperText color='create'>Keep it brief and descriptive.</FormHelperText>
                            </FormControl>
                            <FormControl style={{ margin: '10px' }}>
                                <InputLabel color='create'>Reporter</InputLabel>
                                <Input color='create' value={reporter} onChange={e => setReporter(e.target.value)} />
                                <FormHelperText color='create'>Who are you?</FormHelperText>
                            </FormControl>
                            <FormControl style={{ margin: '10px' }}>
                                <TextField
                                    label="Request Description"
                                    multiline
                                    maxRows={4}
                                    color='create'
                                    value={description} onChange={e => setDescription(e.target.value)}
                                />
                                <FormHelperText color='create'>Include all the details.</FormHelperText>
                            </FormControl>
                            <FormControl style={{ margin: '10px' }}>
                                <InputLabel color='create'>Request Type</InputLabel>
                                <Select
                                    color='create'
                                    value={type}
                                    label="Request Type"
                                    onChange={e => setType(e.target.value)}
                                >
                                    <MenuItem value={'problem'}>Problem</MenuItem>
                                    <MenuItem value={'request'}>Request</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl style={{ margin: '10px' }}>
                                <Button variant="outlined" color='create' onClick={handleSubmit}>Submit</Button>
                            </FormControl>
                        </FormGroup>
                    </Grid>
                </Grid>
                <Snackbar
                    open={alert}
                    autoHideDuration={5000}
                    onClose={handleClickaway}
                    message={message}
                    action={action}
                />
            </Container>
        </ThemeProvider>

    )
}

export default CreateView 