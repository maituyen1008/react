import React, { Component } from 'react';
import axios from 'axios';

function User (props) {
    return (
      <div className="container">
        <tr>
          <td className="row-1"><img src={props.user.picture.thumbnail}/></td>
          <td className="">{props.user.name.first} {props.user.name.last}</td>
          <td>{props.user.email}</td>
          <td>{props.user.cell}</td>
        </tr>
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
    axios.get('https://randomuser.me/api/?results=100')
    .then(response =>{ 
      this.setState({users: response.data.results})
      console.log(this.state.users)
    })
    .catch(err => console.log(err))
  }
  render(){
    const users = this.state.users.map((user, index) => 
      <div key={index}><User user={user}/></div>
    )
    return (
      <thread>
        <tr>
          <th className="row-1">Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users} 
      </thread>
    );
  }
}

export default App
