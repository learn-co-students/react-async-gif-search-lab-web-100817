import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor(props) {
    super(props);

    this.urlFront = "http://api.giphy.com/v1/gifs/search?q=";
    this.urlBack = "&api_key=dc6zaTOxFJmzC";

    this.state = {
      userInput: "",
      gifs: []
    };
  }

  handleChange = event => {
    let target = event.target;
    this.setState(prevState => {
      this.getGifs(target.value);
      return { userInput: target.value };
    });
  };

  getGifs = criteria => {
    fetch(this.urlFront + criteria + this.urlBack)
      .then(res => res.json())
      .then(json =>
        this.setState({
          gifs: json.data.slice(0, 3).map(img => img.images.original.url)
        })
      );
  };

  render() {
    return (
      <div>
        <GifSearch
          handleChange={this.handleChange}
          userInput={this.state.userInput}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
