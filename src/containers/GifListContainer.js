import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = `http://api.giphy.com/v1/gifs/search?q=snacks&api_key=dc6zaTOxFJmzC`

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      gifs: []
    }
  }

  gifFetch = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=snacks&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json()).then(response => this.setState({ gifs: response.data }))}


  componentDidMount = () => {
    this.gifFetch();
  }

  handleSubmitSearch = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  render (){
    console.log(this.state.searchTerm)
    return (
      <div>
      <GifSearch
      handleSubmit={this.handleSubmitSearch}
      />
      <p>GifListContainer</p>
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
