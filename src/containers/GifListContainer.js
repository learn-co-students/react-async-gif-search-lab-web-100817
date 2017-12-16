import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GitListContainer extends React.Component {
    state = {
        gifs: [],
    }

    searchHandle = term => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
            .then(res => res.json())
            .then( data => this.setState({ gifs: data.data.slice(0,3) }))
    }


    render() {
        return (
            <div>
                <h2>Hi</h2>
                <GifSearch searchHandle={this.searchHandle}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
    
}

export default GitListContainer