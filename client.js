function log(text) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "http://212.77.128.203:8007/log/send?text=" + text, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
      }
    }
  };
}
console = {
  log: log
};
