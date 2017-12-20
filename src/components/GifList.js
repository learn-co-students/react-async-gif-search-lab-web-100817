import React from 'react'


class GifList extends React.Component {

  displayGifs = (gifs) => {
    return this.props.gifs.map((gif, i) => {
      while ( i < 3){
      return (
        <div key={i}>
        <li>
        <img src={gif.images.fixed_width_small.url} />
        </li>
        </div>
      )
    }
    })
  }

  render() {
    return (
      <div>GifList
      <ul>
      {this.displayGifs()}
      </ul>
      </div>
    )
  }
}

export default GifList;
