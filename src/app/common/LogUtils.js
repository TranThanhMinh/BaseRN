import { Platform } from 'react-native'
function Logging() { };

Logging.writeLog = function (log) {
  if(global.sendLog) {
    return;    
  }
}

Logging.getPath = function (callback) {
}

Logging.clearPath = function (callback) {
}

module.exports = Logging;
