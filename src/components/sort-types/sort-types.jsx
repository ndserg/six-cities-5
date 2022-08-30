import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {changeSortType} from '../../store/action';
import PropTypes from "prop-types";

const activeClass = ` places__options--opened`;
const selectedClass = ` places__option--active`;

const Sorting = (props) => {
  const {sortTypes, selectedSortType} = props;
  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();

  const typeChangeHandler = (evt) => {
    dispatch(changeSortType({currentSortType: evt.target.dataset.sorttype}));
    setIsShown(false);
  };

  const isActive = isShown ? activeClass : ``;
  const isSelected = (sortType) => {
    return selectedSortType === sortType ? selectedClass : ``;
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onMouseOver={() => setIsShown(true)}
      >
        {sortTypes[selectedSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom` + isActive}
        onMouseLeave={() => setIsShown(false)}
        onClick={(evt) => typeChangeHandler(evt)}
      >
        {Object.keys(sortTypes).map((sortType, id) =>
          <li
            key={sortType + id}
            className={`places__option` + isSelected(sortType)}
            tabIndex="0"
            data-sorttype={sortType}>
            {sortTypes[sortType]}
          </li>
        )}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortTypes: PropTypes.object.isRequired,
  selectedSortType: PropTypes.string.isRequired
};

export default Sorting;
