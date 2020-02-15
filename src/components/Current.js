import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';

function Current(props) {
  const handleChangeCurrent1 = e => {
    props.changeUserCurrent1(e.target.value);
  };

  const handleChangeCurrent2 = e => {
    props.changeUserCurrent2(e.target.value);
  };

  const handleChangeCurrentT = e => {
    props.changeUserCurrentT(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='CurrentBox'>
      <form onSubmit={handleOnSubmit}>
        <p>Current</p>
        <label style={{ color: props.iTLabel }}>
          I<sub>Total</sub>:
        </label>
        <input
          type='text'
          name='currentT'
          value={props.userCurrentT}
          onChange={handleChangeCurrentT}
        />
        <label>A</label>
        <br></br>
        <label style={{ color: props.i1Label }}>
          I<sub>1</sub>:
        </label>
        <input
          type='text'
          name='current1'
          value={props.userCurrent1}
          onChange={handleChangeCurrent1}
        />
        <label>A</label>
        <br></br>
        <label style={{ color: props.i2Label }}>
          I<sub>2</sub>:
        </label>
        <input
          type='text'
          name='current2'
          value={props.userCurrent2}
          onChange={handleChangeCurrent2}
        />
        <label>A</label>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userCurrent1: state.userCurrent1,
    userCurrent2: state.userCurrent2,
    userCurrentT: state.userCurrentT,
    i1Label: state.i1Label,
    i2Label: state.i2Label,
    iTLabel: state.iTLabel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserCurrent1: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_CURRENT_1,
        payload
      });
    },
    changeUserCurrent2: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_CURRENT_2,
        payload
      });
    },
    changeUserCurrentT: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_CURRENT_T,
        payload
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Current);
