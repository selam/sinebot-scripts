// ==UserScript==
// @name          torent links for movie page
// @namespace     sinebot
// @icon          http://sinebot.com/favico.ico
// @include       http://sinebot.com/movie/*
// @description   This script adds new links under connections title for torrent search
// @copyright     2011+, Timu Eren <selamtux@gmail.com>
// @license       GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @version       0.0.1
// ==/UserScript==

(function() {

/** yes i know it's ugly, very ugly code, but it's works */

var headerElement = document.querySelector('div[class="feedtitle"] h2');



if(headerElement){
  var movieName = headerElement.innerHTML;

  addLink("http://btjunkie.org/search?q=" + movieName, 'Btjunkie.com Sayfası');
  addLink("http://isohunt.com/torrents/search?q=" + movieName, 'Isohunt.com Sayfası');
}

function addLink(link, text){

  var li = document.createElement('Li');
  var a = document.createElement('a');
  a.href = link;
  a.innerHTML = text;
  a.target = "_blank";
  li.appendChild(a);
  document.getElementById('subtitle-connections').appendChild(li);
}

})();
