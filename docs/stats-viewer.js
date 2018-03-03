/* stats-viewer.js */

var StatsViewer = {
  init: function() {
    this.key = document.querySelector("#keyinput");
    this.name = document.querySelector("#nameinput");
    this.output = document.querySelector("#outputdiv");
    this.send = document.querySelector("#sendinput");
    
    this.send.addEventListener("click",this.sendListener);
  },
  body: document.body,
  sendListener: function(e) {
    var key = StatsViewer.key.value;
    var name = StatsViewer.name.value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",this.data);
    xhr.open("GET","https://fortnite.y3n.co/v2/player/"+name);
    xhr.setRequestHeader("X-Key",key);
    xhr.send();
  },
  data: function(e) {
    console.log(e);
  }
};

StatsViewer.init();
