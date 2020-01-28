import React from 'react';

const GamesList = () => {
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
            <section className="games"></section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamesList;
