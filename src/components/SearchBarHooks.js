import React, { useState } from 'react';

const SearchBarHooks = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    //this.setState({ term: event.target.value.toUpperCase() });
    setTerm(event.target.value.toUpperCase());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // below code if enabled will causing nasty error telling us to decide the component controlled or uncontrolled
    // controlled input based on : value=this.state.fieldName and onChange = this.setState({fieldName: event.target.value})
    //this.setState({ term: event.target.value });
    console.log(term);
    onSearchSubmit(term);
  };

  const onInputClick = (event) => {
    setTerm('');
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Videos from Youtube</label>
          <input
            type="text"
            onChange={onInputChange}
            onClick={onInputClick}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBarHooks;
