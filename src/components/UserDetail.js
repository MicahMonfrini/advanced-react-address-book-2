import React, {Component} from "react";
import PropTypes from "prop-types";

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.user.firstName} {this.props.user.lastName}
        <button onClick={() => {
          console.log("User was clicked")
        }}>
          Select User
        </button>
      </div>
    );
  }
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserDetail;
