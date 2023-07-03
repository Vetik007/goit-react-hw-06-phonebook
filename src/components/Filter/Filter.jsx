import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

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
