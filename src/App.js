import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import tachyons from 'tachyons';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import admin from './assets/admin.svg';
import student from './assets/graduated.svg';
import teacher from './assets/teacher.svg';
import register from './assets/register.svg';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">

    <Router>
    <Switch>
    <Route exact path="/" exact strict render={
        ()=>{
          return(
            <div>
              <div className="grid">
    <div className="w-90 grow pointer mt5 center bg-orange pa5 f2 serif contgr">
    <img className="w-50 center" src={student} alt="student" />
      <span>Student</span>
      </div>
      <div className="w-90  grow pointer mt5 center bg-green pa5 f2 serif contgr">
      <img className="w-50 center tc" src={teacher} alt="teacher" />
      <span>Espace Enseignant</span>
      </div>
      <div className="w-90 grow pointer mt5 center bg-blue pa5 f2 serif contgr">
      <img className="w-50 center" src={admin} alt="admin" />
      <span>Espace Administrateur</span>
      </div>
      </div>
      <h1 className="mt5">Ou</h1>
      <Link to="/register">
      <div className="w-30 mb5 grow pointer mt5 center striped--light-silver white pa5 f2 serif contgr">
      <img className="w-40 center mb5" src={register} alt="inscription" />
      <span>S'inscrire</span>
      </div>
      </Link>
            </div>
          )
        }
      }/>
    
    <Route path="/register" component={SignUp}/>

    </Switch>
    </Router>
    </div>
  );
}

export default App;
