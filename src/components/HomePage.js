
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
                        <img src="https://i.pinimg.com/originals/a8/47/f6/a847f6c429074fcd042e0e3c3ef41a70.gif" alt="pokemon"/>
                    
                    </div>
                    <div>
                       
                        <Start/>
                    </div>
    
                </div>    

            </div>

        )
    }
}