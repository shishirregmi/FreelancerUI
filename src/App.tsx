import './App.css'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Card from '@mui/material/Card'
import UploadPage from './components/UploadPage'

function App() {
  return(
  <Card sx={{
    alignContent: 'center',
    width: '600px',
    height: '700px'
  }}>
  <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/login/' element={<LoginPage />} />
    <Route path='/upload' element={<UploadPage />} />
  </Routes>
  </Card>
  )
}

export default App