import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './components/SearchPage.js';
import HomePage from './components/HomePage.js';
import DetailPage from './components/DetailPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            component={SearchPage} 
                        />                        
                        <Route 
                            path="/:pokemonName" 
                            exact
                            component={DetailPage} 
                        /> 
                    </Switch>
                </Router>
            </div>
        )
    }
}
