import React from 'react';

class PokeItem extends React.Component {
  render () {
    return (
      <li className="poke-item">
        <h2 className="poke-name">{this.props.PokeItemProp.pokemon}</h2>
        <img className="poke-img" src={this.props.ImageItemProp.url_image} alt="animals"/>
        <p className="poke-data">{this.props.ImageItemProp.attack}</p>
        <p className="poke-type">{this.props.ImageItemProp.type_1}</p>
      </li>
    )
  }
}

export default PokeItem;