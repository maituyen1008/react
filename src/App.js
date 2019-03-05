import React, { Component } from 'react';
import axios from 'axios';

function User (props) {
    return (
      <div>
        <img src={props.user.picture.medium}/>
        <p>{props.user.name.first} {props.user.name.last}</p>
        <p>{props.user.email}</p>
        <p>{props.user.cell}</p>
      </div>
    );
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      users: []
    }
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=1')
    .then(response =>{ 
      this.setState({users: response.data.results})
      console.log(this.state.users)
    })
    .catch(err => console.log(err))
  }
  render(){
    const users = this.state.users.map((user, index) => 
      <div key={index}><User user={user}  /></div>
    )
    return (
      <div>
        {users}
      </div>
    );
  }
}

export default App
