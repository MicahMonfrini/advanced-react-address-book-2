import React, {Component} from "react";
import UserDetail from "./UserDetail";
import PropTypes from "prop-types";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message
    };

  }

  handleClick() {
    console.log("User was clicked");
  }

  render() {
    const userList = this.props.users.map((user, index) => {
      return (
        <UserDetail
          key={index}
          user={user}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div>
        {userList}
        {this.state.message}
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  message: PropTypes.string
};

export default ListOfUsers;
