import React from 'react';
import GameCard from './GameCard';

const GamesList = ({ games, onDelete, onAddTime }) => {
  const allGames = games
    .map((game, id) => {
      return (
        <GameCard
          onDelete={onDelete}
          onAddTime={onAddTime}
          key={id}
          game={game}
        />
      );
    })
    .reduce((list, card, count) => {
      let row;
      if (count % 3 === 0) {
        row = [];
        list.push(row);
        row.push(card);
      } else {
        row.push(card);
      }

      return list;
    }, [])
    .map((row, id) => (
      <div key={id} className="row mt-3">
        {row}
      </div>
    ));

  return (
    <div>
      <main className="container">
        <div className="row">
          <header className="col">
            <h2 className="h2">Games</h2>
          </header>
        </div>
        <div className="row">
          <div className="col">
            <section className="games">{allGames}</section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamesList;
