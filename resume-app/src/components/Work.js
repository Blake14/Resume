import React from 'react';
import '../App.css';
import { Container, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Work(props){

    return (
        <ListGroup.Item>{props.desc}</ListGroup.Item>
    )
 }
 
 
 const works = [
 
     {id:1,desc:"Created data streams consisting of historians, stored procedures, triggers, and basic unit conversion calculations for the engineering and quality teams."},
     {id:2,desc:"Managed various manufacturing assets, archive servers, SQL servers, and application servers."},
     {id:3,desc:"Created and maintained data structure to track key performance indicators to ensure products were up to standard and delivered on time and in full."},
     {id:4,desc:"Created meaningful data from machine output for engineering and management teams."},
     {id:5,desc:"Communicated different training materials for data visualization tools, such as SEEQ, PowerBI, and Tableau to the engineering team and leaders."},
     {id:6,desc:"Implemented interface using data flow in MSSQL server to an SAP Interface to track $23 million worth of raw materials, per year."},
     {id:7,desc:"Created data structure for newly built assets and equipment upgrades."},
     {id:8,desc:"Saved $20,000/year by configuring pipeline to shut manufacturing lines down when incorrect raw material was used."},
     {id:9,desc:"Created UI to monitor natural resource and energy usage from machines to capture a cost-savings of $300k/year."},
     {id:10,desc:"Developed data interface suite for installation of new product assets."},
     {id:11,desc:"Developed performance monitoring interface and archive system on application servers."},
     {id:12,desc:"Created a .NET REST API against our SQL Server allowing visibility to the data via web-based applications."},
     {id:13,desc:"Configured MS Excel reports using VBA that streamlined various processes and cutout meetings resulting in cost savings/increased productivity."}
     ]
 
 function Works(){
   return (
       <Container className="skills">
                <h3 className="titles">Work Experience</h3>
                <ListGroup className="skillSet">
                    {works.map((work)=><Work desc={work.desc} />)}
                </ListGroup>
        </Container>
   )
 }

export default Works;