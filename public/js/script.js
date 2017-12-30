$(function(){
  var btn = $('#btn-note');
  var inpbox = $('#inpbox');
  var list = $('#list');

  function refresh(notes){
      inpbox.val("");
      let listdata = "";
      notes.forEach(function(note){
        listdata += "<td width='20%' cellspacing='20'>" + note.task + "<br><br></td>";
      });
      list.html(listdata);
  }

  btn.click(function(){
    $.post("/notes",{task: inpbox.val(), done: false}, refresh);
    count = count + 1;
  })
  $.get('/notes', refresh);
})



angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
  function ($scope) {
    $scope.navigations = [
            {
              title: "View Notes",
              iconClass: "fa fa-sticky-note-o",
              uiSref: "ViewNotes",
              uiSrefOptions: { someKey: 'SomeValue' }
            },
            {
              title: "Share",
              iconClass : "fa fa-share-alt  ",
              uiSref: "dolor",
              children: [
              {
                title: "Slack"

              },
              {
                title: "Gitter"
              }
              ]
            },
            {
              title: "JBoss Community Notes",
              iconClass : "fa fa-space-shuttle",
              uiSref: "ipsum",
              children: [
              {
                title: "Google Code-In "

              },
              {
                title: "Google Summer Of Code"
              }
              ]
            },
            {
              title: "Contact Us",
              iconClass : "fa fa-phone"
            },
            {
              title: "Reminders",
              iconClass: "fa fa-bell-o",
              uiSref: "Reminders"
            }
          ];

  }
]);