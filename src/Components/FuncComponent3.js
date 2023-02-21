import React from "react"
import Table from 'react-bootstrap/Table';
export default function FuncComponent3({persons}) {
  //const {id,name,age,surname}= persons
  
   
 

  
      return (
        <>
        <p>Funkcijska komponenta 3</p>
        <Table striped bordered hover>
          <thead className="bg-primary" mt-10>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {persons.map((person) => (
                  <tr className="bg-warning" key={person.id}>
                    <th >{person.id}</th>
                    <td>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.age}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
        </>
      );
    }
    
 
     
//         <>
       
 
//         <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th >id</th>
//                   <th >name</th>
//                   <th >surname</th>
//                   <th >age</th>
//                 </tr>
//               </thead>
//               <tbody>
//         {persons.map((person) => (
//                   <tr key={person.id}>
//                     <th >{person.id}</th>
//                     <td>{person.name}</td>
//                     <td>{person.surname}</td>
//                     <td>{person.age}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>

  
//   </>
//   );
// }
       
//         // {persons.map((person) => (
//         //           <tr key={person.id}>
//         //             <th scope="row">{person.id}</th>
//         //             <td>{person.name}</td>
//         //             <td>{person.surname}</td>
//         //             <td>{person.age}</td>
//         //           </tr>
//         //         ))}
// //       </>
             
                
                
    
//   );
  
 