import {FuncComponent1,FuncComponent2,FuncComponent3,ClassComponent1,ClassComponent2,ClassComponent3} from './Components'
import React from 'react'
import { Routes,Route,Link } from 'react-router-dom';
import {Navbar,Container,Row,Col} from 'react-bootstrap';








function App() {
   
        let persons = [];
        let person = {};
        for(let i = 0;i<10;i++){
         person =
          {
              id:i,
              name: 'sara'+i,
              surname: 'jones'+i,
              age: 20+i
              
      
          }
          persons.push(person);
          
        }
     
           
       
    
      
       
      
 
  return (
  <>
  
 <Navbar bg="dark" expand="xxl" >
  <Container fluid>
    <Row>
    {/* <Col><Card>
     <Card.Img fluid src="favicon-32x32.png" alt="Description" />
     <Card.Body>
  </Card.Body>
</Card></Col> */}
      <Col ><Link className='text-white text-center' to="/funccomponent1">FUNCTION1</Link></Col>
      <Col><Link className='text-white text-center' to="/funccomponent2">FUNCTION2</Link></Col>
      <Col><Link className='text-white text-center' to="/funccomponent3">FUNCTION3</Link></Col>
      <Col><Link className='text-white text-center' to="/classcomponent1">CLASS 1</Link></Col>
      <Col><Link className='text-white text-center' to="/classcomponent2">CLASS 2</Link></Col>
      <Col><Link className='text-white text-center' to="/classcomponent3">CLASS 3</Link></Col>
    </Row>
  </Container>
 </Navbar>


  <Routes>
    <Route path="/funccomponent1" element={ <FuncComponent1 person={person}/>}></Route>
    <Route path="/funccomponent2" element={ <FuncComponent2 persons={persons}/>}></Route>
    <Route path="/funccomponent3" element={<FuncComponent3 persons={persons} />}> </Route>
    <Route path="/classcomponent1" element={<ClassComponent1 persons={persons} />}> </Route>
    <Route path="/classcomponent2" element={<ClassComponent2 />}> </Route>
    <Route path="/classcomponent3" element={<ClassComponent3 />}> </Route>
  </Routes>
 
  
  
  
{/*  
  <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">surname</th>
                  <th scope="col">age</th>
                </tr>
              </thead>
              <tbody>
        {persons.map((person) => (
                  <tr key={person.id}>
                    <th scope="row">{person.id}</th>
                    <td>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>

   */}
  </>
  );
}


/*  <div>
                {props.map(person => (
                  
                    <p>{person.id}</p>
                    <p>{person.name}</p>
                    <p>{person.surname}</p>
                    <p>{person.age}</p>
                 
                ))}
              </div>*/


export default App;


