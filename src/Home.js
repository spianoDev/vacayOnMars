import React, { Component } from 'react'
import axios from "axios";

const nasaURL = "https://api.nasa.gov/insight_weather/?api_key=ho6badIV7YVgrC00fo24mrl3juolIdryv8DPQsDc&feedtype=json&ver=1.0";

export class Home extends Component {
    componentDidMount() {
        const url = `${nasaURL}.json`;
    
    axios
        .get(url)
        .then(response => {
            console.log(response);
            // let season = response.data.insight_weather.season;
            // this.props(season);
            // response.json()
        })
        .catch(err => {
            console.error(err);
        });
    }
    render() {
        return (
            <div>
               <h1>Current Weather</h1>

            </div>
        )
    }
}

export default Home;
