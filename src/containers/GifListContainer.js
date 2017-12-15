import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifs: null
  };

  // componentDidMount() {
  //   fetch("http://api.giphy.com/v1/gifs/search?q=hey&api_key=dc6zaTOxFJmzC")
  //     .then(data => data.json())
  //     .then(res => {
  //       this.setState({ gifs: res.data.slice(0, 3) });
  //     });
  // }

  handleSubmit = query => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`
    )
      .then(data => data.json())
      .then(res => {
        this.setState({ gifs: res.data.slice(0, 3) });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <GifList gifs={this.state.gifs} />
          </div>
          <div className="col-sm-6">
            <GifSearch handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default GifListContainer;
