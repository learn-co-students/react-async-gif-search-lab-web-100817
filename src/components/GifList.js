import React from "react";

const GifList = ({ gifs }) => {
  // embed URL, id
  const myGifs = gifs
    ? gifs.map(gif => (
        <li key={gif.id}>
          <img src={gif.images.fixed_height.url} alt={gif.images.title} />
        </li>
      ))
    : null;
  return <div>
    {gifs ? <ul className="list-unstyled">{myGifs}</ul> : <h2>Search to get started!</h2>}
  </div>
};

export default GifList;
