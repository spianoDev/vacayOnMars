import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"

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
                </nav>
                <main>
                    <h1>Hello Mars!</h1>
                        <Switch>
                            <Route path="/" render={(routeProps) => (<Home {...routeProps} setAveTemp={this.setAveTemp}/>)}/>
                        </Switch>
                </main>
            </div>
        )
    }
}

export default App
