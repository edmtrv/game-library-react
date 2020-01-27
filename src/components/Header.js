import React from 'react';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark mb-4">
        <span class="navbar-brand h1">Game Library</span>
        <ul class="navbar-nav mr-auto">
          <button
            type="button"
            class="btn btn-outline-success"
            data-toggle="modal"
            data-target="#newGameModal"
          >
            New Game
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
