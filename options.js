function getAAUrl() {
  if (localStorage["aa"] === undefined) return;

  var aaList = JSON.parse(localStorage["aa"]);
  var ul = document.querySelector("ul");

  for (var i = 0, l = aaList["aa"].length; i < l; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.href = aaList["aa"][i];
    a.appendChild(document.createTextNode(aaList["aa"][i]));
    a.target = "_blank";

    li.appendChild(a);
    ul.appendChild(li);
  }
}

window.onload = getAAUrl;
