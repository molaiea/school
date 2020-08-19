import React from 'react';
import tachyons from 'tachyons';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {

	constructor(props){
		super(props);
		this.state={
			fullname: "",
			email: "",
			password: "",
			birthday: "",
			address: +"",
			parentprofession: "",
			level: "",
			transport: 0,
			role: ""
		}
	}

	handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log(this.state)
  };


	render(){


		return(
			<div  className="register">
			<form className="radio">
        <div className="">
          <label>
            <input type="radio" name="role" value="student" 
            onChange={this.handleChange}/>
            Etudiant
          </label>
        </div>
        <div className="">
          <label>
            <input type="radio" name="role" value="teacher" 
            onChange={this.handleChange}/>
            Enseignant
          </label>
        </div>
        <div >
          <label>
            <input type="radio" name="role" value="parent"
            onChange={this.handleChange}/>
            Parent ou Tuteur
          </label>
        </div>
        <div class="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio1"
          name="customRadio"
          class="custom-control-input"
          
        />
        <label class="custom-control-label" for="customRadio1"
          >Toggle this custom radio</label
        >
      </div>
      </form>
			<form style={{ overflowY: 'scroll' ,height:'100%'}} class="hidescroll pa4 black-80 w-40 shadow-5">
			  <div className="f1 b pb4 inscription ">Inscription</div>
			  <div >
			    <label className="f4 b white db mb2">Nom et Prénom </label>
			    <input 
			    className=" input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
			    name="fullname"
			    type="text" aria-describedby="name-desc"/>
			  </div>
			  <div>
		    <label className="f4 b white db mb2">Addresse Email </label>
		    <input 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
		    name="email"
		    type="text" aria-describedby="name-desc"/>
		  </div>
		  <div>
		    <label className="f4 b white db mb2">Mot de Passe </label>
		    <input 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
		    name="password"
		    type="text" aria-describedby="name-desc"/>
		  </div>
		  <div>
		    <label className="f4 b white db mb2">Date de Naissance </label>
		    <input 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
		    name="birthday"
		    type="date" aria-describedby="name-desc"/>
		  </div>
		  <div>
		    <label class="f4 b white db mb2">Addresse </label>
		    <input 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
		    name="address"
		    type="text" aria-describedby="name-desc"/>
		  </div>
		  <div>
		    <label className="f4 b white db mb2">Profession du Parent <small>(ou tuteur)</small> </label>
		    <input 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
		    name="parentprofession"
		    type="text" aria-describedby="name-desc"/>
		  </div>
		  <div >
		    <label className="f4 b white db ">Niveau Scolaire </label>
		    <select list="levels" 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" name="level" id="browser">
			    <option value="1er">1er</option>
			    <option value="2ème">2ème</option>
			    <option value="3ème">3ème</option>
			</select>
		  </div>
		  <div className="mb4">
		    <label className="f4 b white db mb2">Transport </label>
		    <select list="levels" 
		    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" name="level" id="browser">
			    <option value="1">Oui</option>
			    <option value="0">Non</option>
			</select>
		  </div>
		  <Link className="f3 ph3 pv3 black-80 bg-moon-gray shadow-5" to="/">S'inscrire</Link>
			</form>
			</div>
		)
	}
}


export default SignUp;