$(function() {

  $.ajax({
    url: "https://www.codeschool.com/users/billbo85.json",
    dataType: 'jsonp',
    success: function(response) {
        var courses = response.courses.completed;

        courses.forEach(function(course){
            $badge = $('#badges');

            $div = $('<div>', {'class': 'course'}).appendTo($badge);
            $('<h3>', {'text': course.title}).appendTo($div);
            $('<img>').attr('src', course.badge).appendTo($div);
            $('<a>', { 'class':'btn btn-primary' , 'href': course.url, 'target': '_blank', 'text': 'See course'}).appendTo($div);
        });


    }
  });

});
