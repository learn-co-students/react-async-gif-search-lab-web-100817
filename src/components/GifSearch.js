import React from 'react';

class GifSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearch(this.state.search)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="first input" value={this.state.search} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    )
  }
}
export default GifSearch
