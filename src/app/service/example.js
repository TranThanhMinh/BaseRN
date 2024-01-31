import { Platform } from 'react-native'
import { Api, NetworkHelper, Languages } from '@common'
import Base from './base';

class Services {
  static login(params) {
    return Base.post(Api.LOGIN, params)
  }

  static getEmployees(params) {
    return Base.post(Api.Employees, params)
  }

  static getEmployees2(params) {
    return Base.get(Api.Employees, params)
  }
}

export default Services
