import React from 'react'
import pokeData from './pokeData';
import PokeList from './PokeList';

export default class SearchPage extends React.Component {
    // initalize state //
    state = {
      pokemon: pokeData,
      sortBy: '',
      sortOrder:'',
      filter:'',
    }
  
    handleSearchChange = (e) => {
        this.setState({
           filter: e.target.value, 
        });
    }

   render () {
            
    const filteredPokeData = pokeData.filter(pokemon=> pokemon.pokemon.includes(this.state.filter))

    return (
    
        <div className="search">
            <div className="search-bar">
                <input type="text" onChange={this.handleSearchChange}></input>
            </div>
            <div className='dropdown'>
                <select className="poke-sort">
                    <option value="pokemon">Name</option>
                    <option value="ability_1">Ability</option>
                    <option value="type_1">Type</option>
                    <option value="shape_id">Shape</option>
                </select>
            </div>
            <div className='dropdown'>
                <select className="poke-sort">
                    <option value="ascending">Ascending</option>
                    <option value="descending ">Descending </option>
                </select>
            </div>
            <div className='poke-gallery'>
                <PokeList filteredPokeData={filteredPokeData} />
            </div>
            
        </div>
                


       );
    }
}