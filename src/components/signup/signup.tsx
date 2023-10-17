import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from '../login/login.module.css'

const Signup = () => {
  return (
    <Box className={styles.loginCard}>
            <Box className={styles.loginCardFlex}>
                <TextField className={styles.loginCardInput} type='text' label="Name" variant="standard" />
                <TextField className={styles.loginCardInput} type='email' label="E-mail" variant="standard" />
                <TextField className={styles.loginCardInput} type='number' label="Pincode" variant="standard" />
                <TextField className={styles.loginCardInput} type='number' label="Services" variant="standard" />
                <Button color="success" sx={{marginTop:'50px'}} variant="outlined">Signup</Button>
                <Button color="secondary">Allready have an account ?</Button>
            </Box>
        </Box>
  )
}

export default Signup
