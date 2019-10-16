import React, { Component } from 'react'
import axios from "axios";

const nasaURL = "https://api.nasa.gov/insight_weather/?api_key=ho6badIV7YVgrC00fo24mrl3juolIdryv8DPQsDc&feedtype=json&ver=1.0";

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            weather:[]
        }
    }
    componentDidMount() {
        // const averageTemp = this.props.match.params.AT;
        // const averageTemp = sol_keys.AT;
        const url = `${nasaURL}.json`;

        axios
            .get(url)
            .then(response => {
                console.log(response.data);
               
                let newAveTemp=Object.values(response.data);
            //    console.log(newAveTemp[0].AT.av)
                let weather = newAveTemp.map(avTemp => {
                    // console.log(avTemp);
                    this.setState({
                        weather:avTemp
                    })
                })

                // console.log(this.state.weather) 
            })
            .catch(err => {
                console.error(err);
            });
    }


    render() {
        // console.log(this.state.weather)
        // let weather = newAveTemp.map(avTemp => {
        return (
                <div key >
                  {this.weather}
                        </div>
           );
         // })
       }
}