import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const RegisterPage = ({ formData, setFormData }: any) => {
  const {
    register,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    }
  });
  return (
    <>
      <TextField
        {...register('email')}
        label='E-Mail'
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })}
        margin='normal'
      />
      <TextField
        {...register('username')}
        label='Username'
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })}
        margin='normal'
      />
      <TextField
        {...register('password')}
        label='Password'
        type='password'
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })}
        margin='normal'
      />
    <Box sx={{ mb: '2rem' }}>
      <strong>Already have an account? <Link to='/login'>Sign in</Link> </strong>
    </Box>
    </>
  )
}

export default RegisterPage