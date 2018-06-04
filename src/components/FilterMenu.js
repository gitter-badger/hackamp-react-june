import React from 'react';
import PropTypes from 'prop-types';
import {FilterItems} from './FilterItems';

export const FilterMenu = ({selectTab, filters, counter}) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems
          counter={counter}
          filters={filters}
          selectTab={selectTab}
        />
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired
};
