import React from 'react';
import '../App.css';
import { Container, ListGroup, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Skills = () => (
<div className="skills">
<h3>Skills</h3>
<div>
    <Container>
     <ListGroup variant="flush">
         <Row>
             <Col>
        <ListGroup.Item variant="light">HTML5/CSS3/JS</ListGroup.Item>
        <ListGroup.Item variant="light">MS SQL Server</ListGroup.Item>
        <ListGroup.Item variant="light">ReactJS, Bootstrap, Typescript,Electron</ListGroup.Item>
        <ListGroup.Item variant="light">REST API Development</ListGroup.Item>
        <ListGroup.Item variant="light">Python, Pandas</ListGroup.Item>
        <ListGroup.Item variant="light">Excel/VBA</ListGroup.Item>
        <ListGroup.Item variant="light" action href="www.linkedin.com/in/Blake14">Version Control (Git)</ListGroup.Item>
        </Col>
        <Col>
        <ListGroup.Item variant="light">SAP</ListGroup.Item>
        <ListGroup.Item variant="light">Project Management</ListGroup.Item>
        <ListGroup.Item variant="light">Training / Team Development</ListGroup.Item>
        <ListGroup.Item variant="light" action href="https://www.osisoft.com/pi-system/">Data Collection (PLCs)</ListGroup.Item>
        <ListGroup.Item variant="light">Managing Big Data</ListGroup.Item>
        <ListGroup.Item variant="light">Continuous Development</ListGroup.Item>
        </Col>
        </Row>
        </ListGroup>
    </Container>
</div>
</div>
);

export default Skills;