$(document).ready(function(){
  // Images Names
  var url = [
    "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,707,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_SY1000_CR0,0,684,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDIyOTBiZjktYTE0NS00ZGE2LWEzM2YtMzM0MWI2YzIzMGM2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX703_CR0,0,703,999_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDM3MDc3OTk4MF5BMl5BanBnXkFtZTcwMzQ2ODIyNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmQ3N2U5NGMtNjU0MS00YTQzLWE1ZDctZDU5M2M5NTNjOGRmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,706,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,707,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOThkZjMyMGYtMDNjNy00NjcwLTk1NmEtZmQwYTliMmM4YjBhXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_SY1000_SX705_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ5ODMyNTgzOV5BMl5BanBnXkFtZTcwNDM4ODAyNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjM3MzQ0YzEtMzY3My00YjhlLThjYWQtNjY5ZTYwYWRkNjhjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,709,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA5NzkxNTg2MF5BMl5BanBnXkFtZTcwMTA3MjU1Mg@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWFiYjE0NTctZThiZC00NTYxLTllOWQtYmMyYzY4NWZiZDYyXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SY1000_CR0,0,708,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGZkNWQ1ZDQtMjYzNy00NmYxLWEwMDEtNjY2Y2U2ZWEyOGQ5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTcwODI0MzEwOF5BMl5BanBnXkFtZTgwNjkyNTEwMTE@._V1_SY1000_CR0,0,709,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYTkyMTNmY2EtOTZmYi00YWU4LTgxN2UtZWU0NTI0OGFkMWRjXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,696,1000_AL_.jpg"
  ];

  // Consuming Ghibli API
  var request = new XMLHttpRequest();
  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
  request.onload = function(){

     // Accessing JSON data here
     var data = JSON.parse(this.response);
     if(request.status >= 200 && request.status < 400){
      data.forEach(function(movie){

        const timeline = document.createElement('div');
        timeline.setAttribute('class','timeline-item');
        timeline.setAttribute('data-text',movie.title);

        const content = document.createElement('div');
        content.setAttribute('class','timeline__content');

        const year = document.createElement('h2');
        year.setAttribute('class','timeline__content-title');
        year.textContent = movie.release_date;

        const img = document.createElement('img');
        img.setAttribute('class','timeline__img');

        const des = document.createElement('p');
        des.setAttribute('class','timeline__content-desc');
        des.textContent = movie.description;

        // forEach function to loop through the img src array
        var allDiv = document.querySelectorAll('img');
        allDiv.forEach(function(item,i){
        img.setAttribute('src', url[i]);
      });

        $('.timeline').append(timeline);
        timeline.appendChild(content);
        content.appendChild(img);
        content.appendChild(year);
        content.appendChild(des);
        // Call the Scorlling Function
        scorlling();
       });
    }else{
      console.log("Error!");
    }
  }
  request.send();

  // Scolling Page Function
  var scorlling = function(){
   $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
      });
    });
  }
  $("#timeline-1").timeline();
};
// Footer Back Button
$('#backbtn').on('click', function(){
  window.location = "../html/char.html";
  });
});
