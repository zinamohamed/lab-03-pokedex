import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Detail extends Component {
    render() {
        return (
        <button>
            <NavLink exact activeClassName="selected" to="/search/:pokemonName">
              <img src="https://fontmeme.com/permalink/210213/9eaf7d558186d9f165ec4d9d9da0308f.png" alt="pokemon-font" border="0"/>
            </NavLink>

        </button>
        )
    }
})