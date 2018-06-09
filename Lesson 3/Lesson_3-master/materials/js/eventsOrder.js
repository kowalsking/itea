
  area.onmousedown = function(e) { this.value += "mousedown\n"; this.scrollTop = this.scrollHeight; };
  area.onmouseup = function(e) { this.value += "mouseup\n"; this.scrollTop = this.scrollHeight; };
  area.onclick = function(e) { this.value += "click\n"; this.scrollTop = this.scrollHeight; };
