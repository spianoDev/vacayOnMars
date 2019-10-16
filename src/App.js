import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"

 class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <main>
                    <h1>Hello Mars!</h1>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                </main>
            </div>
        )
    }
}

export default App
