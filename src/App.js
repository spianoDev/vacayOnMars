import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"
import DailyTemp from "./DailyTemp";

 class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            av: null

        };
        this.setAveTemp = this.setAveTemp.bind(this);
    }
    setAveTemp(aveTemp) {
        this.setState({ av: aveTemp });
    }
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/dailytemp">Weather of the Day</Link>
                </nav>
                <main>
                    <h1>Hello From Mars!</h1>
                        <Switch>
                            <Route path="/" exact={true} render={(routeProps) => (<Home {...routeProps} setAveTemp={this.setAveTemp}/>)}/>
                        <Route path="/dailytemp/" exact={true} render={(routeProps) => (<DailyTemp {...routeProps} />)}/>
                        </Switch>
                </main>
            </div>
        )
    }
}

export default App
