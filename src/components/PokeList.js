import React from 'react';
import PokeItem from './ImageItem';


class ImageList extends React.Component {
    render() {

    return (
      <ul className="poke-list">
        {this.props.pokeData.map(PokeImage =>
      <PokeItem
      key={PokeImage.pokemon}
      ImageItemProp= {PokeImage} />)}
      
      </ul>
    );
  }
}

export default ImageList;