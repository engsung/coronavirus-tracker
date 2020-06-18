import React, { Component } from 'react';

class SearchBar extends Component{
    state = { term: '' }

    onFromSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i className="search icon"></i>
                    Search Country
                </div>
                <div className="inline">
                    <form onSubmit={this.onFromSubmit} className="ui form">
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                            >
                        </input>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;