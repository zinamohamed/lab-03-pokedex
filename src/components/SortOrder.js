
import React, { Component } from 'react'

export default class SortOrder extends Component {
    render() {
        return (
            <div>
                <select 
                className="poke-sort"  
                onChange={this.props.handleSortOrder}
                value={this.props.sortOrder}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                </select>

            </div>
        )
    }
}