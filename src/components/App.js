import React, {Component} from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";
import ListOfUsers from "./ListOfUsers";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addText: "Select User",
      removeText: null,
      message: "No users selected",
      selectedUserList: [],
      userList: this.props.users
    };
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
          users={this.state.userList}
          onUserSelect={(selectedUser) => {
            this.setState({
              message: null,
              removeText: "Remove User",
              selectedUserList: [
                ...this.state.selectedUserList,
                selectedUser
              ],
            });
          }}
          buttonText={this.state.addText}
        />
        <h2>
          Selected Users
        </h2>
        <ListOfUsers
          users={this.state.selectedUserList}
          onUserSelect={() => {}}
          message={this.state.message}
          buttonText={this.state.removeText}
        />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};


export default App;
