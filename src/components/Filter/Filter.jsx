import React from 'react';
// import PropTypes from 'prop-types';
// import { CssForm } from 'components';

import { useSelector, useDispatch } from 'react-redux';

import { setfilter } from 'redux/store';

import TextField from '@mui/material/TextField';

export function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.value);

  const handleChangeFiltr = e => dispatch(setfilter(e.currentTarget.value));

  return (
    <div className="filter">
      {/* <CssForm.Label>
        <span>Find contacts by name</span>
        <input type="text" value={filter} onChange={handleChangeFiltr}></input>
      </CssForm.Label> */}

      <TextField
        fullWidth
        type="text"
        value={filter}
        onChange={handleChangeFiltr}
        variant="outlined"
        label="Find contacts by name"
      ></TextField>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleChangeFiltrContacts: PropTypes.func.isRequired,
// };
