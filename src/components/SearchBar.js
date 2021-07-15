import React from 'react';

import '../css/SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value.toUpperCase() });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // below code if enabled will causing nasty error telling us to decide the component controlled or uncontrolled
    // controlled input based on : value=this.state.fieldName and onChange = this.setState({fieldName: event.target.value})
    //this.setState({ term: event.target.value });
    console.log(this.state.term);
    this.props.onSearchSubmit(this.state.term);
  };

  onInputClick = (event) => {
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              onChange={this.onInputChange}
              onClick={this.onInputClick}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
