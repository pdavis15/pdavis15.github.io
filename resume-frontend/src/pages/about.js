import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GTLogoSeal_White from '../images/GTLogoSeal_White.png'
import CCLogo_White from '../images/CCLogo_1Line_White.png'
import './about.css'
  
const About = () => {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'Right',
    //     alignItems: 'Right',
    //     height: '100vh'
    //   }}
    // >
    <div>
        

        <Container fluid>
            <h1>ABOUT ME</h1>
            <p>
            I am a strong C++ Programmer currently working in the Defense Industry, 
            implementing lower level device interaction and message routing.
            I have a passion for understanding how objects interact with eachother at a fundumental level. 
            Whether that be through class design in code, or robots interacting and understanding their enviornment.

            Currently a Software Engineer I at Raytheon, while remotely pursuing a masters degree in computer science 
            from the Georgia Institute of Technology. Graduated from Connecticut College, in New London, CT with a 
            Bachelor of Arts Degree in Physics, Mathematics and Computer Science May 2019. 
            Acquired efficiency, problem solving skills, and productivity through independent studies.
            </p>
            <h2><u>Education</u></h2>
            <div className='education'>
                <h3><u>Graduate:</u></h3>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={GTLogoSeal_White} className='image' alt="GT-Logo"/>
                    </Col>
                    <Col xs={12} md={8}>
                        <p>
                            I am currently pursuing a masters in Computer Science from Georgia tech.
                        </p>
                        <p>
                            Expected Graduation: Fall 2024
                        </p>
                    </Col>  
                </Row>

                <h3><u>Undergraduate:</u></h3>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={CCLogo_White} className='cc_image' alt="GT-Logo"/>
                    </Col>
                    <Col xs={12} md={8}>
                        <p></p>
                        <p>
                            Majors: Physics, Mathematics, and Computer Science
                        </p>
                        <p>
                            Graduated: 2019
                        </p>
                    </Col>  
                </Row>
            </div>
            
            
        </Container>
        
    </div>
  );
};
  
export default About;