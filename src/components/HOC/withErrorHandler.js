import React, { Component, Fragment } from 'react';
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
        this.setState({error:error});
        console.log(error);
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
      return(
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
            &nbsp;Something didn`t work
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}

export default withErrorHandler;
