import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

const SortInput = ({ order, handleChange }) => {
  return (
    <section className='flex-column flex-center mb-1 mt-1'>
      <form>
        <InputLabel id='demo-simple-select-label'>Price</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={order ? 'Descending' : 'Ascending'}
          onChange={handleChange}
          style={{ width: '150px' }}
        >
          <MenuItem value='Ascending'>Ascending</MenuItem>
          <MenuItem value='Descending'>Descending</MenuItem>
        </Select>
      </form>
    </section>
  );
};

export default SortInput;
