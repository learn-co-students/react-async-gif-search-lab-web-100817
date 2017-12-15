import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="

class GiftListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs:[],
      searchQuery: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = () => {
    console.log(this.state.searchQuery)
  }


  render(){
    return(
      <div>
        <GifSearch searchQuery={this.state.searchQuery}
                   onChange={this.onChange}
                   onSubmit={this.onSubmit}
                 />
        <GifList />
      </div>
    )
  }
}

export default GiftListContainer
