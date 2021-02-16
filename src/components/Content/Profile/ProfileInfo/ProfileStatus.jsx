import React from "react";
import style from "./ProfileStatus.module";
import { updateStatus } from './../../../../redux/profile-reducer';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    debugger;
      this.setState({
          editMode:true
      })
  }

  deactivateEditMode = () => {
    this.setState({
        editMode:false
    });
    this.props.updateStatus(this.state.status);
}

onStatusChange = (e) => {
  this.setState({
    status: e.currentTarget.value
  });
}

  render() {
    return (
        <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status ||  "------"}</span>
          </div>
        )}
  
        {this.state.editMode && (
          <div>
            <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status || ''}></input>
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus;
