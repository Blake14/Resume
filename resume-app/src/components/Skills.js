import React from 'react';
import '../App.css';
import { Container, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Skill(props){

    return (
        <ListGroup.Item>{props.desc}</ListGroup.Item>
    )
 }
 
 
 const skills = [
 
     {id:1,desc:"MS SQL Server, SSRS",category:"Technology"},
     {id:2,desc:"Power BI, Tableau, SEEQ",category:"Technology"},
     {id:3,desc:"ReactJS, Bootstrap, Typescript, Electron",category:"Technology"},
     {id:4,desc:"REST API Development",category:"Technology"},
     {id:5,desc:".NET Development",category:"Technology"},
     {id:6,desc:"Excel/VBA",category:"Technology"},
     {id:7,desc:"Python, Pandas",category:"Technology"},
     {id:8,desc:"Version Control (Git)",category:"Technology"},
     {id:9,desc:"Data Analytics",category:"Technology"},
     {id:10,desc:"SAP",category:"Technology"},
     {id:11,desc:"Project Management",category:"Technology"},
     {id:12,desc:"Training / Team Development",category:"Technology"},
     {id:13,desc:"Data Collection (PLCs)",category:"Technology"},
     {id:14,desc:"Data Manipulation / Validation",category:"Technology"},
     {id:15,desc:"Managing Big Data",category:"Technology"},
     {id:16,desc:"Continuous Development",category:"Technology"}
 
     ]
 
 function Skills(){
   return (
       <Container className="skills">
                <h3 className="titles">Skills</h3>
                <ListGroup className="skillSet">
                {
                skills.filter(function (skills) {
                        return skills.category === "Technology";
                        }).map((skill)=><Skill desc={skill.desc} category={skill.category}/>)

                }
                </ListGroup>
        </Container>
   )
 }

export default Skills;