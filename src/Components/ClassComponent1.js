import React, { Component } from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'
import PropsType from 'prop-types';




 class ClassComponent1 extends Component {
    // moreMoney = this.props.money*234
  
  render() {


    return (
      
      <div>
    
       {/* Returning a {this.props.person.id},{this.props.person.name}, {this.props.person.surname}, {this.props.person.age} */}

       {this.props.persons.map((person) => (
        <Table striped bordered hover variant="dark" responsive="md"> 
        <Container className="text-center"  >
        <Row className="bg-light mt-10 pt-5">
        <Col md-3>{person.id}</Col>
        <Col md-9>{person.name}</Col>
        <Col md-5>{person.surname}</Col>
        <Col md-7>{person.age}</Col>
        </Row>
       
      </Container></Table>
                 
                ))}
   
  
 
      </div>
    )
  };
}

export {ClassComponent1};


ClassComponent1.propsType ={
    id: PropsType.number,
    name: PropsType.string,
    surname:PropsType.string,
    age:PropsType.number
}

ClassComponent1.defaultProps = {
  age: 30
}