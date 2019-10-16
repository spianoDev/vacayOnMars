import React, { Component } from 'react'
import axios from "axios";

const nasaURL = "https://api.nasa.gov/insight_weather/?api_key=ho6badIV7YVgrC00fo24mrl3juolIdryv8DPQsDc&feedtype=json&ver=1.0";

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            aveTemps:[]
        }
    }
    componentDidMount() {
        // const averageTemp = this.props.match.params.AT;
        // const averageTemp = sol_keys.AT;
        const url = `${nasaURL}.json`;

        axios
        .get(url)
        .then(response => {
            // console.log(response.data);
        let aveTemps = [];
        
        for (let datum in response.data) {
            if (response.data[datum].AT !== undefined) {
                aveTemps.push(response.data[datum].AT.av)
                console.log(aveTemps);
            }
            
        } 
              this.setState({
                    aveTemps: aveTemps
                })
            // let newAveTemp=Object.values(response.data);
        //    console.log(newAveTemp[0].AT.av)
            // let weather = newAveTemp.map(avTemp => {
            //     // console.log(avTemp);
            //     this.setState({
            //         weather:avTemp
            //     })
            // })

            // console.log(this.state.weather) 
        })
        .catch(err => {
            console.error(err);
        });
    }


    render() {
        // console.log(this.state.weather)
        let weather = this.state.aveTemps.map(avTemp => {
            return (
                <div key={avTemp.av}>
                    <li>{avTemp}</li>
                </div>
                );
            });
                return(
                <div>
                    <ul>
                         <li>{weather}</li>
                    </ul>
                </div>
                )};
}
