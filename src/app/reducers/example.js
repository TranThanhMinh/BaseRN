import * as ActionTypes from '../actions/ActionTypes'
import { Keyboard } from 'react-native'

export default function base(state = {}, action) {
  switch (action.type) {
    case ActionTypes.EXAMPLE_PENDING:
    case ActionTypes.EMPLOYEES_PENDING:
      {
        return {
          ...state,
          type: action.type,
          isRequesting: true,
          message: '',
        }
      }

    case ActionTypes.EXAMPLE_FAIL:
    case ActionTypes.EMPLOYEES_FAIL:

      {
        return {
          ...state,
          type: action.type,
          isRequesting: false,
          message: action.message || 'Error',
        }
      }

    case ActionTypes.EXAMPLE_SUCCESS:
    case ActionTypes.EMPLOYEES_SUCCESS:

      {
        return {
          ...state,
          type: action.type,
          data: action.data?.data || action.data,
          isRequesting: false,
          message: '',
          index: new Date().getTime(),
        }
      }
    case ActionTypes.CLEAR:
      {
        return {
          ...state,
          type: action.type,
          message: '',
          index: new Date().getTime(),
        }
      }
    default:
      return state;
  }
}
