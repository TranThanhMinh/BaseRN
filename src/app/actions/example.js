
import { result } from 'lodash'
import { ExampleService } from '../service'
import * as ActionTypye from './ActionTypes'

export const login = param => {
    const list = [{ 'name': 'Tran' }, { 'name': 'Tran' }]
    const { user, pass } = param
    return (dispatch) => {
        if (user == 'demo' && pass == '123456')
            dispatch({ type: ActionTypye.EXAMPLE_SUCCESS, data: list })
        else dispatch({ type: ActionTypye.EXAMPLE_FAIL, data: 'Error' })
    }
}

export const handleLogin = param => {
    return (dispatch) => {
        ExampleService.login(param).then(data => {
            if (data.result == 'success')
                dispatch({ type: ActionTypye.EXAMPLE_SUCCESS, data })
            else dispatch({ type: ActionTypye.EXAMPLE_FAIL, data })
        })

    }
}

export const getEmployees = param => {
    return (dispatch) => {
        ExampleService.getEmployees(param).then(data => {
            console.log('getEmployees',result)
        })

    }
}

