import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Backdrop from '../UI/Backdrop/Backdrop';
import Preloader from '../UI/Preloader/Preloader';
import { setCitiesVisibility } from '../../actions/cities';

import styles from './Layer.module.scss';

export const LayerContext = React.createContext();

class Layer extends PureComponent {
    state = {
        isCitiesListOpen: false,
        closeCitiesList: () => {
            const { showCitiesList, setCitiesVisibility } = this.props;
            if (showCitiesList) setCitiesVisibility(false);
            this.setState({ isCitiesListOpen: false });
        },
        openCitiesList: (event) => {
            event.stopPropagation()
            this.setState((prevState) => ({ isCitiesListOpen: !prevState.isCitiesListOpen }));
        }
    }

    render () {
        const { closeCitiesList } = this.state;
        const { loading } = this.props;
        return (
            <LayerContext.Provider value={this.state}>
                <div
                    className={styles.AppWrapper}
                    onClick={closeCitiesList}
                >
                    {this.props.children}
                    {loading ?
                        <div className={styles.Loading}>
                            <Backdrop show clsName={styles.Backdrop} />
                            <Preloader />
                        </div> :
                        <div />
                    }
                </div>
            </LayerContext.Provider>
        );
    }
}

const mapStateToProps = ({
    appState: { loading },
    cities: { showCitiesList }
}) => ({
    loading,
    showCitiesList
})

const mapDispatchToProps = {
    setCitiesVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(Layer);