import React from 'react';
import '../App.css';
import { Container, ListGroup, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Skill(props){

    return (
        <ListGroup.Item>{props.desc}</ListGroup.Item>
    )
 }
 
 
 const skills = [
 
     {id:1,desc:"MS SQL Server, SSRS"},
     {id:2,desc:"Power BI, Tableau, SEEQ"},
     {id:3,desc:"ReactJS, Bootstrap, Typescript, Electron"},
     {id:4,desc:"REST API Development"},
     {id:5,desc:".NET Development"},
     {id:6,desc:"Excel/VBA"},
     {id:7,desc:"Python, Pandas"},
     {id:8,desc:"Version Control (Git)"},
     {id:9,desc:"Data Analytics"},
     {id:10,desc:"SAP"},
     {id:11,desc:"Project Management"},
     {id:12,desc:"Training / Team Development"},
     {id:13,desc:"Data Collection (PLCs)"},
     {id:14,desc:"Data Manipulation / Validation"},
     {id:15,desc:"Managing Big Data"},
     {id:16,desc:"Continuous Development"}
 
     ]
 
 function Skills(){
   return (
       <Container className="skills">
                <h3 className="titles">Skills</h3>
                <ListGroup className="skillSet">
                    {skills.map((skill)=><Skill desc={skill.desc} />)}
                </ListGroup>
        </Container>
   )
 }

export default Skills;