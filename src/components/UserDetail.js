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
        <button onClick={this.props.handleClick}>
          Select User
        </button>
      </div>
    );
  }
}

UserDetail.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default UserDetail;
