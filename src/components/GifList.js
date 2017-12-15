import React, { Component } from "react";

class GifList extends Component {
  gifgletizer = () => {
    return this.props.gifs.map(gif => {
      return <img src={gif} />;
    });
  };

  render() {
    return <div>{this.gifgletizer()}</div>;
  }
}

export default GifList;
