import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpSchema = z.object({
  firstName: z.string({required_error:"First Name required"}).min(2),
  middleName : z.string({required_error:"Middle Name required"}).min(1),
  lastName: z.string({required_error:"Last Name required"}).min(2)
})

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const PersonalPage = ({ formData, setFormData }) => {
  const {
    register,
    formState: {errors}
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  return (
    <>
      <TextField
        {...register('firstName')}
        label='First Name'
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })}
        margin='normal'
        required
      /> {errors.firstName && (<p>{errors.firstName.message}</p>)}
      <TextField
        {...register('middleName')}
        label='Middle Name'
        value={formData.middleName}
        onChange={(event) =>
          setFormData({ ...formData, middleName: event.target.value })}
        margin='normal'
        {...errors.middleName && (<p>{errors.middleName.message}</p>)}
      />
      <TextField
        {...register('lastName')}
        label='Last Name'
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })}
        margin='normal'
        {...errors.lastName && (<p>{errors.lastName.message}</p>)}
      />
    <Box sx={{ mb: '2rem' }}>
      <strong>Already have an account? <Link to='/login'>Sign in</Link> </strong>
    </Box>
    </>
  )
}

export default PersonalPage