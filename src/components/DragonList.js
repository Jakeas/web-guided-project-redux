import React from "react";
import { connect } from "react-redux";

// STEP 2 - Read data from the Redux store in this component
class DragonList extends React.Component {
  state = {
    newMember: "",
  };

  handleChanges = (e) => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button>Add member</button>
      </div>
    );
  }
}

// TODO:
//  create a "mapStateToProps" function
//  with mSTP, pass the members array to the props of DragonList through connect

const mapStateToProps = (state) => {
  return {
    members: state.members,
  };
};

// export as the default whatever connect returns
export default connect(mapStateToProps, {})(DragonList);

// const ConnectedApp = connect()();
