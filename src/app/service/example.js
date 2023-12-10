import { Platform } from 'react-native'
import { Api, NetworkHelper, Languages } from '@common'
import Base from './base';

class Services {
  static login(params) {
    return Base.post(Api.LOGIN, params)
  }
}
export default Services
