import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'



class GiftListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs:[],
      searchQuery: ''
    }
  }

  fetchGifs = (data) => {
    let searchGif = data.replace(/ /g,"_")
    let Url = `http://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=dc6zaTOxFJmzC`
    fetch(Url).then(res => res.json()).then(gifs => this.setState({ gifs: gifs.data.slice(0,3).map(gif => gif.images.original.url) }))

  }
  componentDidMount= () => {
    this.state.searchQuery === '' ? this.fetchGifs("welcome") : null

  }


  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = () => {
    this.fetchGifs(this.state.searchQuery)
  }


  render(){
    console.log(this.state.gifs)
    return(
      <div>
        <GifSearch searchQuery={this.state.searchQuery}
                   onChange={this.onChange}
                   onSubmit={this.onSubmit}
                 />
               <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GiftListContainer
