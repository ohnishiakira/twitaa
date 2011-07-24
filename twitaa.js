function toTwitAA(info) {
  var formdata = new FormData();
  var xhr = new XMLHttpRequest();

  formdata.append("asciiart", info.selectionText);

  xhr.open("POST", "http://www.twitaa.in/post");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == xhr.DONE) {
      chrome.tabs.create({url: xhr.responseText.match(/http:\/\/twitaa.in\/\?v=[^"]*/)[0]});
    }
  }
  xhr.send(formdata);
}

chrome.contextMenus.create({
  title: "twitaa.in",
  contexts: ["selection"],
  onclick: toTwitAA
});
