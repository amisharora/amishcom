
//TARGET PREHIDING SNIPPET
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
  //TARGET PREHIDING SNIPPET ENDS


try{
//MEMBERSHIP STATUS CODE
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
//MEMBERSHIP STATUS CODE ENDS

//CROSS DOMAIN PLUGIN
var internalLinkArray = ["vivek-poc.web.app","poc.web.app", "127.0.0.1"];
var primaryDomain = "127.0.0.1:5500";


function crossDomainVisitorIdCheck(c) {
  var visitor = Visitor.getInstance('733A919458CFB88F0A495C6D@AdobeOrg');
    var d, e;
    var f = c['target'] || c['srcElement'];
    if (f['tagName'] === 'A') {
        d = f['getAttribute']('href');
        console.log("1 : "+d);
        e = d['match'](/(?:\w+\.)+\w+/)[0x0];
        console.log("2 : "+e);
        if (!![]) {
          console.log("3 : "+document['location']['host']);
            if (e !== document['location']['host']) {
              console.log("4 : "+document['location']['host']);
                if (visitor['getOptOut']() === 'NONE') {
                    for (x in internalLinkArray) {
                        if (e['indexOf'](internalLinkArray[x]) > -0x1) {
                            if (e['indexOf'](primaryDomain) == -0x1) {
                                d = visitor['appendVisitorIDsTo'](d);
                            }
                            break;
                        }
                    }
               }
            }
            c['preventDefault']();
            window['location'] = d;
        }
    }
}
if (document['addEventListener']) {
    document['addEventListener']('click', crossDomainVisitorIdCheck);
} else if (document['attachEvent']) {
    document['attachEvent']('onclick', crossDomainVisitorIdCheck);
}
//CROSS DOMAIN PLUGIN ENDS

}catch(e){}
