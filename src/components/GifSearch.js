import React from 'react';

class GifSearch extends React.Component {
    state = {
        searchTerm: ''
    }
    
    searchChange = event => {
        const term = event.target.value
        this.setState({ searchTerm: term })
    }

    searchSubmit = event => {
        event.preventDefault()
        this.props.searchHandle(this.state.searchTerm)
    }
    
    render(){ 
        return(
            <div>
                <form onSubmit={this.searchSubmit}>
                    <input type="text"  onChange={this.searchChange} value={this.state.searchTerm}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default GifSearch 