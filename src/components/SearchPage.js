
import React from 'react'
import Header from './Header';
import pokeData from './pokeData';
import PokeList from './PokeList';

export default class SearcbPage extends React.Component {
    // initalize state //
    state = {
      key: '',
      // initalize state //
    }
  
    


    render () {
        const filteredPokeData = pokeData.filter((PokeList) => {
         
          
           if (!this.state.name) return true;
          
    
          return false;
        });


        
        
        return (
            <div className="search-page">
                <PokeList filteredPokeData={filteredPokeData} />
            </div>
            
                


        )
    }
}