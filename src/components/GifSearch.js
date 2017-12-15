import React from "react";

class GifSearch extends React.Component {
  state = {
    value: ""
  };

  handleTextEntry = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  preventDefault = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.preventDefault}>
        <div className="form-group">
          <label>Enter A Search Term:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleTextEntry}
          />
        </div>

        <input type="submit" className="btn btn-success" />
      </form>
    );
  }
}

export default GifSearch;
