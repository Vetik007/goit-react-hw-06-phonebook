// // import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// // Компонент фильтрации контактов
// function Filter({ value, onChangeFilter }) {
//   return (
//     <div className={css.wrapper}>
//       <label className={css.label}>
//         Find contacts by name
//         <input className={css.input} type="text" value={value} onChange={onChangeFilter} />
//       </label>
//     </div>
//   );
// }

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

// export default Filter;

// ==========================================

import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import css from './Filter.module.css';
// import { Wrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
