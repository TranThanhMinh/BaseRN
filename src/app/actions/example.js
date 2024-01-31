
import { result } from 'lodash'
import { ExampleService } from '../service'
import * as ActionTypye from './ActionTypes'

export const login = param => {
    const list = [{ 'name': 'Tran' }, { 'name': 'Tran' }]
    const { user, pass } = param
    return (dispatch) => {
        dispatch({ type: ActionTypye.EXAMPLE_PENDING})
        if (user == 'demo' && pass == '123456')
            dispatch({ type: ActionTypye.EXAMPLE_SUCCESS, data: list })
        else dispatch({ type: ActionTypye.EXAMPLE_FAIL, data: 'Error' })
    }
}

export const handleLogin = param => {
    return (dispatch) => {
        dispatch({ type: ActionTypye.EXAMPLE_PENDING})
        ExampleService.login(param).then(data => {
            if (data.result == 'success')
                dispatch({ type: ActionTypye.EXAMPLE_SUCCESS, data })
            else dispatch({ type: ActionTypye.EXAMPLE_FAIL, data })
        })

    }
}

export const getEmployees = param => {
    return (dispatch) => {
        dispatch({ type: ActionTypye.EMPLOYEES_PENDING})
        ExampleService.getEmployees2(param).then(data => {
            if (data.response.data.status == 'success'){
            dispatch({ type: ActionTypye.EMPLOYEES_SUCCESS, data})
         //   console.log('getEmployees',JSON.stringify(data.response.data.data))
            }
            else    dispatch({ type: ActionTypye.EMPLOYEES_FAIL, data})
           // console.log('getEmployees',JSON.stringify(data.response.data.data))
        })

    }
}

