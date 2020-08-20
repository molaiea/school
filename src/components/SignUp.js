import React from 'react';
import tachyons from 'tachyons';
import {Link} from 'react-router-dom';
import './styles.css';

class SignUp extends React.Component {

	constructor(props){
		super(props);
		this.state={
			fullname: "",
			email: "",
			password: "",
			birthday: "",
			address: "",
			parentprofession: "",
			level: "",
			transport: 0,
			role: "student",
			gender: ""
		}
	}

	handleChange = event => {
	const {name, value} = event.target;
    this.setState({ [name]: value });

  };

  	onRadioChange=e=>{
  		this.setState({
  			role: e.target.value
  		})
  	}

  	onGenderChange=e=>{
  		this.setState({
  			gender: e.target.value
  		})
  	}

  	onSubmitSignUp = (e)=>{
		e.preventDefault();
		fetch('http://localhost:1809/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				fullname: this.state.fullname,
				email: this.state.email,
				password: this.state.password,
				birthday: this.state.birthday,
				address: this.state.address,
				parentprofession: this.state.parentprofession,
				level: this.state.level,
				transport: this.state.transport,
				role: this.state.role,
				gender: this.state.gender
			})
		}).then(res=>console.log(res))
		
		.catch(err=>console.log(err))
		
	}

	render(){


		return(
			<div  className="register">
			<div className="container">
			<section class=" br4 shadow-4">

			  <h1>Qui êtes-vous?</h1>

			  <label>
			    <input className="inputradio" type="radio" name="role"
			    value="student" onChange={this.onRadioChange} checked={this.state.role==="student"}/>
			    <span class="design"></span>
			    <span class="text">Etudiant</span>
			  </label>

			  <label>
			    <input className="inputradio" type="radio" name="role"
			    value="teacher" onChange={this.onRadioChange} checked={this.state.role==="teacher"}/>
			    <span class="design"></span>
			    <span class="text">Enseignant</span>
			  </label>

			  <label>
			    <input className="inputradio" type="radio" name="role"
			    value="parent" onChange={this.onRadioChange} checked={this.state.role==="parent"}/>
			    <span class="design"></span>
			    <span class="text">Parent ou Tuteur</span>
			  </label>

			</section>
			</div>
			<div className="containerform">
			{this.state.role==="student"?
						<form style={{ overflowY: 'scroll' ,height:'100%'}} class="hidescroll pa4 black-80 w-60 ml5 shadow-5">
						  <div className="f1 b pb4 inscription ">Inscription</div>
						  <div >
						    <label className="f4 b white db mb2">Nom et Prénom </label>
						    <input 
						    className=" input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
						    name="fullname"
						    type="text" aria-describedby="name-desc"
						    onChange={this.handleChange}/>
						  </div>
						  <div>
					    <label className="f4 b white db mb2">Addresse Email </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="email"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Mot de Passe </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="password"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Date de Naissance </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="birthday"
					    type="date" aria-describedby="name-desc"/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Sexe </label>
					    <label>
						    <input type="checkbox" name="gender" value="male"
						    onChange={this.onGenderChange} checked={this.state.gender==="male"}/>
						    <span>Male</span>
						  </label>
						  <label>
						    <input type="checkbox" name="gender" value="female"
						    onChange={this.onGenderChange} checked={this.state.gender==="female"}/>
						    <span >Femelle</span>
						</label>
					  </div>
					  <div>
					    <label class="f4 b white db mb2">Addresse </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="address"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Profession du Parent <small>(ou tuteur)</small> </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="parentprofession"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
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
					  <Link onClick={this.onSubmitSignUp} className="f3 ph3 pv3 black-80 bg-moon-gray shadow-5" to="/">S'inscrire</Link>
						</form>
						: this.state.role==="teacher" ? 
						<form style={{ overflowY: 'scroll' ,height:'100%'}} class="hidescroll pa4 black-80 w-60 ml5 shadow-5">
						  <div className="f1 b pb4 inscription ">Inscription</div>
						  <div >
						    <label className="f4 b white db mb2">Nom et Prénom </label>
						    <input 
						    className=" input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
						    name="fullname"
						    type="text" aria-describedby="name-desc"
						    onChange={this.handleChange}/>
						  </div>
						  <div>
					    <label className="f4 b white db mb2">Addresse Email </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="email"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Mot de Passe </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="password"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
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
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Profession du Parent <small>(ou tuteur)</small> </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="parentprofession"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
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
						: 
						<form style={{ overflowY: 'scroll' ,height:'100%'}} class="hidescroll pa4 black-80 w-60 ml5 shadow-5">
						  <div className="f1 b pb4 inscription ">Inscription</div>
						  <div >
						    <label className="f4 b white db mb2">Nom et Prénom </label>
						    <input 
						    className=" input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
						    name="fullname"
						    type="text" aria-describedby="name-desc"
						    onChange={this.handleChange}/>
						  </div>
						  <div>
					    <label className="f4 b white db mb2">Addresse Email </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="email"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Mot de Passe </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="password"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
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
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
					  </div>
					  <div>
					    <label className="f4 b white db mb2">Profession du Parent <small>(ou tuteur)</small> </label>
					    <input 
					    className="input-reset ba b--black-20 pa2 mb2 db w-100  h3 bg-white-70" 
					    name="parentprofession"
					    type="text" aria-describedby="name-desc"
					    onChange={this.handleChange}/>
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
					  <Link onClick={this.onSubmitSignUp} className="f3 ph3 pv3 black-80 bg-moon-gray shadow-5" to="/">S'inscrire</Link>
						</form>}
			</div>
			</div>
		)
	}
}


export default SignUp;