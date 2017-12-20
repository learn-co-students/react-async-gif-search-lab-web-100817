import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmitSearch(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type='text' onChange={this.handleChange}></input>
      <input type='submit'></input>
      </form>
    )
  }

}

export default GifSearch;
