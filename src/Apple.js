//import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import { useEffect, useState } from 'react';
import {Formik} from 'formik';
// import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import * as Yup from "yup";//for validation
export const Apple = () => {
    // const Navigate = useNavigate()
    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // function handleText(event){
    //     const newdata=event.target.value;
    //     setName(newdata);
    // }
    //for validation 
    const validationSchema=Yup.object().shape(
    {
        name:Yup.string().min(3,"enter nanme with min char 3"),
        email:Yup.string().email("enter valid email"),

    });
    const initialValues={
        name:"",
        email:"",
    };
    const onFormSubmit=(values)=>{
         console.log("values are",values);
         alert("submitted");
    }
    // const onHomePageButtonClick = () =>{
    //     // Navigate("/");
    //     console.log('You clicked Home button');
    //     console.log("name is ",name);
    //     console.log("email is ",email);
        
    // };
    // function handleEmail(e){
    //    setEmail(e.target.value);
    // }
    // runs when page load []
//     useEffect(()=>{
//   console.log("new name",name);
//   return()=>{
//     console.log("old name ",name)
//   }
    // },[name]);
    return (
    <div style={{ textAlign: 'center'}} >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
            {({value,errors,touched,handleChange,handleSubmit})=>(
    <form onSubmit={handleSubmit}>
        {touched.name && errors.name && errors.name}
        <TextField label="Name" name="name" id="name" variant="outlined" type="text"onChange={handleChange}/>
        <TextField label="Email Address" id="email" name="email" variant="outlined" type="text" onChange={handleChange}/>
    {touched.email && errors.email && errors.email}
   {console.log("error: ",errors)}
     <Button variant="contained" type='submit'>submit</Button>
     </form>
            )}
     </Formik>
     {/* <button onClick={ onHomePageButtonClick}>Navigate to Home Page</button> */}
    </div>
    );
}; 
export default Apple;
// mateial ui on input is remaining