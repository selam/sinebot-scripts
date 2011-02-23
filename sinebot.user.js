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

  var connection = document.getElementById('subtitle-connections');

  var liForbtJunkie = document.createElement('Li');
  var aForbtJunkie = document.createElement('a');
  aForbtJunkie.href = "http://btjunkie.org/search?q=" + movieName;
  aForbtJunkie.innerHTML = "btjunkie.com Sayfası";
  aForbtJunkie.target = "_blank";
  liForbtJunkie.appendChild(aForbtJunkie);


  var liForIsoHunt = document.createElement('Li');
  var aForIsoHunt = document.createElement('a');
  aForIsoHunt.href = "http://isohunt.com/torrents/search?q=" + movieName;
  aForIsoHunt.innerHTML = "isohunt.com Sayfası";
  aForIsoHunt.target = "_blank";
  liForIsoHunt.appendChild(aForIsoHunt);

  document.getElementById('subtitle-connections').appendChild(liForbtJunkie);
  document.getElementById('subtitle-connections').appendChild(liForIsoHunt);
}

})();
