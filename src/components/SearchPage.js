import React from 'react'
// import pokeData from './pokeData';
import PokeList from './PokeList';
import './SearchPage.css';
import Home from './homeButton.js';
import Spinner from './Spinner.js';
import request from 'superagent';
import Sort from './sort';
import Searchbar from './Searchbar';

export default class SearchPage extends React.Component {
    // initalize state //
    state = {
      filteredPokeData: [],
      sortBy: 'pokemon',
      sortOrder:'asc',
      query:'',
      loading: false,
    }

    

    loadPoke = async () => {
        this.setState({ 
            loading: true 
        });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`)

        this.setState({
            filteredPokeData: data.body.results,
            loading: false,
        });
    }

    componentDidMount = async () => {
        await this.loadPoke();
    }


    handleSearch = async (e) => {
        this.setState({
          query: e.target.value,
          
        })
        await this.loadPoke()
      }

      handleSortBy = async (e) => {
        this.setState({
          sortBy: e.target.value
        })
        await this.loadPoke()
      }
      
      handleSortOrder = async (e) => {
        this.setState({
         sortOrder: e.target.value
       })
       await this.loadPoke()
     }
   
    

  




    

   render () {

    // if (this.state.sortOrder === 'Ascending') {
    //      this.state.pokemon.sort(
    //          (a, b) =>
    //              a[this.state.sortBy].localeCompare(b[this.state.sortBy])
    //      );
    //  } 
    //  if (this.state.sortOrder === 'Descending') {
    //      this.state.pokemon.sort(
    //          (a, b) =>
    //              b[this.state.sortBy].localeCompare(a[this.state.sortBy])
    //      );
    //  }
    
    
    // const filteredPokeData = this.state.pokemons.filter(pokemon=> pokemon.pokemon.includes(this.state.query))

    return (
    
        <div className="search">
            <div className="sidebar-wrapper">
                <div className="side-bar">
                    
                    <Searchbar 
                    handleSearch={this.handleSearch}
                    />
                    
                    <Sort handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} />
                    
                   
                    
                    <div>
                        <Home/>
                    </div>
                
                </div>
            </div>
                
            <div className='poke-gallery'> 
                {
                this.state.loading
                ? <Spinner />
                : <PokeList filteredPokeData={this.state.filteredPokeData} />

                 }
            </div>
               
            
            
        </div>


       );
    }
   }