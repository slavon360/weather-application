import React from 'react';
import cx from 'classnames';
import Result from './Result/Result';


import styles from './SearchedResults.module.scss';

const SearchedResults = ({ results, activeCity, noResults, getWeather, showCitiesList }) => (
        <div className={cx(styles.SearchedResults, { [styles.Shown]: showCitiesList })}>
            {results.map(result => (
                <Result
                    key={result.id}
                    cityName={result.city}
                    country={result.country}
                    region={result.region}
                    checked={result.id === activeCity.id}
                    getWeather={getWeather}
                />
            ))}
        </div>
    );

export default SearchedResults;