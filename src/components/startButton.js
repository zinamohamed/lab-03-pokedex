import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Start extends Component {
    render() {
        return (
        <button>
            <NavLink exact activeClassName="selected" to="/search">
            <img src="https://fontmeme.com/permalink/210219/1f8ff8817467b12f5665b7932a869420.png" alt="pokemon-font" border="0"/>
            </NavLink>

        </button>
        )
    }
})