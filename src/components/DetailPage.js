
import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';
import Start from './startButton.js';
import './SearchPage.css';

export default class Detail extends Component {

    state = {
        filteredPokeData: {},
        
    }

    componentDidMount = async () => {
        this.setState({ 
          loading: true 
        });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            filteredPokeData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {
        

        return (
            <div className="detail-wrapper">
                

                    {
                    this.state.loading
                    ? <Spinner />
                    : <div className="detail-card">
                         <li className="poke-item"> 
                          <div className="title"> 
                        
                              <h2 className="poke-name">{this.state.filteredPokeData.pokemon}</h2>
                          
                              <img className="poke-img" src={this.state.filteredPokeData.url_image} alt="animals"/>
                           </div> 
                         <div className ="specs"> 
                          <p className="poke-type">Ability: {this.state.filteredPokeData.ability_1}</p>
                          <p className="poke-type">Type: {this.state.filteredPokeData.type_1}</p>
                          <p className="poke-shape">Shape: {this.state.filteredPokeData.shape}</p>
                        </div> 
                        <Start/>
                       </li> 
                       
                  </div>
                    }
                
               
                
            </div>
        )
    }
}