import { useState } from "react"
import Box from "@mui/material/Box";
import { createData } from "../api/Api";
import Button from "@mui/material/Button";
import PersonalPage from "./PersonalPage";
import RegisterPage from "./RegisterPage";

const Form = () => {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const FormTitles = ["Personal Info", "Sign Up"]

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalPage formData={formData} setFormData={setFormData} />
    } else {
      return <RegisterPage formData={formData} setFormData={setFormData} />
    }
  };
  
  return (
    <>
      <h1>{FormTitles[page]}</h1>
      <Box sx={{
        mb: '2rem', 
        borderRadius: '8px',
        width: '400px',
      }}>
        {PageDisplay()}
      </Box>
      <Box sx={{ mt:'7px' }}>
      <Button
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
        >
        Prev
      </Button>
      <Button
        onClick={() => {
          if (page === FormTitles.length - 1) {
            console.log(formData);
            createData(formData);
            return (
              alert('Submitted')
            )
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
        >
        {page === FormTitles.length - 1 ? "SIGN UP" : "NEXT"}
      </Button>
      </Box>
    </>
  )
}

export default Form