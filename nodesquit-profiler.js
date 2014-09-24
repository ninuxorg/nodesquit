// ==UserScript==
// @name        Nodesquit Alpha
// @namespace   leone@inventati.org
// @include     http://map.ninux.org*
// @include     http://www.heywhatsthat.com/profiler.html*
// @version     1
// @grant       none
// @require     http://cdn.jsdelivr.net/jquery/2.1.1/jquery.min.js
// ==/UserScript==

//console.log('Loading Nodesquit - Initializing');

if(!window.jQuery) {
  
  console.error('ERR: jQuery not loaded.');
  
} else {
  
  //console.log('Loading Nodesquit - Defining functions');
  
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
  
  function nodeLatLon(node, json) {
    console.log('Looking for ' + node);
    $.each(json, function(index, value){
      $.each(value, function(index, value){
        if(value.name == node){
          return [value.lat, value.lng];
        }
      });
    });
  }
  
  function genUrl(n, m) {
    
    $.get('http://map.ninux.org/nodes.json', function(data){

      n = nodeLatLon(n, data);
      m = nodeLatLon(m, data);
      
      var hwt = 'http://www.heywhatsthat.com/profiler.html';
      
      return hwt+'?na='+n[0]+'&no='+n[1]+'&ma='+m[0]+'&mo='+m[1];

    }, 'json').fail(function(){
        console.error('Failed to get nodes.json');
      });
    
  }
  
  
  
  //console.log('Loading Nodesquit - Functions loaded');
  
  $(window).load(function(){
 
    //console.log('Loading Nodesquit - Identifying page');
                    
    if(window.location.hostname == "www.heywhatsthat.com") {
    
      console.log('Starting HWT Path Profiler Commander');
    
      var na = parseInt(getUrlVars()["na"]);
      var no = parseInt(getUrlVars()["no"]);
      var ma = parseInt(getUrlVars()["ma"]);
      var mo = parseInt(getUrlVars()["mo"]);
      
      //console.log(na, no, ma, mo);
      
      add_point_drv(na, no, null);
      add_point_drv(ma, mo, null);
          
    } else {
      
    }
    
  });
}
