import { connect } from 'react-redux';
import axios from 'axios';
import Weather from '../../components/Weather/Weather';
import withErrorHandler from '../../components/HOC/withErrorHandler';
import { fetchCities, resetResults } from '../../actions/cities';
import { getWeather } from '../../actions/weather';

const mapStateToProps = ({
    cities: {
        citiesList,
        activeCity,
        noResults,
        showCitiesList
    },
    weather: {
        weatherInfo
    }
}) => ({
    citiesList,
    activeCity,
    noResults,
    weatherInfo,
    showCitiesList
});

const mapDispatchToProps = {
    fetchCities,
    resetResults,
    getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Weather, axios))