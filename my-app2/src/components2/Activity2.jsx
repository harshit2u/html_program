import React, { Component } from 'react';

class ClassComponent extends Component {
  // Initializing state
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
  }

  // Handling change in input fields
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Render function to display the form and output
  render() {
    const { username, email } = this.state;

    return (
      <div>
        <h2>Class Component - Form Input</h2>

        {/* Form to capture username and email */}
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              placeholder="Enter username"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Enter email"
            />
          </div>
        </form>

        {/* Displaying the captured values */}
        <div>
          <h3>Entered Values:</h3>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
