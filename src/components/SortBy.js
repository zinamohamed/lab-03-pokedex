
import React, { Component } from 'react'

export default class SortBy extends Component {
    render() {
        return (
            <div>
                <select 
                className="poke-sort"  
                onChange={this.props.handleSortBy}
                value={this.props.sortBy}>
                    <option value="pokemon">Pokemon</option>
                    <option value="ability_1">Ability</option>
                    <option value="type_1">Type</option>
                    <option value="shape">Shape</option>
                </select>
                  
               


            </div>
        )
    }
}