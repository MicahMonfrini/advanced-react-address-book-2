import React from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";
import ListOfUsers from "./ListOfUsers";

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <h2>
        Available Users
      </h2>
      <ListOfUsers users={props.users} />
      <h2>
        Selected Users
      </h2>
      <ListOfUsers users={[]} message={"No users selected"} />
    </div>
  );
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};


export default App;
