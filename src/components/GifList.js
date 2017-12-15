import React from 'react'

const GifList = (props) =>  {
  console.log(props.gif)
  const gifs = props.gif.map(gif => {
    return (
      <div>
      <img src={gif.images.fixed_height_small.url} alt="gif"/>
      </div>
    )
  })
  return <div> {gifs} </div>
}

export default GifList;
