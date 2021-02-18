
import React, { Component } from 'react';
import './HomePage.css';
import Start from './startButton.js';




export default class HomePage extends Component {

    render() {
        return (
            <div className="home">
                 <div className="intro">

                    <div>
                        <img src="https://fontmeme.com/permalink/210126/745a17c33385cded12719c0f8b28a0ae.png" alt="pokemon-font" border="0"/>
                    </div>
                    <div>
                        <img src="https://64.media.tumblr.com/a8afd9ea5f980fff338b3040817df51d/tumblr_n701xqmE3u1rjenv2o1_500.gif" alt="pokemon"/>
                    
                    </div>
                    <div>
                       
                        <Start/>
                    </div>
    
                </div>    

            </div>

        )
    }
}