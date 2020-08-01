import React, { Component } from 'react';
import coronavirus from '../api/coronavirus';
import SearchBar from './SearchBar';
import Statistics from './Statistics';

class App extends Component{
    constructor() {
        super();
        this.state = { data: {}, global:{}, country: null, found: false };
    }

    async componentDidMount() {
        const response = await coronavirus.get('/summary');

        this.setState({ data: response.data });

        var newConfirmed = this.state.data.Global.NewConfirmed;
        var newDeaths = this.state.data.Global.NewDeaths;
        var newRecovered = this.state.data.Global.NewRecovered;
        var totalConfirmed = this.state.data.Global.TotalConfirmed;
        var totalDeaths = this.state.data.Global.TotalDeaths;
        var totalRecovered = this.state.data.Global.TotalRecovered;

         this.setState({ 
            global: {
                newConfirmed: newConfirmed,
                newDeaths: newDeaths,
                newRecovered: newRecovered,
                totalConfirmed: totalConfirmed,
                totalDeaths: totalDeaths,
                totalRecovered: totalRecovered
            }
         });
    }

    onSearchSubmit = (term) => {
        var result = this.state.data.Countries.filter(nation => nation.Country.toLowerCase() === term.toLowerCase());

        if (result.length){
            this.setState({ 
                country: result[0],
                found: true
            });
        }
    }

    countryRender() {
        if (this.state.found){
            return(
                <Statistics 
                    title={this.state.country.Country}
                    newConfirmed={this.state.country.NewConfirmed}
                    newDeaths={this.state.country.NewDeaths}
                    newRecovered={this.state.country.NewRecovered}
                    totalConfirmed={this.state.country.TotalConfirmed}
                    totalDeaths={this.state.country.TotalDeaths}
                    totalRecovered={this.state.country.TotalRecovered}
                />
            );
        }
    }

    render(){
        return (
            <div className="ui container">
                <Statistics 
                    title="Global" 
                    newConfirmed={this.state.global.newConfirmed}
                    newDeaths={this.state.global.newDeaths}
                    newRecovered={this.state.global.newRecovered}
                    totalConfirmed={this.state.global.totalConfirmed}
                    totalDeaths={this.state.global.totalDeaths}
                    totalRecovered={this.state.global.totalRecovered}
                />
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.countryRender()}
            </div>
        );
    }
}

export default App;