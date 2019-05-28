import React, { Component } from 'react';
import axios from 'axios';
import MyModal from '../../components/Modal/MyModal';
import Character from '../../components/Character/Character';

class ShowCharacters extends Component {
  state={
    showModal: false,
    currentCharacter: {
      films: [],
      species: [],
      vehicles: [],
      starships: [],
    },
    characters: []
  }

  apiCall = (url) => {
    axios.get(url)
      .then(resp => {
        const data = resp.data;
        this.setState({ characters: [...this.state.characters, ...data.results] });
        if (data.next !== null) {
          this.apiCall(data.next);
        }
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  componentDidMount() {
    this.apiCall('https://swapi.co/api/people')
  }

  render() {
    return (
        <div>
          <MyModal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
            currentCharacter={this.state.currentCharacter.name}
            height={this.state.currentCharacter.height}
            mass={this.state.currentCharacter.mass}
            hair_color={this.state.currentCharacter.hair_color}
            skin_color={this.state.currentCharacter.skin_color}
            eye_color={this.state.currentCharacter.eye_color}
            birth_year={this.state.currentCharacter.birth_year}
            gender={this.state.currentCharacter.gender}
            homeworld=<div><a href={this.state.currentCharacter.homeworld}>{this.state.currentCharacter.homeworld}</a></div>
            films={this.state.currentCharacter.films.map(film => {
              return (
                <div><a href={film}>{film}</a></div>
              );
            })}
            species={this.state.currentCharacter.species.map(species => {
              return (
                <div><a href={species}>{species}</a></div>
              );
            })}
            vehicles={this.state.currentCharacter.vehicles.map(vehicle => {
              return (
                <div><a href={vehicle}>{vehicle}</a></div>
              );
            })}
            starships={this.state.currentCharacter.starships.map(starship => {
              return (
                <div><a href={starship}>{starship}</a></div>
              );
            })}
            created={this.state.currentCharacter.created}
            edited={this.state.currentCharacter.edited}
            url=<div><a href={this.state.currentCharacter.url}>{this.state.currentCharacter.url}</a></div>
          />
          <div style={{ width: '73%' }}>{this.state.characters.map(character => {
            return (
              <Character
                name={character.name}
                onClick={() => this.setState({ showModal: true, currentCharacter: character })}
              />
            );
            })}
          </div>
        </div>

    )
  }
}

export default ShowCharacters;
