import React, { Component } from 'react'
import {Link } from "react-router-dom";

import axios from "axios";

const nasaURL = "https://api.nasa.gov/insight_weather/?api_key=ho6badIV7YVgrC00fo24mrl3juolIdryv8DPQsDc&feedtype=json&ver=1.0";

export default class DailyTemp extends Component {

    componentDidMount() {
        const url = `${nasaURL}.json`;

        axios
            .get(url)
            .then(response => {
                let weather = [];

                for (let datum in response.data) {
                    if (response.data[datum] !== undefined) {
                        weather.push(response.data[datum]);

                        console.log(weather);
                    }
                }

            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        return(
        <h2>Coming soon...</h2>
        )
    }


}