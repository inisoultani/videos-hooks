import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';

class App extends React.Component {
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await Youtube.get('search', {
      params: { q: term, maxResults: 15 },
    });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
