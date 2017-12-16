import React from 'react';

const gifList = (props) => {
    const list = props.gifs.map( gif =>  (
        <li> {gif.title}
            <img src={gif.images.fixed_height.url} alt={gif.title}/>
        </li>
    ))

    return(
        <ul>
            {list}
        </ul>
    )
}

export default gifList;