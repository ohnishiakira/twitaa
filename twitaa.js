function storeAAUrl(aaUrl) {
  var aaList = localStorage["aa"] || "{}";

  if (aaList !== undefined) {
    aaList = JSON.parse(aaList);
  }

  aaList["aa"] = aaList["aa"] || [];
  aaList["aa"].push(aaUrl);

  localStorage["aa"] = JSON.stringify(aaList);
}

function toTwitAA(info) {
  var formdata = new FormData();
  var xhr = new XMLHttpRequest();
  var aaUrl = "";

  formdata.append("asciiart", info.selectionText);

  xhr.open("POST", "http://www.twitaa.in/post");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == xhr.DONE) {
      aaUrl = xhr.responseText.match(/http:\/\/twitaa.in\/\?v=[^"]*/)[0];
      chrome.tabs.create({url: aaUrl});
      storeAAUrl(aaUrl);
    }
  }
  xhr.send(formdata);
}

chrome.contextMenus.create({
  title: "twitaa.in",
  contexts: ["selection"],
  onclick: toTwitAA
});
