import { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import { Link, useNavigate } from "react-router-dom"
import { signInData } from "../api/Api"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import TextField from "@mui/material/TextField"

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    password: "",
  })

  const [user, setUser] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset
  } = useForm({ defaultValues: {
    userEmail: "",
    password: "",
  }});

  const onSubmit = (data) => {
    console.log(data);
    signInData(loginData).then((res) => {
      console.log(res.data);
      setUser(res.data)
      localStorage.setItem('user', res.data)
      navigate('/upload');
    });
    reset();
  }

  if (user) {
    return (
      <div>Logged In</div>
    )
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{
        maxWidth: '400px',
        borderRadius: '10px',
        alignContent: 'center'
      }}>
        <TextField 
          {...register('userEmail')}
          name="userEmail" 
          onChange={(event) =>
            setLoginData({ ...loginData, userEmail: event.target.value })}
          label="E-Mail" 
          margin="dense" 
        />
        <TextField 
          {...register('password')}
          name="password"
          onChange={(event) => 
            setLoginData({ ...loginData, password: event.target.value })} 
          label="Password" 
          margin="dense" 
        />
        <Box>
          <strong>Don't have an account? <Link to='/'>Sign Up</Link> </strong>
        </Box>
      </Card>
      <Box>
        <Button type="submit" variant="outlined" sx={{ mt: '12px' }}>
          Log In
        </Button>
      </Box>
      </form>
    </>
  )
}

export default LoginPage