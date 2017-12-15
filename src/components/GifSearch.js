import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()
    this.state= {
      search: ''
    }
  }

  getSearchValue =(event) => {
    event.preventDefault()
    this.props.submitHandler(this.state.search)
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({search: event.target.value})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.getSearchValue}>
          <input value={this.state.search} onChange={this.handleChange} type="text"></input>
          <button type="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch
