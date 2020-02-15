import * as actionTypes from './actionTypes';

const initialState = {
  userCurrent1: '',
  userCurrent2: '',
  userCurrentT: '',
  userVoltage1: '',
  userVoltage2: '',
  userResistanceT: '',
  rTLabel: 'black',
  v1Label: 'black',
  v2Label: 'black',
  i1Label: 'black',
  i2Label: 'black',
  iTLabel: 'black',
  resistance1: '',
  resistance2: '',
  voltageTotal: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_RESISTANCE_T:
      return {
        ...state,
        userResistanceT: action.payload
      };

    case actionTypes.CHANGE_USER_VOLTAGE_1:
      return {
        ...state,
        userVoltage1: action.payload
      };

    case actionTypes.CHANGE_USER_VOLTAGE_2:
      return {
        ...state,
        userVoltage2: action.payload
      };

    case actionTypes.CHANGE_USER_CURRENT_1:
      return {
        ...state,
        userCurrent1: action.payload
      };

    case actionTypes.CHANGE_USER_CURRENT_2:
      return {
        ...state,
        userCurrent2: action.payload
      };

    case actionTypes.CHANGE_USER_CURRENT_T:
      return {
        ...state,
        userCurrentT: action.payload
      };

    case actionTypes.CHANGE_R_T_LABEL:
      return {
        ...state,
        rTLabel: action.payload
      };

    case actionTypes.CHANGE_I_T_LABEL:
      return {
        ...state,
        iTLabel: action.payload
      };

    case actionTypes.CHANGE_V_1_LABEL:
      return {
        ...state,
        v1Label: action.payload
      };

    case actionTypes.CHANGE_V_2_LABEL:
      return {
        ...state,
        v2Label: action.payload
      };

    case actionTypes.CHANGE_I_1_LABEL:
      return {
        ...state,
        i1Label: action.payload
      };

    case actionTypes.CHANGE_I_2_LABEL:
      return {
        ...state,
        i2Label: action.payload
      };

    case actionTypes.CHANGE_RESISTANCE_1:
      return {
        ...state,
        resistance1: action.payload
      };

    case actionTypes.CHANGE_RESISTANCE_2:
      return {
        ...state,
        resistance2: action.payload
      };

    case actionTypes.CHANGE_VOLTAGE_T:
      return {
        ...state,
        voltageTotal: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
