
import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                        <select className="poke-sort"  onChange={this.props.handleSortBy}>
                            <option value="pokemon">Name</option>
                            <option value="ability_1">Ability</option>
                            <option value="type_1">Type</option>
                            <option value="shape">Shape</option>
                        </select>
                  
               
                        <select className="poke-sort"  onChange={this.props.handleSortOrder}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>

            </div>
        )
    }
}