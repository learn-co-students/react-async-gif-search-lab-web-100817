import React, { Component } from "react";

class GifSearch extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleChange}
          type="text"
          value={this.props.userInput}
        />
      </div>
    );
  }
}

export default GifSearch;
