import React, {Component} from "react";
import UserDetail from "./UserDetail";
import PropTypes from "prop-types";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const userList = this.props.users.map((user, index) => {
      return (
        <UserDetail
          key={index}
          user={user}
          handleClick={() => {
            this.props.onUserSelect(user);
          }}
          buttonText={this.props.buttonText}
        />
      );
    });
    return (
      <div>
        {userList}
        {this.props.message}
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  onUserSelect: PropTypes.func.isRequired
};

export default ListOfUsers;
