
"use client"
import { Box, Button, TextField } from "@mui/material"
import styles from './loginsignup.module.css'
import Login from "@/components/login/login"
import Signup from "@/components/signup/signup"
import { useState } from "react"

const Loginsignup = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <Box className={styles.Loginsignup_container}>
      <Box className={styles.loginCard}>
        <Box className={styles.loginCardFlex}>
          {
            isLogin ? <>
              <TextField className={styles.loginCardInput} type='text' label="Name" variant="standard" />
              <TextField className={styles.loginCardInput} type='email' label="E-mail" variant="standard" />
              <TextField className={styles.loginCardInput} type='number' label="Pincode" variant="standard" />
              <Button color="success" sx={{ marginTop: '50px' }} variant="outlined">Login</Button>
              <Button onClick={() => setIsLogin(!isLogin)}sx={{ marginTop: '20px' }} color="error">Don&rsquo;t have an account ?</Button>
            </>
              :
              <>
                <TextField className={styles.loginCardInput} type='text' label="Name" variant="standard" />
                <TextField className={styles.loginCardInput} type='email' label="E-mail" variant="standard" />
                <TextField className={styles.loginCardInput} type='number' label="Pincode" variant="standard" />
                <TextField className={styles.loginCardInput} type='number' label="Services" variant="standard" />
                <Button color="success" sx={{ marginTop: '50px' }} variant="outlined">Signup</Button>
                <Button onClick={() => setIsLogin(!isLogin)}sx={{ marginTop: '20px' }} color="error">Allready have an account ?</Button>
              </>
          }
          <hr />
        </Box>
      </Box>
      {/* <Login />
      <Signup /> */}
    </Box>
  )
}

export default Loginsignup
