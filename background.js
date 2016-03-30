var debug = false;
chrome.browserAction.onClicked.addListener(
  function(tab) {
    debug = !debug;
    chrome.browserAction.setTitle({
      title: debug ? 'Debug: ON' : 'Debug: OFF'
    });
    chrome.browserAction.setIcon({
      path: debug ? 'on.ico' : 'off.ico'
    });
    chrome.browserAction.setBadgeText({
      text: debug ? 'ON' : ''
    });
  }
);
