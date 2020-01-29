import React from 'react';
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
    games.push({ ...inputs });
    this.setState({ games });
  };

  render() {
    return (
      <div>
        <Header onNewGameClick={this.onNewGameClick} />
        <GamesList />
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
