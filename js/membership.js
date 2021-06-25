
  ;(function(win, doc, style, timeout) {
    var STYLE_ID = 'at-body-style';
    function getParent() {
      return doc.getElementsByTagName('head')[0];
    }
    function addStyle(parent, id, def) {
      if (!parent) {
        return;
      }
      var style = doc.createElement('style');
      style.id = id;
      style.innerHTML = def;
      parent.appendChild(style);
    }
    function removeStyle(parent, id) {
      if (!parent) {
        return;
      }
      var style = doc.getElementById(id);
      if (!style) {
        return;
      }
      parent.removeChild(style);
    }
    addStyle(getParent(), STYLE_ID, style);
    setTimeout(function() {
      removeStyle(getParent(), STYLE_ID);
    }, timeout);
  }(window, document, "body {opacity: 0 !important}", 3000));
  
try{
    
    var statusCheck = localStorage.getItem("membershipStatus")

    if (!statusCheck || statusCheck=="null" || statusCheck==null || statusCheck=="undefined" || statusCheck==undefined){
        
        Array.prototype.sample = function(){
            return this[Math.floor(Math.random()*this.length)];
        }
        localStorage.setItem("membershipStatus",["Gold", "Silver","Bronze"].sample());  
    }
    
    var adobeDataLayer = adobeDataLayer || [];
    
    adobeDataLayer.push(
        {
            "data":
            {
                "membership":localStorage.getItem("membershipStatus")
            }
        });

    

}catch(e){}
