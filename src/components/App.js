import React, {Component} from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";
import ListOfUsers from "./ListOfUsers";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>
          Available Users
        </h2>
        <ListOfUsers
          users={this.props.users}
        />
        <h2>
          Selected Users
        </h2>
        <ListOfUsers
          users={[]}
          message={"No users selected"}
        />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};


export default App;
