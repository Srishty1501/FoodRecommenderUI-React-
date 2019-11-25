import React, { Component } from "react";

class Popup extends Component {
  state = {};
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <textarea className="txtArea" />
          <button onClick={this.props.closePopup}>Close</button>
          <button>Post</button>
        </div>
      </div>
    );
  }
}

export default Popup;
