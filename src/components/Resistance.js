import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';
import RedX from './RedX';
import GreenCheck from './GreenCheck';

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
        <div className='variableContainer'>
          <div className='correctContainer'>
            {!props.checkAnswerMode ? (
              ''
            ) : props.isRTCorrect ? (
              <GreenCheck />
            ) : (
              <RedX />
            )}
          </div>
          <div className='unitContainer'>
            <label style={{ color: props.rTLabel }}>
              R<sub>Total</sub>:
            </label>
          </div>
          <div className='answerContainer'>
            <input
              type='text'
              name='resistanceT'
              value={props.userResistanceT}
              onChange={handleChangeResistanceT}
            />
            <label>&#8486;</label>
          </div>
        </div>
        <div className='variableContainer'>
          <div className='correctContainer'></div>
          <div className='unitContainer'>
            <label>
              R<sub>1</sub>:
            </label>
          </div>
          <div className='answerContainer'>
            <label> {props.resistance1} &#8486;</label>
          </div>
        </div>
        <div className='variableContainer'>
          <div className='correctContainer'></div>
          <div className='unitContainer'>
            <label>
              R<sub>2</sub>:{' '}
            </label>
          </div>
          <div className='answerContainer'>
            <label> {props.resistance2} &#8486;</label>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userResistanceT: state.userResistanceT,
    rTLabel: state.rTLabel,
    resistance1: state.resistance1,
    resistance2: state.resistance2,
    isRTCorrect: state.isRTCorrect,
    checkAnswerMode: state.checkAnswerMode
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
