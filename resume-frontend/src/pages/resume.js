import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { FullPiChart, HalfPiChart } from './piChart.js';
import {raytheonData} from './resumeData.js';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./resume.css"


const Resume = () => {
    return (
        <Container fluid>
            <h1>EXPERIENCE</h1>
                <Row>
                    <h2 className="center">Raytheon</h2>
                    <Col xs={6} md={4} height={100} className="pichart">
                        <FullPiChart data={raytheonData} />
                    </Col>
                    <Col xs={12} md={8} className="experience">
                        
                        <p>
                            Develop C++ implementaPons of Pme criPcal control funcPons in Linux environment
                        </p>
                        <p>
                            Efficiently implement and rigorously unit test so_ware requirements to meet deadlines
                        </p>
                        <p>
                            ProducPvely use Git, Bitbucket, Jenkins, Conan and Atlassian toolset
                        </p>

                        <p></p>
                        <p>
                            Spring 2019 - Present
                        </p>
                    </Col>  
                </Row>
                
        </Container>
          
    );
}

export default Resume;