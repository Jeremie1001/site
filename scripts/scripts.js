function showname () {
  var name = document.getElementById('fileInput');
  alert('Selected file: ' + name.files.item(0).name);
  alert('Selected file: ' + name.files.item(0).size);
  alert('Selected file: ' + name.files.item(0).type);
};

function currentname () {
  var page = window.location.href;
  var page = page.substr(page.lastIndexOf('/')+1);
  return page
};
