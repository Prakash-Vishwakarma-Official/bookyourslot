import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from './login.module.css'

const Login = () => {
    return (
        <Box className={styles.loginCard}>
            <Box className={styles.loginCardFlex}>
                <TextField className={styles.loginCardInput} type='text' label="Name" variant="standard" />
                <TextField className={styles.loginCardInput} type='email' label="E-mail" variant="standard" />
                <TextField className={styles.loginCardInput} type='number' label="Pincode" variant="standard" />
                <Button color="success" sx={{marginTop:'50px'}} variant="outlined">Login</Button>
            </Box>
        </Box>
    )
}

export default Login
