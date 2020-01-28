import React from 'react';
import Header from './Header';
import GamesList from './GamesList';
import GameModal from './GameModal';

class App extends React.Component {
  state = { modal: false };

  onNewGameClick = () => {
    this.setState({ modal: !this.state.modal });
  };

  onAddGame = details => {
    console.log(details);
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
