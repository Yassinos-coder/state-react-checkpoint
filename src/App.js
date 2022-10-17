import './App.css';
import React from "react";
import profilePicture from './img/profilePicture.png';

class App extends React.Component {

  state = { isProfileToggle:true }
  Person = {
    fullName: 'Yassine Castro',
    bio: 'Born in 18 january 2003 casablanca yassine is soon to be one of the best fullstack JS Devs',
    imgSrc:  profilePicture ,
    profession: 'Student at GoMyCode',
    ToggleView : true
  }
  
  // Funtionc Called onclick of Show Profile
  ProfileToggleView(){
    // Checks if isProfileToggle & ToggleView are true which means profile will be shown if true and clicked than set to false
    if (this.state.isProfileToggle === true) {
      this.setState({isProfileToggle : false})
      this.Person.ToggleView = false
      console.log(`Profile View Toggle Off!`)
    } else {
      // it will be false which means profile not shown and it will be set to true onclick
      this.setState({isProfileToggle : true})
      this.Person.ToggleView = true
      console.log(`Profile View Toggle On!`)
    }
  }
  render () {
    return (
      <div className="user-box-info" >
        <img 
          alt=''
          className='profilePicture' 
          src={ this.Person.imgSrc } 
          style={  this.Person.ToggleView === false ? {contentVisibility: 'hidden'}: {contentVisibility: 'visible'}} 
        />

        <div 
          className="text" 
          style={ this.Person.ToggleView  === false ? {visibility: 'hidden'} : {contentVisibility: 'visible'}}
        >
          <p className="fullName">Full Name : { this.Person.fullName }</p>
          <p className="bio">Bio : { this.Person.bio }</p>
          <p className="profession">Profession: { this.Person.profession }</p>
        </div>
        <div className="interactions-btn">
          <button onClick={ ()=> this.ProfileToggleView()} className="btn-toggle-profile">Show Profile</button>
        </div>
      </div>
    )
  }
}


export default App;
