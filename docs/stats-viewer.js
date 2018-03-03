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
    var key = this.key.value;
    var name = this.name.value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://fortnite.y3n.co/v2/player/"+name);
    xhr.addEventListener("load",this.data);
    xhr.send();
  },
  data: function(e) {
    console.log(e);
  }
};

StatsViewer.init();
