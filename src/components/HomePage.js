
import React, { Component } from 'react';
import './HomePage.css';




export default class HomePage extends Component {

    startPokedex() {
        window.location.href="./search"

    }
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
                        <button onClick={this.startPokedex}>
                            <img src="https://fontmeme.com/permalink/210213/06dc4a70d15f49072580120c2751988d.png" alt="pokemon-font" border="0"/>
                        </button>
                    </div>
    
                </div>    

            </div>

        )
    }
}