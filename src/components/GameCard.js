import React from 'react';

const GameCard = ({ game, onDelete }) => {
  return (
    <div className="col-4">
      <article className="card">
        <section className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <h6 className="card-subtitle mb-2">Genre: {game.genre}</h6>
          <h6 className="card-subtitle mb-2">Price: €{game.price}</h6>
          <h6 className="card-subtitle mb-3">
            Hours Played: {game.hoursPlayed.toFixed(2)}
          </h6>
          <p className="card-text">{game.description}</p>
          <div className="d-flex">
            <div className="mr-2">
              <button
                onClick={() => onDelete(game.id)}
                className="btn btn-outline-danger remove-game"
              >
                Remove
              </button>
            </div>
            <div className="mr-1">
              <button className="btn btn-outline-primary add-time">
                Add Time
              </button>
            </div>
            <div className="w-25">
              <label htmlFor="minutes" className="sr-only">
                Minutes Played
              </label>
              <input
                type="number"
                name="minutes"
                className="form-control"
                placeholder="Mins"
              />
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default GameCard;
