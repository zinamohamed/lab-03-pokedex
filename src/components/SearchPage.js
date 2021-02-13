import React from 'react'
import pokeData from './pokeData';
import PokeList from './PokeList';
import './SearchPage.css';

export default class SearchPage extends React.Component {
    // initalize state //
    state = {
      pokemon: pokeData,
      sortBy: 'pokemon',
      sortOrder:'Ascending',
      filter:'',
    }


    // changing state for all our options to sort/filter the data //
  
    handleSearch = (e) => {
        // this is invoked when the user searches for a poke //
        this.setState({
           filter: e.target.value, 
        });
    }

    handleSortBy = (e) => {
        // this invoked when the user searches for a poke based off category //
        this.setState({
           sortBy: e.target.value, 
        });
    }

    handleSortOrder = (e) => {
        // this invoked when the user sorts order asc/decs//
        this.setState({
           sortOrder: e.target.value, 
        });
    }

    goHome() {
        window.location.href="./"

    }

    

   render () {

    if (this.state.sortOrder === 'Ascending') {
        pokeData.sort(
            (a, b) =>
                a[this.state.sortBy].localeCompare(b[this.state.sortBy])
        );
    } else {
        pokeData.sort(
            (a, b) =>
                b[this.state.sortBy].localeCompare(a[this.state.sortBy])
        );
    }
    
    
    const filteredPokeData = this.state.pokemon.filter(pokemon=> pokemon.pokemon.includes(this.state.filter))

    return (
    
        <div className="search">
            <div className="sidebar-wrapper">
                <div className="side-bar">
                    <div className='dropdown'>
                        <p>Sort By Category:</p>
                        <select className="poke-sort" onChange={this.handleSortBy}>
                            <option value="pokemon">Name</option>
                            <option value="ability_1">Ability</option>
                            <option value="type_1">Type</option>
                            <option value="shape">Shape</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <p>Sort By ↑↓:</p>
                        <select className="poke-sort" onChange={this.handleSortOrder}>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                    </div>
                    <div className="search-bar">
                        <p>Search for your favorite Pokemon!</p>
                        <input type="text" onChange={this.handleSearch} placeholder="Blastoise.."></input>
                    </div>
                    <div>
                        <button onClick={this.goHome}>
                        <img src="https://fontmeme.com/permalink/210213/9eaf7d558186d9f165ec4d9d9da0308f.png" alt="pokemon-font" border="0"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='poke-gallery'>
                <PokeList filteredPokeData={filteredPokeData} />
            </div>
            
        </div>
                


       );
    }
}