import React from 'react';
import Header from './Header';
import GamesList from './GamesList';
import GameModal from './GameModal';

class App extends React.Component {
  state = { modal: false };

  onNewGameClick = () => {
    this.setState({ modal: !this.state.modal });
    console.log(this.state.modal);
  };

  render() {
    return (
      <div>
        <Header onNewGameClick={this.onNewGameClick} />
        <GamesList />
        <GameModal modal={this.state.modal} toggle={this.onNewGameClick} />
      </div>
    );
  }
}

export default App;
