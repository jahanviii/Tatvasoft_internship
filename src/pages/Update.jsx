import * as React from 'react';


import { TextField } from '@mui/material';

export default function Update() {
  return (
    <div style={{
      padding: 90,
      rowGap: 10,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => ( */}
          {/* <form onSubmit={handleSubmit}> */}
            <form style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginBottom: 5,
              rowGap: 10
            }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >
                <div style={{ flexDirection: 'column', display: 'flex' }}>
                  <TextField label="First Name" name="firstName" id="firstName" variant="outlined" type="text" style={{
                    width: 375, height: 40, margin: 40,
                  }} 
                  // onChange={handleChange} onBlur={handleBlur}
                    required />
                  {/* {touched.firstname && errors.firstname && <span style={{
                    color: 'red', padding: 5,
                    fontSize: 15
                  }}>{errors.firstname}</span>} */}
                </div>
                <div style={{ flexDirection: 'column', display: 'flex' }}>
                    <TextField label="Last Name" name="lastName" id="lastName" variant="outlined" type="text" style={{
                      width: 375, height: 40, margin: 40}}
                    
                // nChange={handleChange} onBlur={handleBlur} 
                    required />
                    {/* {errors.lastName && touched.lastName &&
                      <span style={{
                        color: 'red',
                        fontSize: 15,
                        paddingBottom: 5
                      }}>{errors.lastName}</span>}</div> */}
                </div></div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                  }}>
                     <div style={{ flexDirection: 'column', display: 'flex' }}>
                  <TextField label="Email Address" id="email" name="email" variant="outlined" type="text" style={{
                     width: 375, height: 40, margin: 40
                  }}/>
              
                   </div>
                   <div style={{ flexDirection: 'column', display: 'flex' }}>
                    <TextField label="Last Name" name="lastName" id="lastName" variant="outlined" type="text" style={{
                      width: 375, height: 40, margin: 40}}
                    required /></div>
                   </div>
                 
                     <div style={{ flexDirection: 'column', display: 'flex' }}>
                  <TextField label="Email Address" id="email" name="email" variant="outlined" type="text" style={{
                     width: 375, height: 40, margin:40
                  }}/>
              </div>
                    </form>
                    </div>

  )}