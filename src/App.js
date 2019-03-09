import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function User (props) {
    return (
      <div className="row row-body">
        <div className="col-md-3 row-border"><img src={props.user.picture.thumbnail} alt="user-img"/></div>
        <div className="col-md-3 row-border">{props.user.name.first} {props.user.name.last}</div>
        <div className="col-md-3 row-border">{props.user.email}</div>
        <div className="col-md-3 row-border">{props.user.cell}</div>
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
    axios.get('https://randomuser.me/api/?results=5')
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
    // const users = this.state.users.map(user,index => {
    //   return (
    //     <User user = {user}/>
    //   );
    // });
    return (
      <div >
        <div className="row header ">
          <div className="col-sm-3 row-border">Image</div>
          <div className="col-sm-3 row-border">Name</div>
          <div className="col-sm-3 row-border">Email</div>
          <div className="col-sm-3 row-border">Phone</div>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default App
