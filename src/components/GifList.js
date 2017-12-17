import React from 'react';

const GifList = (props) => {
  return(
    <img key={props.gif.type} alt={props.gif.type} src={props.gif.images.original.url}/>
  )
}

export default GifList
