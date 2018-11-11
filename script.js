// input = document.querySelector "input"
// form = document.querySelector "form"
// indicator = document.querySelector ".indicator"
// loader = document.querySelector ".loader"
// content = input.value

// form.addEventListener "submit", (e) ->
//   e.preventDefault()
//   indicator.setAttribute "data-content", "Saving..."
//   loader.classList.add "full"
//   setTimeout ( 
//     -> 
//       indicator.setAttribute "data-content", "You've been subscribed!"
//       loader.classList.add "done"
//       input.classList.add "full"
//       input.value ""
//   ), 3000

// input.addEventListener "input", ->
//   indicator.setAttribute "data-content", "Now hit enter!"

// balapaCop "Subscribe Form Interaction", "#999"

/* Progress Bar */
// $(function() {
//   $("#progressBar").progressbar({
//     value: 90
//   });
// })


/* 
  TODO: animate easing; something wrong with toggleClass, may need to rely on webkit
*/

function masq() {
  show_loading_screen();
  make_request();

}

function show_loading_screen() {
  // $(".main-text").addClass("hidden", 250, "easeInOutQuad");
  // $(".button").addClass("hidden", 250, "easeInOutQuad");
  // $(".loading").removeClass("hidden", 500, "easeInOutQuad");

  $(".main-text").toggleClass("hidden", 250, "easeOutSine");
  $(".button").toggleClass("hidden", 250, "easeOutSine");
  $(".loading").toggleClass("hidden", 250, "easeOutSine");

  // $(".main-text").switchClass('not-hidden', 'hidden', 250, 'linear');
  // $(".button").switchClass('not-hidden', 'hidden', 250, 'linear');
  // $(".loading").switchClass('hidden', 'not-hidden', 250, 'linear');
}

function make_request() {
  setTimeout(function () {
    $.ajax({
        type: 'get',
        contentType: 'application/json; charset=UTF-8', // TODO: Get format of data from Jonathan
        async: true,
        cache: false,
        retries: 10,
        url: 'server.py', // path to the script that will generate data
        data: "boilerplate",
      })
      .done(function (data) {
        show_request(data);
      })
      .fail(function (error) {
        show_error();
      })
      .always(function () {
        $('.loading').hide();
      });
  }, 3000);
}

function show_request(data) {
  $('.request').toggleClass("hidden", 250, "easeOutSine");
}

function show_error() {
  $('.error').toggleClass("hidden", 250, "easeOutSine");
}