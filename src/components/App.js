import React, { Component } from 'react';
import coronavirus from '../api/coronavirus';
import SearchBar from './SearchBar';

class App extends Component{
    state = { data: []};

    async componentDidMount() {
        const response = await coronavirus.get('/summary');
        this.setState({ data: response.data });
    }

    onSearchSubmit = (term) => {
        console.log(this.state.data);
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;