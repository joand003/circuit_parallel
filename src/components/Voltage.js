import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';
import RedX from './RedX';
import GreenCheck from './GreenCheck';

function Voltage(props) {
  const handleChangeVoltage1 = e => {
    props.changeUserVoltage1(e.target.value);
  };

  const handleChangeVoltage2 = e => {
    props.changeUserVoltage2(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='VoltageBox'>
      <form onSubmit={handleOnSubmit}>
        <p>Voltage</p>
        <div className='variableContainer'>
          <div className='correctContainer'>
            <label>
              V<sub>Total</sub>:
            </label>
          </div>
          <div className='answerContainer'>
            <label> {props.voltageTotal} V</label>
          </div>
        </div>
        <div className='variableContainer'>
          <div className='correctContainer'>
            {!props.checkAnswerMode ? (
              ''
            ) : props.isV1Correct ? (
              <GreenCheck />
            ) : (
              <RedX />
            )}
          </div>
          <div className='unitContainer'>
            <label style={{ color: props.v1Label }}>
              V<sub>1</sub>:
            </label>
          </div>
          <div className='answerContainer'>
            <input
              type='text'
              name='voltage1'
              value={props.userVoltage1}
              onChange={handleChangeVoltage1}
            />
            <label>V</label>
          </div>
        </div>
        <div className='variableContainer'>
          <div className='correctContainer'>
            {!props.checkAnswerMode ? (
              ''
            ) : props.isV2Correct ? (
              <GreenCheck />
            ) : (
              <RedX />
            )}
          </div>
          <div className='unitContainer'>
            <label style={{ color: props.v2Label }}>
              V<sub>2</sub>:
            </label>
          </div>
          <div className='answerContainer'>
            <input
              type='text'
              name='voltage2'
              value={props.userVoltage2}
              onChange={handleChangeVoltage2}
            />
            <label>V</label>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userVoltage1: state.userVoltage1,
    userVoltage2: state.userVoltage2,
    v1Label: state.v1Label,
    v2Label: state.v2Label,
    voltageTotal: state.voltageTotal,
    isV1Correct: state.isV1Correct,
    isV2Correct: state.isV2Correct,
    checkAnswerMode: state.checkAnswerMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserVoltage1: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_VOLTAGE_1,
        payload
      });
    },
    changeUserVoltage2: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_VOLTAGE_2,
        payload
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Voltage);
