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
    if (quota != null) {
      StatsViewer.quota = quota;
    }
    e.json().then(StatsViewer.response);
  },
  response(data) {
    var displayName = data.displayName;
    var level = data.br.level;
    var stats = data.br.stats;
    if (stats.pc) {
      stats = stats.pc;
    } else if (stats.ps4) {
      stats = stats.ps4;
    } else if (stats.xb1) {
      stats = stats.xb1;
    }
    console.log(displayName,level,stats);
  }
};

StatsViewer.init();
