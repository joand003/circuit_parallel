import React from 'react';
import { connect } from 'react-redux';
import Voltage from './components/Voltage';
import Current from './components/Current';
import Resistance from './components/Resistance';
import './App.css';
import Parallel2 from './Parallel2.jpg';
import randomNumber from './randomNumbers';
import * as actionTypes from './store/actionTypes';

function App(props) {
  // Circuit Variables
  const invertedResistances = 1 / props.resistance1 + 1 / props.resistance2;
  const resistanceTotal = 1 / invertedResistances;

  const currentTotal =
    Math.floor((props.voltageTotal / resistanceTotal) * 1000) / 1000;
  const voltageOne = props.voltageTotal;
  const voltageTwo = props.voltageTotal;
  const currentOne =
    Math.floor((props.voltageTotal / props.resistance1) * 1000) / 1000;
  const currentTwo =
    Math.floor((props.voltageTotal / props.resistance2) * 1000) / 1000;

  const checkAnswers = () => {
    props.changeAnswerMode(true);
    let totalCorrect = 0;
    // Resistance Total
    if (
      props.userResistanceT > resistanceTotal * 0.95 &&
      props.userResistanceT < resistanceTotal * 1.05
    ) {
      props.changeRTColor('green');
      totalCorrect++;
      props.changeIsRTCorrect(true);
    } else {
      props.changeRTColor('red');
      props.changeIsRTCorrect(false);
    }

    // Current Total
    if (
      props.userCurrentT > currentTotal * 0.95 &&
      props.userCurrentT < currentTotal * 1.05
    ) {
      props.changeITColor('green');
      totalCorrect++;
      props.changeIsITCorrect(true);
    } else {
      props.changeITColor('red');
      props.changeIsITCorrect(false);
    }

    // Voltage 1
    if (
      props.userVoltage1 > voltageOne * 0.95 &&
      props.userVoltage1 < voltageOne * 1.05
    ) {
      props.changeV1Color('green');
      totalCorrect++;
      props.changeIsV1Correct(true);
    } else {
      props.changeV1Color('red');
      props.changeIsV1Correct(false);
    }
    // Voltage 2
    if (
      props.userVoltage2 > voltageTwo * 0.95 &&
      props.userVoltage2 < voltageTwo * 1.05
    ) {
      props.changeV2Color('green');
      totalCorrect++;
      props.changeIsV2Correct(true);
    } else {
      props.changeV2Color('red');
      props.changeIsV2Correct(false);
    }
    // Current 1
    if (
      props.userCurrent1 > currentOne * 0.95 &&
      props.userCurrent1 < currentOne * 1.05
    ) {
      props.changeI1Color('green');
      totalCorrect++;
      props.changeIsI1Correct(true);
    } else {
      props.changeI1Color('red');
      props.changeIsI1Correct(false);
    }
    // Current 2
    if (
      props.userCurrent2 > currentTwo * 0.95 &&
      props.userCurrent2 < currentTwo * 1.05
    ) {
      props.changeI2Color('green');
      totalCorrect++;
      props.changeIsI2Correct(true);
    } else {
      props.changeI2Color('red');
      props.changeIsI2Correct(false);
    }
    props.changeNumberCorrect(totalCorrect);
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
    props.changeAnswerMode(false);
    props.changeNumberCorrect(0);
    props.changeIsShowAnswers(false);
  };

  const showAnswers = () => {
    props.changeIsShowAnswers(true);
  };

  // const checkIfAnswersShowing = () => {
  //   if (props.isShowAnswers === true) {
  //     return '';
  //   } else {
  //     return <button onClick={checkAnswers}>Check Answers</button>;
  //   }
  // };

  return (
    <div className='App'>
      <h1>Circuit example</h1>
      <div className='circuitPicture'>
        <img src={Parallel2} alt='Parallel Circuit' />
      </div>
      <div className='ValueDisplay'>
        <Voltage />
        <Current />
        <Resistance />
      </div>
      <p className='warning'>
        Please be careful in your calculations.
        <br></br>If you round too much you will get the wrong answer.
      </p>
      <div className='buttonBox'>
        {props.checkAnswerMode === true ? (
          <button onClick={showAnswers}>Show Answers</button>
        ) : (
          ''
        )}

        {props.voltageTotal === '' ? (
          ''
        ) : (
          <button onClick={checkAnswers}>Check Answers</button>
        )}
        <button onClick={refresh}>Start New Problem</button>
      </div>
      <div className='results'>
        {props.checkAnswerMode === true ? (
          <p>You got {props.numberCorrect} out of 6 correct.</p>
        ) : (
          ''
        )}
        {props.isShowAnswers === true ? (
          <div>
            <p>
              V<sub>1</sub>: {voltageOne}
            </p>
            <p>
              V<sub>2</sub>: {voltageTwo}
            </p>
            <p>
              I<sub>Total</sub>: {currentTotal}
            </p>
            <p>
              I<sub>1</sub>: {currentOne}
            </p>
            <p>
              I<sub>2</sub>: {currentTwo}
            </p>
            <p>
              R<sub>Total</sub>: {resistanceTotal}
            </p>
          </div>
        ) : (
          ''
        )}
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
    voltageTotal: state.voltageTotal,
    checkAnswerMode: state.checkAnswerMode,
    numberCorrect: state.numberCorrect,
    isV1Correct: state.isV1Correct,
    isV2Correct: state.isV2Correct,
    isITCorrect: state.isITCorrect,
    isI1Correct: state.isI1Correct,
    isI2Correct: state.isI2Correct,
    isRTCorrect: state.isRTCorrect,
    isShowAnswers: state.isShowAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeIsShowAnswers: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_SHOW_ANSWERS, payload });
    },

    changeIsV1Correct: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_V_1_CORRECT, payload });
    },

    changeIsV2Correct: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_V_2_CORRECT, payload });
    },

    changeIsITCorrect: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_I_T_CORRECT, payload });
    },

    changeIsI1Correct: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_I_1_CORRECT, payload });
    },

    changeIsI2Correct: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_I_2_CORRECT, payload });
    },

    changeIsRTCorrect: payload => {
      dispatch({ type: actionTypes.CHANGE_IS_R_T_CORRECT, payload });
    },

    changeNumberCorrect: payload => {
      dispatch({ type: actionTypes.CHANGE_NUMBER_CORRECT, payload });
    },
    changeAnswerMode: payload => {
      dispatch({ type: actionTypes.CHANGE_CHECK_ANSWER_MODE, payload });
    },
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
