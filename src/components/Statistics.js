import React from 'react';

const Statistics = (props) => {
    return (
        <div className="ui segment">
            <h1> {props.title} </h1>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        {props.totalConfirmed}
                    </div>
                    <div className="label">
                        Total Cases
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        {props.newConfirmed}
                    </div>
                    <div className="label">
                        New Cases
                    </div>
                </div>
            </div>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        {props.totalDeaths}
                    </div>
                    <div className="label">
                        Total Deaths
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        {props.newDeaths}
                    </div>
                    <div className="label">
                        New Deaths
                    </div>
                </div>
            </div>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        {props.totalRecovered}
                    </div>
                    <div className="label">
                        Total Reocvered
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        {props.newRecovered}
                    </div>
                    <div className="label">
                        New Recovered
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics; 