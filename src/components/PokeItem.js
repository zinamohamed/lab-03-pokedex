import React from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends React.Component {
  render () {
    return (
        <li className="poke-item">
          <div className="title">
          <Link 
      to={this.props.PokeItemProp.pokemon}>
            <h2 className="poke-name">{this.props.PokeItemProp.pokemon}</h2>
            </Link>
            <img className="poke-img" src={this.props.PokeItemProp.url_image} alt="animals"/>
          </div>
          <div className ="specs">
            <p className="poke-type">Ability: {this.props.PokeItemProp.ability_1}</p>
            <p className="poke-type">Type: {this.props.PokeItemProp.type_1}</p>
            <p className="poke-shape">Shape: {this.props.PokeItemProp.shape}</p>
          </div>
        </li>
      
    )
  }
}

export default PokeItem;