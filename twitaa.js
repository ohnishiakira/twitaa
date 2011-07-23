function createTab(url) {
  chrome.tabs.create({url: url});
}

function toTwitAA(aa) {
  var formdata = new FormData();
  var xhr = new XMLHttpRequest();

  formdata.append("asciiart", aa);

  xhr.open("POST", "http://www.twitaa.in/post");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
      createTab(xhr.responseText.match(new RegExp("http://twitaa.in/\\?v=.[^\"]*"))[0]);
    }
  }
  xhr.send(formdata);
}

chrome.contextMenus.create({
  title: "twitaa.in",
  contexts: ["selection"],
  onclick: function(info, tab) {
    console.log("selection text: " + info.selectionText);
    toTwitAA(info.selectionText);
  }
});
