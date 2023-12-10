const Api = require("./Api")
import Constants from './Constants'
import Logging from './Logging'
import LogUtils from './LogUtils'
import VersionNumber from 'react-native-version-number';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const default_timeout = 300000;

class NetworkHelper {

  static getDefaultHeader() {
    return {
      'Authorization': `${global.accessToken}`,
      'Accept-Language': global.lang,
      'version': VersionNumber.appVersion,
      'os': Platform.OS,
      'Expires': '0',
    }
  }

  static request(url, options, timeout = default_timeout) {
    console.log({ url, options })
    if (global.customServer) {
      url = url.replace(Api.DOMAIN_API, global.customServer);
    }

    return new Promise((resolve, reject) => {

      Logging.log({
        type: "Request",
        url,
        options,
        timeout,
      });

      if (options.method == "GET") {
        axios.get(url, {
          headers: options.headers,
          timeout,
        }).then(response => {
          resolve(response);
        }).catch((error) => {
          if (error.response && error.response.status != 200) {
            Logging.log(error);
            Logging.log("http--error---");
            Logging.log(JSON.stringify(error));
            Logging.log("http--error---");
          }

          if (error.response) {
            resolve(error.response);
          } else {
            reject();
          }
        });
      } else {
        if (options.method == "PATCH") {
          axios.patch(url, options.body, {
            headers: options.headers,
            timeout,
          }).then(response => {
            // Logging.log("http--response---");
            // Logging.log(response);
            // Logging.log("http--response---");
            resolve(response);
          }).catch((error) => {
            if (error.response) {
              resolve(error.response);
            } else {
              reject(error);
            }
          });
        } else if (options.method == "DELETE") {
          axios.delete(url, {
            headers: options.headers,
            timeout,
            data: options.body,
          }).then(response => {
            // Logging.log("http--response---");
            // Logging.log(response);
            // Logging.log("http--response---");
            resolve(response);
          }).catch((error) => {
            if (error.response) {
              resolve(error.response);
            } else {
              reject(error);
            }
          });
        } else {
          axios.post(url, options.body, {
            headers: options.headers,
            timeout,
          }).then(response => {
            // Logging.log("http--response---");
            // Logging.log(response);
            // Logging.log("http--response---");
            resolve(response);
          }).catch((error) => {
            if (error.response) {
              resolve(error.response);
            } else {
              reject(error);
            }
          });
        }
      }
    });
  }

  static requestPostNoAuthen(url, params, headers = null, formData = false,) {
    if (formData == false) {
      return NetworkHelper.requestHttp('POST', url, params, headers, true)
    } else {
      return NetworkHelper.requestHttpForm('POST', url, params, headers, true)
    }
  }

  static requestPost(url, params, headers = null, formData = false) {
    if (formData == false) {
      return NetworkHelper.requestHttp('POST', url, params, headers)
    } else {
      return NetworkHelper.requestHttpForm('POST', url, params, headers)
    }
  }

  static requestGet(url, headers = null) {
    return NetworkHelper.requestHttp('GET', url, null, headers)
  }

  static requestGetOverWriteConfig(url, headers = null) {
    return NetworkHelper.requestHttpPreferHeader('GET', url, null, headers)
  }

  static requestPut(url, params, headers = null) {
    return NetworkHelper.requestHttp('PUT', url, params, headers)
  }

  static requestPatch(url, params, headers = null) {
    return NetworkHelper.requestHttp('PATCH', url, params, headers)
  }

  static requestDelete(url, params, headers = null) {
    return NetworkHelper.requestHttp('DELETE', url, params, headers)
  }


  static tryRequestAgain(options, url) {
    options.headers.Authorization = 'Bearer ' + global.token;
    return new Promise((resolve, reject) => {
      NetworkHelper.request(url, options)
        .then((response) => {
          if (response.status == 500) {
            reject();
          } else if (response.status != 401) {
            return response;//.json()
          } else {
            reject();
          }
        })
        .then(resolve)
        .catch(reject);
    })
  }

  static refreshTokenThenTry(options, url) {
    let refresh_api = Api.REQUEST_NEW_TOKEN_API + "&refreshToken=" + global.refreshToken
    return new Promise((resolve, reject) => {
      NetworkHelper.request(refresh_api, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...NetworkHelper.getDefaultHeader(),
        }
      }).then(response => {
        if (response.status == 500) {
          reject();
        } else if (response.status != 401) {
          return response;//.json();
        } else {
          reject();
        }
      }).then(response => {
        //update new token and refresh token
        global.token = response.accessToken;
        global.refreshToken = response.refreshToken;
        global.info = response.info;
        global.isTester = response.info.TESTACCOUNT;
        AsyncStorage.multiSet([[Constants.Store.AccessToken, response.accessToken], [Constants.Store.RefreshToken, response.refreshToken], [Constants.Store.Info, JSON.stringify(response.info)]]);
        return NetworkHelper.tryRequestAgain(options, url);
      }).then(resolve).catch(error => {
        reject();
        // AsyncStorage.removeItem(Constants.Store.AccessToken);
        // AsyncStorage.removeItem(Constants.Store.RefreshToken);
        // Global.EventEmitter.emit(Constants.Event.ChangeScreen, Constants.Screen.Login);
      });
    })
  }

  static requestHttp(method, url, params, headers, disableDefautHeader = false) {
    return new Promise((resolve, reject) => {
      var options = disableDefautHeader ? {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        }
      } : {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers,
          ...NetworkHelper.getDefaultHeader(),
        }
      }

      if (params) {
        options.body = JSON.stringify(params)
      }
      // if (headers) {
      //   options.headers = headers
      // }

      // if (__DEV__) {
      //   options.headers.Authorization = 'Bearer hihi' + global.token + 'hihi';
      // }
      NetworkHelper.request(url, options)
        .then((response) => {
          // Alert('',response.status);
          if (response.status == 500) {
            reject();
          } else if (response.status != 401) {
            return response;//.json()
          } else if (response.status == 401) {
            return response;
          } else {
            reject();
          }
        })
        .then(resolve)
        .catch(reject);
    });
  }

  static requestHttpPreferHeader(method, url, params, headers) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...NetworkHelper.getDefaultHeader(),
          ...headers,
        }
      }

      if (params) {
        options.body = JSON.stringify(params)
      }
      // if (headers) {
      //   options.headers = headers
      // }

      // if (__DEV__) {
      //   options.headers.Authorization = 'Bearer hihi' + global.token + 'hihi';
      // }
      NetworkHelper.request(url, options)
        .then((response) => {
          // Alert('',response.status);
          if (response.status == 500) {
            reject();
          } else if (response.status != 401) {
            return response;//.json()
          } else if (response.status == 401) {
            return NetworkHelper.refreshTokenThenTry(options, url);
          } else {
            reject();
          }
        })
        .then(resolve)
        .catch(reject);
    });
  }

  static requestHttpForm(method, url, params, headers) {
    return new Promise((resolve, reject) => {

      var formData = new FormData();
      for (var k in params) {
        formData.append(k, params[k]);
      }

      var options = {
        method,
        headers: {
          'Accept': 'application/json',
          ...headers,
          ...NetworkHelper.getDefaultHeader(),
          'Content-Type': 'multipart/form-data',
          "mimeType": "multipart/form-data",
        },
        body: formData
      }

      // if (headers) {
      //   options.headers = headers
      // }

      // if (__DEV__) {
      //   options.headers.Authorization = 'Bearer hihi' + global.token + 'hihi';
      // }

      NetworkHelper.request(url, options)
        .then((response) => {
          // Alert('',response.status);
          if (response.status == 500) {
            reject();
          } else if (response.status != 401) {
            return response;//.json()
          } else if (response.status == 401) {
            return NetworkHelper.refreshTokenThenTry(options, url);
          } else {
            reject();
          }
        })
        .then(resolve)
        .catch(reject);
    });
  }

  static uploadFileWithProgress(url, filePath, key, fileName, params, onProgress, headers = null) {
    return NetworkHelper.uploadFilesWithProgress(url, [filePath], key, [fileName], params, onProgress, headers)
  }

  static uploadFilesWithProgress(url, files, key, names, params, onProgress, headers = null) {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      files.forEach((file, index) => {
        formData.append(key, { type: "image/jpeg", name: names[index], uri: file })
      })
      for (var k in params) {
        formData.append(k, params[k]);
      }
      var requestHeaders = {
        'Content-Type': 'multipart/form-data',
        ...headers,
        ...NetworkHelper.getDefaultHeader(),
      }

      axios.post(url, formData, {
        headers: requestHeaders,
        onUploadProgress: function (progressEvent) {
          var percentCompleted = progressEvent.loaded / progressEvent.total;
          onProgress(percentCompleted)
        },
      })
        .then(resolve)
        .catch(reject);
    })
  }

  static tryGet(url, headers = null) {
    var options = {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + global.token,
        ...headers
      }
    }

    return fetch(url, options)
  }

  static tryPost(url, body, headers = null) {
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...NetworkHelper.getDefaultHeader(),
        ...headers,
      },
      body
    }
    return NetworkHelper.request(url, options)
  }

  static tryPostForm(url, body, headers = null) {
    var formData = new FormData();
    for (var k in body) {
      formData.append(k, body[k]);
    }
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'form-data',
        ...NetworkHelper.getDefaultHeader(),
        ...headers,
      },
      body: formData
    }
    return NetworkHelper.request(url, options)
  }

}

export default NetworkHelper
