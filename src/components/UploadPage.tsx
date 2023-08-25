import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { uploadFile } from '../api/Api';

const UploadPage = () => {
  const [file, setFile] = useState('');

  function handleFile(event){
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  function handleApi() {
    const formData = new FormData()
    formData.append('file', file);
    uploadFile(formData).then((res) => {
      console.log(res.data)
    })
  }
  return (
    <div>
      <h2>Upload KYC</h2>
      <form onSubmit={handleApi}>
        <Box sx={{ flex: '', flexDirection: 'column' }}>
          <h3>---Personal Info---</h3>
          <TextField label="First Name" margin='normal' size='small' />
          <TextField label="Middle Name" margin='normal' size='small' />
          <TextField label="Last Name" margin='normal' size='small' />
          <TextField label="Date of Birth" margin='normal' size='small' />
          <TextField margin='normal' size='small' />
          <TextField label="Phone Number" margin='normal' size='small' />
          <TextField label="Website" margin='normal' size='small' />
        </Box>
        <Box sx={{ flex: '', flexDirection: 'column' }}>
          <TextField margin='normal' size='small' />
          <TextField margin='normal' size='small' />
          <TextField margin='normal' size='small' />
          <TextField margin='normal' size='small' />
        </Box>
        <input type='file' name='file' onChange={handleFile} />
        <Button type='submit'>Upload</Button>
      </form>
    </div>
  )
}

export default UploadPage