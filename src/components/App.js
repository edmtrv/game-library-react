import React from 'react';
import uniqid from 'uniqid';
import Header from './Header';
import GamesList from './GamesList';
import GameModal from './GameModal';

class App extends React.Component {
  state = { modal: false, games: [] };

  onNewGameClick = () => {
    this.setState({ modal: !this.state.modal });
  };

  onAddGame = inputs => {
    const games = [...this.state.games];
    games.push({ ...inputs, id: uniqid(), hoursPlayed: 0 });
    this.setState({ games });
  };

  onDeleteGame = id => {
    const games = this.state.games.filter(game => game.id !== id);

    this.setState({ games });
  };

  onAddTime = (id, minutes) => {
    const hoursPlayed = +minutes / 60;

    this.setState({
      games: this.state.games.map(game => {
        return game.id === id
          ? Object.assign({}, game, {
              hoursPlayed: game.hoursPlayed + hoursPlayed
            })
          : game;
      })
    });
  };

  render() {
    return (
      <div>
        <Header onNewGameClick={this.onNewGameClick} />
        <GamesList
          onDelete={this.onDeleteGame}
          onAddTime={this.onAddTime}
          games={this.state.games}
        />
        <GameModal
          onSubmit={this.onAddGame}
          modal={this.state.modal}
          toggle={this.onNewGameClick}
        />
      </div>
    );
  }
}

export default App;
