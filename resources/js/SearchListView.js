
/* eslint-env browser */
/* global Timetable */

/*
 * SearchListView
 *
 * Dieses Modul ist für die Darstellung der Suchergebnisse verantwortlich.
 * Über zwei öffentliche Methoden kann 1) eine Liste an Kursen in der Ergebnissliste
 * dargestellt werden (renderList) und 2) die aktuell angezeigte Ergebnisliste 
 * geleert werden (clearList).
 *
 * Beim Erzeugen des Moduls wird als Parameter resultEl eine Referenz 
 * auf das HTML-Element übergeben, in dem die Ergebnisliste angezeigt werden soll. 
 */

Timetable.SearchListView = function(resultEl) {
  "use strict";
  var that = {};

  function clearList() {
	  var listElements= document.querySelectorAll(".course-search-result-entry");
	  for(let e of listElements){
		  resultEl.removeChild(e);
	  }
  }

  function renderList(list) {
	  for(let e of list){
		  var listElement=document.createElement("li");
		  listElement.classList.add("course-search-result-entry");
		  listElement.appendChild(document.createTextNode(e.title));
		  resultEl.appendChild(listElement);
	  }
  }

  that.clearList = clearList;
  that.renderList = renderList;
  return that;
};
