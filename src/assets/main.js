$(function() {
  $.ajax('https://www.codeschool.com/users/3222765.json', {
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
      //console.log('response',response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 >', {
        text:course.title
      }).appendTo($course);

      $('<img >', {
        src:course.badge
      }).appendTo($course);

      $('<a >', {
        href:course.url,
        'class': 'btn btn-primary',
        text: 'See Course',
        target: '_blank'
      }).appendTo($course);
    })


  }
});
