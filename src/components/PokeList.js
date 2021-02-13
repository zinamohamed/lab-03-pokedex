import React from 'react';
import PokeItem from './PokeItem';


class PokeList extends React.Component {
    render() {

    return (
      <ul className="poke-list">
        {this.props.filteredPokeData.map(pokemon =>
      <PokeItem
      key={pokemon.key}
      PokeItemProp= {pokemon} />)}
      
      </ul>
    );
  }
}

export default PokeList;