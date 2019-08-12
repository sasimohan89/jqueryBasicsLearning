$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);  
  // $(".green-box").fadeOut(2000);
  // //$(".blue-box").fadeIn(2000);
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.3).fadeOut(1000).delay(500).fadeIn(1000);
  // $(".red-box").fadeToggle();
  // $(".red-box").fadeToggle();
  // $(".green-box").fadeOut(1000);
  // $(".green-box").fadeTo(1000, 0.5);
  // $(".green-box").hide(1000);
  // $(".green-box").toggle(1000);
  // $(".green-box").slideUp(2000);
  // $(".green-box").slideDown(1000);
  // $("p").hide();
  // $("p").slideDown(1000);
  // $("p").slideToggle(1000);

  // $(".blue-box").animate({
  //   marginLeft : "+=200px",
  //   "height" : "50px",
  //   opacity : "0",
  //   "width" : "50px",
  //   marginTop : "25px"
  // }, 1000, "linear");
  // $("p").animate({
  //   "font-size" : "+=20px"
  // }, 1000, "linear");
  // $("p").animate({
  //   "font-size" : "-=20px"
  // }, 1000, "linear");

  // $(".green-box").delay(1000).fadeTo(1000, 0, function(){
  //   $(".red-box").fadeTo(1000, 0, function(){
  //     $(".blue-box").fadeTo(1000, 0);
  //   });
  // });

  //$(".lightbox").delay(500).fadeTo(1000, 2);

  // Using css selectors

  // $("p").css("background-color", "rgba(180, 180, 30, 0.8");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input[type='email']").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("h1, p, input").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("p:first").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("li:even").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("input:text").css("background-color", "rgba(180, 180, 30, 0.8");
  //  $("input:radio").css("background-color", "rgba(180, 180, 30, 0.8");

  // jquery methods for traversal

  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("input:password").children().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8");
  // $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8");

  // jQuery methods for filtering

  // $("#list").children("li").filter(":odd").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").filter(function(index) {
  //   return index % 3 === 0;
  // }).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").not(":last").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8");
  // $("li").not(function(index) {
  //   return index % 3 == 1;
  // }).css("background-color", "rgba(180, 180, 30, 0.8");

  // adding elements to dom

  // $("ul ul:first").append("<li>Last item</li>");
  // $("ul ul:last").prepend("<li>Last item</li>");
  // $("ul").prepend("<li>Last item</li>");
  // $("<li>Last item</li>").appendTo("ul ul:last");
  // $("<li>Last item</li>").prependTo("ul ul:last");
  // $("<H4>Sass</H4>").prependTo("#content");
  // $(".red-box").after("<div class='red-box'>Another red box</div>");
  // $(".blue-box").after("<div class='blue-box'>Another blue box</div>");
  // // $(".red-box").after("<div class='red-box'>Another red box</div>");
  // // $(".blue-box").before("<div class='blue-box'>Aher red box</div>");
  // // $(".blue-box").before(function() {
  // //   return "<div class='blue-box'>blue 2</div>";
  // // });
  // $(".blue-box").before($(".red-box")); //One element selected - new element moved
  // $("p").after($("#list")); // Multiple p elements selected - new element cloned and placed for each
  // $(".green-box").after("<div class='green-box'>Another green box</div>");
  
  // replacing DOM elements

  // $("li").replaceWith("<li>Replaced.</li>");
  // $("li").replaceWith(function() {
  //   return "<li>Replaced.</li>"
  // });
  // var firstListItem = $("li:first");
  // var firstListItem = $("<div class='green-box'>More green</div>");
  // $("p:first").replaceWith(firstListItem);
  // $("p").replaceWith(firstListItem);

  // $(".blue-box, .red-box").replaceWith(firstListItem);
  // $(firstListItem).replaceAll(".red-box, .blue-box");

  // removing elements and content

  // $("li").remove();
  // $("form").children().not("input:text, textarea, br").remove();

  // var detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  // $("p:first").empty();
  // $(".blue-box, .green-box, .red-box").empty(); // just removes text completely
  
  // manipulating attributes and properties

  // attr(), prop(), val()

  // var specialLink = $("#special-link");
  // specialLink.attr("title", "google");

  // console.log(specialLink.attr("href"));
  // console.log(specialLink.attr("title"));
  // specialLink.attr("href", "http://www.google.com");

  // var checkbox = $("input:checked");
  // console.log(checkbox.prop("checked"));
  // console.log(checkbox.attr("checked"));

  // var textInput = $("input:text");
  // textInput.val("sass 1");
  // console.log(textInput.val());
  // var rangeInput = $("input[type='range']");
  // console.log(rangeInput.val());

  // creating an image slideshow

  // var galleryImage = $(".gallery").find("img").first();
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ];

  // var i = 0;
  // setInterval(function() {
  //   i = (i + 1) % images.length;  // 0,1,2,0,1,2
  //   galleryImage.fadeOut(function() {
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn();
  //   });
  //   //console.log(galleryImage.attr("src"));
  // }, 2000);
  // $(".gallery").hide();

  // changing css properties with jQuery

  $(".gallery").css("display", 'none');

  var redBox = $(".red-box");
  console.log(redBox.width());
  console.log(redBox.css("width"));
  redBox.css("width", "+=20px");
  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "18px");

  var propertiess = $("p").css(["font-size", "line-height", "color"]);
  console.log(propertiess);
  console.log(propertiess["color"]);

  redBox.css("user-select", function() {
    return "none";
  });  // make it not selectable







});