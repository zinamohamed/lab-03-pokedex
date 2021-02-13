import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Start extends Component {
    render() {
        return (
        <button>
            <NavLink exact activeClassName="selected" to="/search">
                <img src="https://fontmeme.com/permalink/210213/06dc4a70d15f49072580120c2751988d.png" alt="pokemon-font" border="0"/>
            </NavLink>

        </button>
        )
    }
})