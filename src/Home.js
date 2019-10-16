import React, { Component } from 'react'
import axios from "axios";

const nasaURL = "https://api.nasa.gov/insight_weather/?api_key=ho6badIV7YVgrC00fo24mrl3juolIdryv8DPQsDc&feedtype=json&ver=1.0";

export default class Home extends Component {
    componentDidMount() {
        const averageTemp = this.props.match.params.AT;
        // const averageTemp = sol_keys.AT;
        const url = `${nasaURL}.json`;

        axios
            .get(url)
            .then(response => {
                console.log(response);
               // console.log(Object.values(response.data)[0].AT.av);
                let newAveTemp = Object.values(response.data);
                //this.props.setAveTemp(newAveTemp);
                // let season = response.data.insight_weather.season;
                // this.props(season);
                // response.json()
                let weather = newAveTemp.map(avTemp => {
                    console.log(avTemp);
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        // let weather = newAveTemp.map(avTemp => {
            return (
                <div key >
                    <h1>Current Weather</h1>
                    <h2>{this.weather}</h2>
                        </div>
           );
         // })
       }
}