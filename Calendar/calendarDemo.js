/**
 * calendarDemoApp - 0.1.3
 */
angular.module('calendarDemoApp', ['ui.calendar', 'ui.bootstrap']);

function CalendarCtrl($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.clickedRide = '';
    $scope.Itinerary='';

    /* event source that pulls from google.com */
    $scope.eventSource = {
            color: '#000',
            textColor: '#fff',
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Denver' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events =[
      // {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Portland',description: "Goes far",start: new Date(y, m, 1 - 0),end: new Date(y, m, 6 - 0)},
      {title: 'Denver',start: new Date(y, m, 23 - 0),end: new Date(y, m, 28 - 0)},
      {title: 'San Francisco',start: new Date(y, 7, 15 - 0),end: new Date(y, 7, 22 - 0)},
      // {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      // {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      // {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://yahoo.com/'}//Page link
    ];

    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [];
      // var events = [{title: '' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };


    /*Calendar Option with external links*/
    // $scope.calEventsExt = {
    //    color: '#f00',
    //    textColor: 'yellow',
    //    events: [ 
    //       {type:'party',title: 'Portland',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Denver',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://yahoo.com/'}
    //     ]
    // };


    /* alert on eventClick */
    $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
        $scope.alertMessage = (event.title + ' trip');
        $scope.city=(event.title)
        $scope.alertDescription = (event.description)
        $scope.clickedRide = event.title;
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + dayDelta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      calendar.fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(calendar){
        calendar.fullCalendar('render');
      }
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
}



