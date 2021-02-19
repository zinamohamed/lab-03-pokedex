import React, { Component } from 'react';


export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img className="spinner-img" src="https://media4.giphy.com/media/W2LPUUdHkPFNLaWwPZ/giphy.gif" alt="loading-img" />
            </div>
        )
    }
}