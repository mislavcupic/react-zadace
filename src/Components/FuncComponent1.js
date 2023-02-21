import React from "react";
// import PropTypes from 'prop-types';



 function FuncComponent1({person}) {
  //  const {id,name,surname,age} = props //ovo je samo zasad za pojedinu osobu nariktano
  return (
  
   
      <div>
        <p>Ovo je funkcija 1 i iz nje dobivaš id:{person.id}, zatim name: {person.name}, {person.surname} i godine: {person.age}</p>
       
     </div>
  );
}

 

export default FuncComponent1;

// FuncComponent1.propTypes ={
//   person: PropTypes.object
// };


// FuncComponent1.defaultProps = {
// pozdrav: 'Dober Man',
// ime: 'Mislav'


// };