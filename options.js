function getAAList() {
  if (localStorage["aa"] === undefined) return;

  return JSON.parse(localStorage["aa"])["aa"];
}

function showAAList() {
  var aaList = getAAList();
  var ul = document.querySelector("ul");

  for (var i = 0, l = aaList.length; i < l; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.href = aaList[i];
    a.target = "_blank";
    a.appendChild(document.createTextNode(aaList[i]));

    li.appendChild(a);
    ul.appendChild(li);
  }
}

window.onload = showAAList;
