import {
  Languages,
  Logging,
  Alert,
  Global,
  Constants,
  NetworkHelper,
} from "@common";
import { Linking } from "react-native";

export default class Base {
  static handleConnection(resolve, reject, callback) {
    if (global.isConnected) {
      callback();
    } else {
      setTimeout(() => {
        reject(Languages.get("system.no.internet.connection"));
      }, 1000);
      // Alert('', Languages.get('system.no.internet.connection'))
    }
  }

  static handleResponse(resolve, reject, response, params) {
    if (response.status == 201 && response.data) {
      Logging.log("response");
      Logging.log(response);
      Logging.log("response");
      Alert(
        "",
        response.data.update_msg,
        Languages.get("system.dialog.update"),
        () => {
          Linking.openURL(response.data.store_url);
        }
      );
     
      reject(response.data.message);
    } else if (response.status == 401) {
      Logging.log("response");
      Logging.log(response);
      Logging.log("response");
      Alert(
        "",
        Languages.get("system.verifytoken.fail.message"),
        Languages.get("system.verifytoken.fail.quit"),
        () => {
          if (global.user && global.echo) {
            global.echo.private(`${Constants.SocketChannel}${global.user.id}`).stopListening(Constants.SocketEvent)
            global.echo = null;
          }
          global.videoBadge = null;
          global.messageBadge = null;
          global.token = null;
          global.user = null;
          global.device = null;
          global.updateUser(global.user);
          Global.EventEmitter.emit(Constants.Event.ChangeScreen, Constants.Screen.Home);
          Global.EventEmitter.emit(Constants.Event.ReceiveVideoBadge, {
            badge: 0,
          });
          Global.EventEmitter.emit(Constants.Event.ReceiveMessageBadge, {
            badge: 0,
          });
        }
      );
    }

    if (response.status != 200 && response.data && response.data.message) {
      Logging.log("response");
      Logging.log(response);
      Logging.log("response");
      reject({ request: params, message: response.data.message });
    } else if (response.status == 200) {
      Logging.log("response");
      Logging.log(response);
      Logging.log("response");
      resolve({ request: params, response });
    } else {
      reject({ request: params, message: Languages.get("system.server.internal.error") });
    }
  }

  static handleTimeout(resolve, reject, params) {
    reject({ request: params, message: Languages.get("system.no.internet.connection") });
  }

  static post(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestPost(api, params, header)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }

  static postFormData(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestPost(api, params, header, true)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }

  static get(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestGet(api, params, header)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }

  static patch(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestPatch(api, params, header)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }

  static delete(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestDelete(api, params, header)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }

  static put(api, params, header) {
    return new Promise((resolve, reject) => {
      this.handleConnection(resolve, reject, () => {
        NetworkHelper.requestPut(api, params, header)
          .then((response) => {
            this.handleResponse(resolve, reject, response, params);
          })
          .catch((error) => {
            this.handleTimeout(resolve, reject, params);
          });
      });
    });
  }
}
