// ==UserScript==
// @name        Nodesquit Profiler
// @namespace   leone@inventati.org
// @include     http://www.heywhatsthat.com/profiler.html*
// @version     1
// @grant       none
// @require     http://cdn.jsdelivr.net/jquery/2.1.1/jquery.min.js
// ==/UserScript==

if(!window.jQuery) {
  
  console.error('ERR: jQuery not loaded.');
  
} else {
  
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
  
  $(window).load(function(){

    console.log('Starting HWT Path Profiler Commander');

    var na = getUrlVars()["na"];
    var no = getUrlVars()["no"];
    var ma = getUrlVars()["ma"];
    var mo = getUrlVars()["mo"];

    add_point_drv(na, no, null);
    add_point_drv(ma, mo, null);
  
  });
}
