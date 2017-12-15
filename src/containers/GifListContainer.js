import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      search: ''
    }
  }

  // componentWillMount(){
  //   this.getData()
  // }

  getData = () => {
   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC`)
    .then(response=> response.json())
    .then(res => {
      this.setState({gifs: res.data.slice(0,3)})
      })

  }


  submitHandler = (search) => {
    this.setState({search: search}, () => this.getData())
  }

  render(){
    return (
      <div>
      <GifSearch submitHandler={this.submitHandler}/>
        <GifList gif={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
