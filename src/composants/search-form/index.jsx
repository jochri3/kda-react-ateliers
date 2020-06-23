import React from 'react';

function SearchForm(props) {
  const { mettreAjourProfiles } = props;
  return (
    <div className='ui category search'>
      <div className='ui icon input'>
        <input
          onChange={mettreAjourProfiles}
          className='prompt'
          type='text'
          placeholder='rechercher...'
        />
        <i className='search icon'></i>
      </div>
      <div className='results'></div>
    </div>
  );
}

export default SearchForm;
