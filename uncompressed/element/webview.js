"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    var unread = 0
    const notificationBadge = document.getElementsByClassName("mx_NotificationBadge_count")[0]
    if (notificationBadge != undefined) {
      unread = parseInt(notificationBadge.innerText, 10)
    }
    Franz.setBadge(unread);
  };

  Franz.loop(getMessages);
};