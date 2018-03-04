/* stats-viewer.js */

var StatsViewer = {
  init: function() {
    this.key = document.querySelector("#keyinput");
    this.name = document.querySelector("#nameinput");
    this.output = document.querySelector("#outputdiv");
    this.send = document.querySelector("#sendinput");
    
    this.send.addEventListener("click",this.sendListener);
  },
  quota: 2000,
  body: document.body,
  sendListener: function(e) {
    var key = StatsViewer.key.value;
    var name = StatsViewer.name.value;
    var request = new Request("https://fortnite.y3n.co/v2/player/"+name,{headers:{"X-Key":key}});
    fetch(request).then(StatsViewer.data);
  },
  data: function(e) {
    var quota = e.headers.get("X-DayQuotaLeft");
    console.log(quota);
    e.then(function(e) {console.log(e)});
  }
};

StatsViewer.init();
