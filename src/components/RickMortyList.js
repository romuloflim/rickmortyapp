import React, { Component } from 'react';

import Pagin from './Pagin'

class RickMortyList extends Component {
    constructor() {
        super();
      
        this.state = {
          character: [],
        }

    }
      
    async componentDidMount() {
        const response = await fetch(`https://rickandmortyapi.com/api/character`) 
        const responseJson = await response.json()
        this.setState({character: responseJson.results})
    }
      
    render() {

        const cards = listCards(this.state.character, 1, 10).map ((item, i) => ( //array.map
            <div className="mdl-cell mdl-cell--3-col">
                <h4>{ item.name }</h4>
                <p>ID: { item.id }</p>
                <p>Species: { item.species }</p>
                <p>Status: { item.status }</p>
            </div>
        ));

        const filtered = this.state.character.filter(filterByName).map ((item,i) => (
            <div className="mdl-cell mdl-cell--3-col">
                <h4>{ item.name }</h4>
                <p>ID: { item.id }</p>
                <p>Species: { item.species }</p>
                <p>Status: { item.status }</p>
            </div>
        ));

        if (this.props.search.length > 0){
            return (
                <Pagin characters={this.state.character.filter(filterByName(this.props.search))} />
            );
        }
    
        return (
                <Pagin characters={this.state.character} />
        );
    }

}

function listCards(array, pageActual, limitItems) {
    let result = [];
    let totalPage = Math.ceil( array.length / limitItems );
    let count = ( pageActual * limitItems ) - limitItems;
    let delimiter = count + limitItems;

    if(pageActual <= totalPage){
        for(let i=count; i<delimiter; i++){
            if(array[i] != null){
                result.push(array[i]);
            }
            count++;
        }
    }

    return result;

};

function filterByName(search) {
    return function filter (obj){
        if('name' in obj && obj.name.toLowerCase().indexOf(search.toLowerCase()) >= 0){
            return true
        }else{
            return false
        }
    }
}

export default RickMortyList;

