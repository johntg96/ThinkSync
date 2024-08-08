import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUserContext } from '../utils/UserContext'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import groupPhoto from '../assets/images/groupPhoto.jpg'

export default function Home(props) {
  const [showBasic, setShowBasic] = useState(false);

  const isAuthenticated = props.isAuthenticated;
  const { currUser } = useUserContext() 

  useEffect(() => {
    setShowBasic(false); // Ensure the menu is closed by default
  }, [isAuthenticated]);

  return (
    <>
    
    <MDBContainer className='mt-4'>
  
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard alignment='center' className='bg-dark text-white'>
          <MDBCardImage src={ groupPhoto } position='top' alt='...' />
            <MDBCardHeader tag="h2" className='pt-4 pb-2'>About</MDBCardHeader>
            <MDBCardBody className='mt-2'>
              <p><em>ThinkSync is a dynamic online platform designed to enhance collaboration and productivity among individuals and teams. Whether you're a student, professional, or creative thinker, ThinkSync provides a virtual space for brainstorming, organizing ideas, and working together seamlessly.</em></p>
            </MDBCardBody>
          </MDBCard>
          <MDBCard alignment='left' className='bg-dark text-white mt-2'>
            <MDBCardBody>
              <h4>How to use this tool:</h4>
              <br/>
              <p>
                <ol>
                  <li>Click the "New Think" button to get to the "Think" page.</li>
                  <li>Type in your main question or subject into the question field on the "Think" page.</li>
                  <li>Fill in the idea box with one of your ideas (a possible solution or maybe a general idea), click the "+" button as you go.</li>
                  <li>Click the "Submit" button to continue.</li>
                  <li>This will bring you to the "Sync" page.</li>
                </ol>
              </p>
              <br/>
              <h4>About the Sync page:</h4>
              <br/>
              <p>
              After you have submitted your brainstorming data you will be provided with several "Decision Cards". These are your ideas you submitted, shortened (if too long), shuffled, tossed, mixed, paired and ready for you to make (somewhat easier) decisions.
              The point of doing this activity is to lay all your ideas out on (digital) paper. 
              <br/>
              <br/>
              The mixing/shuffling/pairing aspect reduces bias in the decision making process.
              <br/>
              <br/>
              You will come to a completion point where and then given data about your decision making process. This is referred to as a completed bracket or "Think".
              <br/>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>

    <MDBContainer className='my-4'>
      <MDBRow>
      {isAuthenticated ? (
        <>
        <MDBCol md='12'>
            <MDBCard alignment='center' className='text-white mb-4 new-think'>
              <MDBCardBody>
                <MDBCardTitle>Get Started</MDBCardTitle>
                
                <MDBBtn className='button'href='/think'>
                          New Think
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>
        
        {/* <MDBCol md='6'>
            <MDBCard className='text-white mb-6 new-think'>
              <MDBCardBody>
                <MDBCardTitle>View Syncs</MDBCardTitle>
                <MDBBtn className='button'href='/sync'>
                          Open The Faucet
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol> */}
        </>
        ) : (
          <>
        <MDBCol md='12'>
            <MDBCard alignment='center' className='text-white mb-4 new-think'>
              <MDBCardBody>
                <MDBCardTitle>Get Started:</MDBCardTitle>
                
                <MDBBtn className='button'href='/loginsignup'>
                          New Think
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol>
        
        {/* <MDBCol md='6'>
            <MDBCard className='text-white mb-6 new-think'>
              <MDBCardBody>
                <MDBCardTitle>View Syncs</MDBCardTitle>
                <MDBBtn className='button'href='/loginsignup'>
                          Open The Faucet
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>          
        </MDBCol> */}
        </>)}
      </MDBRow>
    </MDBContainer>    
    </>
  )
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
