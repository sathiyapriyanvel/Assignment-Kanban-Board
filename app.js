function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let panel = ev.target.getAttribute("id");
  let size = ev.target.children.length - 1;

  sessionStorage.setItem(panel, size);
  ev.target.children[0].children[0].innerText = sessionStorage.getItem(panel);

  var docs = document.getElementsByClassName("panel");

  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];
    let panel = doc.getAttribute("id");
    let size = doc.children.length - 1;
    sessionStorage.setItem(panel, size);
    doc.children[0].children[0].innerText = sessionStorage.getItem(panel);
  }
}
