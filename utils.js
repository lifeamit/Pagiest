function saveItem(item) {
  item = JSON.stringify(item);
  var domain = location.hostname;
  save(domain, item);
}

function getItems() {
  var domain = location.hostname;
  return get(domain);
}

function save(key, data) {
  localStorage.setItem(key, data);
}

function get(key) {
  return localStorage.getItem(key);
}
