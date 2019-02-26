import React, { Component, Fragment } from 'react';
import _get from 'lodash/get';
import store from '../../store';
import { setLoading } from '../../actions/appState';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component{
    state = {
      error:null
    }
    componentWillMount () {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error:null});
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        store.dispatch(setLoading(false));
        const status = _get(error, 'response.status', null);
        error.message = status === 404 ? 'No such city in our database. Maybe you misspelled it. Please check or try another word.'
        : error.message;
        this.setState({error:error});
      })
    }
    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({error:null})
    }
    render(){
      const { error } = this.state;
      return(
        <Fragment>
          <Modal
            show={error}
            modalClosed={this.errorConfirmedHandler}>
            {error ? error.message : null}
            &nbsp;(Something didn`t work)
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler;
