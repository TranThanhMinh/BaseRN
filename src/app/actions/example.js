
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