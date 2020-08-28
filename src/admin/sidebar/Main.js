import React from 'react';
import { FaBars } from 'react-icons/fa';

var students = [];
const loadStudents = ()=>{
  fetch('http://localhost:1809/students')
        .then(async response => {
            const data = await response.json();
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
const Main = ({
  handleToggleSidebar
}) => {

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1 className="pl5">
         Etudiants
        </h1>
      </header>

      
    </main>
  );
};

export default Main;
