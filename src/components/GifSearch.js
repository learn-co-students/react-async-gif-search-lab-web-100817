import React from 'react'

class GifSearch extends React.Component{

  render(){
    return(
      <div>
        <input type="text" name="searchQuery" value={this.props.searchQuery} onChange={this.props.onChange}/>
        <button onClick={this.props.onSubmit}>Search</button>
      </div>
    )
  }
}
export default GifSearch
