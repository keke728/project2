$(document).ready(function(){
  // Images Names
  var url = [
    "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE3NzY5ODQwMV5BMl5BanBnXkFtZTcwNzY1NzcxNw@@._V1_.jpg",
    "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/340/2024/12/26120915/Aufa4YdZIv4AXpR9rznwVA5SEfd-scaled.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_SY1000_CR0,0,684,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDIyOTBiZjktYTE0NS00ZGE2LWEzM2YtMzM0MWI2YzIzMGM2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX703_CR0,0,703,999_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDM3MDc3OTk4MF5BMl5BanBnXkFtZTcwMzQ2ODIyNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmQ3N2U5NGMtNjU0MS00YTQzLWE1ZDctZDU5M2M5NTNjOGRmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,706,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,707,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOThkZjMyMGYtMDNjNy00NjcwLTk1NmEtZmQwYTliMmM4YjBhXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_SY1000_SX705_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ5ODMyNTgzOV5BMl5BanBnXkFtZTcwNDM4ODAyNw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", 
    "https://m.media-amazon.com/images/M/MV5BMmI0OWI1OGEtM2Y5Zi00MWViLWE5ZjctMDNlNGE1OWJiZTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA5NzkxNTg2MF5BMl5BanBnXkFtZTcwMTA3MjU1Mg@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWVjMWRhMzYtOGRmMi00ODExLTk2M2YtZDhjNGY5OWQ5NDY4XkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTcwODI0MzEwOF5BMl5BanBnXkFtZTgwNjkyNTEwMTE@._V1_SY1000_CR0,0,709,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjAyODkxNjUxNl5BMl5BanBnXkFtZTgwMjEzMDMzNTE@._V1_.jpg",
    "https://i.ebayimg.com/images/g/rRAAAOSw2gxYrWd4/s-l1200.jpg",
    "https://m.media-amazon.com/images/M/MV5BYTllMGZjNzItMTcxNi00MjIwLThjNDktYmRkNTA5Mjk4NDQ5XkEyXkFqcGc@._V1_.jpg"
  ];

  // define plugin once
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };

    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
    );

    var itemLength = selectors.item.length;

    $(window).off("scroll.timeline").on("scroll.timeline", function () {
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        var min = $(this).offset().top;
        var max = $(this).height() + $(this).offset().top;

        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" + $(this).find(selectors.img).attr("src") + ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };

  var request = new XMLHttpRequest();
  request.open("GET", "https://ghibliapi.vercel.app/films", true);

  request.onload = function () {
    if (request.status < 200 || request.status >= 400) {
      console.log("Error loading films:", request.status);
      return;
    }

    var data = JSON.parse(this.response);

    data.forEach(function (movie, i) {
      const timeline = document.createElement("div");
      timeline.setAttribute("class", "timeline-item");
      timeline.setAttribute("data-text", movie.title);

      const content = document.createElement("div");
      content.setAttribute("class", "timeline__content");

      const year = document.createElement("h2");
      year.setAttribute("class", "timeline__content-title");
      year.textContent = movie.release_date;

      const img = document.createElement("img");
      img.setAttribute("class", "timeline__img");
      img.setAttribute("src", url[i % url.length]); // ✅ fixed

      const des = document.createElement("p");
      des.setAttribute("class", "timeline__content-desc");
      des.textContent = movie.description;

      $(".timeline").append(timeline);
      timeline.appendChild(content);
      content.appendChild(img);
      content.appendChild(year);
      content.appendChild(des);
    });

    // init once after items exist
    $("#timeline-1").timeline();
  };

  request.send();

  $("#backbtn").on("click", function () {
    window.location = "../html/char.html";
  });
});

