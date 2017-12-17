import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      gifList: [],
      search: ""
    }
  }

  onSearch = (text) => {
    this.setState({search: text}, () => this.getGifs(this.state.search))
  }

  getGifs = (search) => {
    fetch (`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(response => this.list(response.data))
  }

  list = (response) => {
    let gifList = response.slice(0, 3)
    this.setState({gifList})
  }

  render(){
    const gif = this.state.gifList.map(gif => <li><GifList gif={gif} /></li>)
    return(
      <ul>
        <GifSearch onSearch={this.onSearch}/>
        {gif}
      </ul>
    )
  }
}
export default GifListContainer
