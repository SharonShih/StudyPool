import React, { Component } from 'react';
import axios from 'axios';

class UserTest extends Component {
  state = {
    users:[]
  }
  componentDidMount(){
    this.getUsers();
  }

  getUsers = _ => {
        axios.get('/User')
        .then((data) => {
      console.log(data.data.User);
      this.setState({users: data.data.User});
    })
    // .then(({response}) => this.setState({users: response.users}))
    .catch(error => console.log(error));
  }
  showUsers = user => <div key={user.User_id}>{user.User_name}{user.User_email}</div>
  render() {//building react method that comes inse od react component
    const { users } = this.state;
    return (//jsx code and can return only a single parent tag
      <div className="App">
        {users.map(this.showUsers)}
      </div>
    );
  }
}

export default UserTest;
