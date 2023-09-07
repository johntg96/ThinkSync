import React from 'react'
import { useState } from 'react';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';

// card component: https://mdbootstrap.com/docs/react/components/cards/
// form components: https://mdbootstrap.com/docs/standard/forms/input-fields/

const defaultUser = {
  username:"",
  password:""
}

export default function Login() {
  const [ loginData, setLoginState ] = useState(defaultUser)

  function handleLoginChange(e) {
    e.preventDefault();
    setLoginState({ ...loginData, [e.target.name]: e.target.value })
  }

  function submitLogin(e) {
    e.preventDefault()
    console.log(loginData)
  }

  return (
    <MDBContainer style={{ marginTop:"3%", marginBottom:"3%" }}>
      <MDBRow>
        <MDBCol col='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle style={{color:'black'}}>Login:</MDBCardTitle>
              <MDBInput name='username' style={{ marginTop:"3%", marginBottom:"3%" }} label='Username' id='typeText' type='text' value={loginData.username} 
              onChange={handleLoginChange} />
              <MDBInput name='password' style={{ marginTop:"3%", marginBottom:"3%" }} label='Password' id='typePassword' type='password' value={loginData.password} onChange={handleLoginChange} />
              <MDBBtn style={{marginTop:"2%"}} onClick={submitLogin}>Login</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}