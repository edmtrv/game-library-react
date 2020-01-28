import React from 'react';

const Header = ({ onNewGameClick }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand h1">Game Library</span>
        <ul className="navbar-nav mr-auto">
          <button
            onClick={onNewGameClick}
            type="button"
            className="modal-toggle btn btn-outline-success"
          >
            New Game
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
