import React from 'react'

class GifList extends React.Component{

  render(){
    // debugger;
    const gifs = this.props.gifs.map(gif => <img src={gif} />)


    return (
      <div>
        {gifs}

      </div>
    )
  }
}
export default GifList
