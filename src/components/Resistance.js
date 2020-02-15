import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';

function Resistance(props) {
  const handleChangeResistanceT = e => {
    props.changeUserResistanceT(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='ResistanceBox'>
      <form onSubmit={handleOnSubmit}>
        <p>Resistance</p>
        <label style={{ color: props.rTLabel }}>
          R<sub>Total</sub>:
        </label>
        <input
          type='text'
          name='resistanceT'
          value={props.userResistanceT}
          onChange={handleChangeResistanceT}
        />
        <label>&#8486;</label>
        <br></br>
        <label>
          R<sub>1</sub>: {props.resistance1} &#8486;
        </label>
        <br></br>
        <label>
          R<sub>2</sub>: {props.resistance2} &#8486;
        </label>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userResistanceT: state.userResistanceT,
    rTLabel: state.rTLabel,
    resistance1: state.resistance1,
    resistance2: state.resistance2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserResistanceT: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_RESISTANCE_T,
        payload
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resistance);
