import React from 'react';
import "./Statistics.css";

const Statistics = (props) => {
    return (
        <div className="ui segment stat">
            <h1> {props.title} </h1>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        <p>{props.totalConfirmed}</p>
                    </div>
                    <div className="label">
                        Total Cases
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        <p>{props.newConfirmed}</p>
                    </div>
                    <div className="label">
                        New Cases
                    </div>
                </div>
            </div>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        <p>{props.totalDeaths}</p>
                    </div>
                    <div className="label">
                        Total Deaths
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        <p>{props.newDeaths}</p>
                    </div>
                    <div className="label">
                        New Deaths
                    </div>
                </div>
            </div>
            <div className="ui two statistics">
                <div className="statistic">
                    <div className="value">
                        <p>{props.totalRecovered}</p>
                    </div>
                    <div className="label">
                        Total Reocvered
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        <p>{props.newRecovered}</p>
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