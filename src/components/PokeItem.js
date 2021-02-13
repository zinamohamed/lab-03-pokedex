import React from 'react';

class PokeItem extends React.Component {
  render () {
    return (
      <li className="poke-item">
        <div className="title">
          <h2 className="poke-name">{this.props.PokeItemProp.pokemon}</h2>
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