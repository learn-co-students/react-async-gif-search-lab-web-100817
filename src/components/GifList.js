import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const GifList = ({ gifs }) => {
  // embed URL, id
  const myGifs = gifs
    ? gifs.map(gif => (
        <li key={gif.id}>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
          >
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </CSSTransitionGroup>
        </li>
      ))
    : null;
  return (
    <div>
      {gifs ? (
        <ul className="list-unstyled">{myGifs}</ul>
      ) : (
        <h2>Search to get started!</h2>
      )}
    </div>
  );
};

export default GifList;
