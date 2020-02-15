import React from 'react';
import { connect } from 'react-redux';
import Voltage from './components/Voltage';
import Current from './components/Current';
import Resistance from './components/Resistance';
import './App.css';
import Series2 from './Series2.jpg';
import randomNumber from './randomNumbers';
import * as actionTypes from './store/actionTypes';

function App(props) {
  // Circuit Variables
  const resistanceTotal = props.resistance1 + props.resistance2;

  const currentTotal =
    Math.floor((props.voltageTotal / resistanceTotal) * 1000) / 1000;
  const voltageOne = Math.floor(currentTotal * props.resistance1 * 1000) / 1000;
  const voltageTwo = Math.floor(currentTotal * props.resistance2 * 1000) / 1000;

  const checkAnswers = () => {
    // Resistance Total
    if (
      props.userResistanceT > resistanceTotal * 0.95 &&
      props.userResistanceT < resistanceTotal * 1.05
    ) {
      props.changeRTColor('green');
    } else {
      props.changeRTColor('red');
    }

    // Current Total
    if (
      props.userCurrentT > currentTotal * 0.95 &&
      props.userCurrentT < currentTotal * 1.05
    ) {
      props.changeITColor('green');
    } else {
      props.changeITColor('red');
    }

    // Voltage 1
    if (
      props.userVoltage1 > voltageOne * 0.95 &&
      props.userVoltage1 < voltageOne * 1.05
    ) {
      props.changeV1Color('green');
    } else {
      props.changeV1Color('red');
    }
    // Voltage 2
    if (
      props.userVoltage2 > voltageTwo * 0.95 &&
      props.userVoltage2 < voltageTwo * 1.05
    ) {
      props.changeV2Color('green');
    } else {
      props.changeV2Color('red');
    }
    // Current 1
    if (
      props.userCurrent1 > currentTotal * 0.95 &&
      props.userCurrent1 < currentTotal * 1.05
    ) {
      props.changeI1Color('green');
    } else {
      props.changeI1Color('red');
    }
    // Current 2
    if (
      props.userCurrent2 > currentTotal * 0.95 &&
      props.userCurrent2 < currentTotal * 1.05
    ) {
      props.changeI2Color('green');
    } else {
      props.changeI2Color('red');
    }
  };

  const refresh = () => {
    // Reinitialize variables
    props.changeI1Color('black');
    props.changeI2Color('black');
    props.changeITColor('black');
    props.changeRTColor('black');
    props.changeV1Color('black');
    props.changeV2Color('black');
    props.changeResistance1(randomNumber());
    props.changeResistance2(randomNumber());
    props.changeVoltageT(randomNumber());
    props.changeUserCurrent1('');
    props.changeUserCurrent2('');
    props.changeUserCurrentT('');
    props.changeUserVoltage1('');
    props.changeUserVoltage2('');
    props.changeUserResistanceT('');
  };

  return (
    <div className='App'>
      <h1>Circuit example</h1>
      <div className='circuitPicture'>
        <img src={Series2} alt='Series Circuit' />
      </div>
      <div className='ValueDisplay'>
        <Voltage />
        <Current />
        <Resistance />
      </div>
      <p className='warning'>
        Please be careful in your calculations. If you round too much you will
        get the wrong answer.
      </p>
      <div className='buttonBox'>
        <button onClick={checkAnswers}>Check Answers</button>
        <button onClick={refresh}>Start New Problem</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userCurrent1: state.userCurrent1,
    userCurrent2: state.userCurrent2,
    userCurrentT: state.userCurrentT,
    userVoltage1: state.userVoltage1,
    userVoltage2: state.userVoltage2,
    userResistanceT: state.userResistanceT,
    resistance1: state.resistance1,
    resistance2: state.resistance2,
    voltageTotal: state.voltageTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeRTColor: payload => {
      dispatch({ type: actionTypes.CHANGE_R_T_LABEL, payload });
    },
    changeITColor: payload => {
      dispatch({ type: actionTypes.CHANGE_I_T_LABEL, payload });
    },
    changeV1Color: payload => {
      dispatch({ type: actionTypes.CHANGE_V_1_LABEL, payload });
    },
    changeV2Color: payload => {
      dispatch({ type: actionTypes.CHANGE_V_2_LABEL, payload });
    },

    changeI1Color: payload => {
      dispatch({ type: actionTypes.CHANGE_I_1_LABEL, payload });
    },
    changeI2Color: payload => {
      dispatch({ type: actionTypes.CHANGE_I_2_LABEL, payload });
    },

    changeResistance1: payload => {
      dispatch({ type: actionTypes.CHANGE_RESISTANCE_1, payload });
    },

    changeResistance2: payload => {
      dispatch({ type: actionTypes.CHANGE_RESISTANCE_2, payload });
    },

    changeVoltageT: payload => {
      dispatch({ type: actionTypes.CHANGE_VOLTAGE_T, payload });
    },

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
    },
    changeUserResistanceT: payload => {
      dispatch({
        type: actionTypes.CHANGE_USER_RESISTANCE_T,
        payload
      });
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
