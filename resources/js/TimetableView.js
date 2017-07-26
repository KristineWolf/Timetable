/* eslint-env browser */
/* global Timetable */

/*
 * TimetableView
 *
 * Dieses Modul ist für die Darstellung des Stundenplans zuständig.
 * Über eine öffentliche Methoden (render) kann eine Liste an Kursen in dem
 * Stundenplan eingetragen werden.
 *
 * Beim Erzeugen des Moduls wird als Parameter timetableEl eine Referenz 
 * auf das HTML-Element übergeben, in dem der Stundenplan angezeigt werden soll. 
 */

Timetable.TimetableView = function(timetableEl) {
  "use strict";
  var that = {};

  function render(courseList) {
	  var course=courseList[0];
	  for(var i=0; i<course.slots.length; i++){
		  var parentElement=document.querySelector("ul[data-day-of-week='"+course.slots[i].day+"']");
		  var childElement=parentElement.querySelector("li[data-hour-of-day='"+course.slots[i].hour+"']");
		  
		  childElement.classList.add("color-"+course.color);
		  
		  if(i%2==0){
			  childElement.classList.add("course-start");
			  var courseShortTitle= childElement.querySelector(".course-title");
			  courseShortTitle.innerHTML=course.shortTitle;
	
		  }else{
			  childElement.classList.add("course-end");
			  var courseRoom=childElement.querySelector(".course-room");
			  courseRoom.innerHTML=course.slots[i].room;
			  courseRoom.style.position="static";
			  courseRoom.style.lineHeight="15px";
			  courseRoom.style.paddingRight="5px";
			  courseRoom.style.textAlign="right";
		  }
	  }
	  
  }

  that.render = render;
  return that;
};
