import React from 'react';

class GameCard extends React.Component {
  state = { minutes: 0 };

  onMinutesChange = e => {
    this.setState({ minutes: e.target.value });
  };

  render() {
    return (
      <div className="col-4">
        <article className="card">
          <section className="card-body">
            <h5 className="card-title">{this.props.game.title}</h5>
            <h6 className="card-subtitle mb-2">
              Genre: {this.props.game.genre}
            </h6>
            <h6 className="card-subtitle mb-2">
              Price: €{this.props.game.price}
            </h6>
            <h6 className="card-subtitle mb-3">
              Hours Played: {this.props.game.hoursPlayed.toFixed(2)}
            </h6>
            <p className="card-text">{this.props.game.description}</p>
            <div className="d-flex">
              <div className="mr-2">
                <button
                  onClick={() => this.props.onDelete(this.props.game.id)}
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
                  onChange={this.onMinutesChange}
                  value={this.state.minutes}
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
  }
}

export default GameCard;
