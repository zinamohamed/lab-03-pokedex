import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input 
                onChange={this.props.handleSearch} 
                type="text"
                placeholder="Blastoise.."
                
                >
                </input>

            </div>
        )
    }
}