import React from "react"
import { Container, Row, Col,Table } from "react-bootstrap";

 function FuncComponent2({persons}) {
 
  return (
  
  
   <>
   
     

{persons.map((person) => ( 
                 <Table  responsive="sm" >
                  <Container className="text-center"   >
                    <Row className="bg-light p-5">
                    <Col md-3>{person.id}</Col>
                    <Col md-9>{person.name}</Col>
                    <Col md-5>{person.surname}</Col>
                    <Col md-7>{person.age}</Col>
                    </Row>
                  </Container>
                  </Table>
                )).reverse()}
                
     </>
  );
}

export default FuncComponent2;