import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const Osvaldo = () => {

  const [personArray, setPersonArray] = useState([]);

  useEffect( () => {
    setPersonArray([{id : 1, name : 'Osvaldo', age : 30}]);
    // console.log(personArray);
  }, []);

  // useEffect( () => {
  //   console.log('====================================');
  //   console.log("test Array ", personArray);
  //   console.log('====================================');
  // }, [personArray]);

  return (
    <>

      <h1> Osvaldo's component </h1>

      <nav>
        <Link to='new'>New</Link>
        <Outlet/>
      </nav>

      <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> name </th>
            <th> age </th>
          </tr>
        </thead>
        <tbody>
          {
            personArray.map( (person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
};

// personArray.map((person) => (
//   <tr key={person.id}>
//     <td>{person.id}</td>
//     <td>{person.name}</td>
//     <td>{person.age}</td>  
//   </tr>
// ));