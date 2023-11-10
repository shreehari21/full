import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abtbg-total'>
        <div className='abtbg vh'>
            <h1 className='org text-center'>We create a better future for your child...</h1>
        </div><br></br><br></br><br></br>
        <h2 className='text-center vision'>Contact and About Us</h2>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Name of the Organisation</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Haven Group of Industries PVT. LTD.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Adress and Location</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          padil, Mangalore, Karnataka
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          +91-93-84-cc-yy-zz
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Haven@sahyadri.edu.in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Vision</h2>
            <h4 className='text-center vision1 px-5'>To offer pupils an excellent A1 education. Spread the knowledge and increase the grades.</h4>
        </div><br></br><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>The goal of educational websites is to promote knowledge acquisition by offering comprehensive and easily accessible learning resources.</h4>
        </div><br></br><br></br>
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Developed by Book Haven Group of Industries PVT. LTD. </h3>
        </footer>
    </div>
  )
}
export default About