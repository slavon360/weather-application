import React from 'react';
import cx from 'classnames';


import styles from './SearchedResults.module.scss';

const SearchedResults = ({ results, activeCity, noResults, getWeather, showCitiesList }) => (
        <div className={cx(styles.SearchedResults, { [styles.Shown]: showCitiesList })}>
            
        </div>
    );

export default SearchedResults;