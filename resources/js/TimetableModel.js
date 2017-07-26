/* eslint-env browser */
/* global Timetable */

/*
 * Model
 *
 * Dieses Modul bildet den aktuellen Zustand der Anwendung ab. Es verwaltet die Liste der 
 * verfügbaren Kurse und erlaubt das Selektieren bestimmter Kurse. Das Model erlaubt die Rückgabe 
 * einer Liste aller selektierten Kurse. Zusätzlich kann die gespeicherte Kursliste anhand 
 * des Titel-Attributs der jeweiligen Einträge gefiltert und zurückgegeben werden.
 */

Timetable.Model = function() {
  "use strict";
  var that = {},
    courses;

  function setCourseList(list) {
    courses = list;
  }
  /*
   * Diese Methode wurde selbst geschrieben und sucht aus allen Kursen diejenigen raus, die mit der Suchanfrage übereinstimmen.
   */
  function search(query){
	  var result=[];
	  var counter=0;
	  for(let course of courses){
		  if(course.title.toUpperCase().includes(query.toUpperCase())){
			  result[counter]=course;
			  counter++;
		  }
	  }
	  return result;
  }

  that.setCourseList = setCourseList;
  that.search=search;
  return that;
};
