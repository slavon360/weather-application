import React, { Fragment } from 'react';
import { shouldUpdate } from 'recompose'
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.scss';

const Modal = ({ show, modalClosed, children }) => (
        <Fragment>
          <Backdrop show={show} clicked={modalClosed}/>
            <div
              style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
              }}
              className={styles.Modal}>
              {children}
            </div>
        </Fragment>
      )

export default shouldUpdate((props, nextProps) => nextProps.show !== props.show || nextProps.children !== props.children)(Modal);
