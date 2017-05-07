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
      removeText: "",
      message: "No users selected",
      selectedUserList: [],
      userList: this.props.users
    };
  }

  selectUser(selectedUser) {
    this.setState({
      message: null,
      removeText: "Remove User",
      userList: [
        ...this.state.userList].filter((item) => {
          return item !== selectedUser;
        }),
      selectedUserList: [
        ...this.state.selectedUserList,
        selectedUser
      ],
    });
  }

  removeUser(selectedUser) {
    this.setState({
      selectedUserList: [
        ...this.state.selectedUserList].filter((item) => {
          return item !== selectedUser;
        }),
      userList: [
        ...this.state.userList,
        selectedUser
      ],
      message: this.state.selectedUserList.length > 1 ? "" : "No users selected"
    });
  }

  resetState() {
    this.setState({
      addText: "Select User",
      removeText: "",
      message: "No users selected",
      selectedUserList: [],
      userList: this.props.users
    });
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
          onUserSelect={this.selectUser.bind(this)}
          buttonText={this.state.addText}
        />
        <h2>
          Selected Users
        </h2>
        <ListOfUsers
          users={this.state.selectedUserList}
          onUserSelect={this.removeUser.bind(this)}
          buttonText={this.state.removeText}
          message={this.state.message}
        />
        <button className="Reset-button" onClick={this.resetState.bind(this)}>
          RESET
        </button>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};


export default App;
