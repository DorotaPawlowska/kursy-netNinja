
//ep#22 - Sliding Elements
/*
$(document).ready(function () {

    $(".slide-up").on("click", function () {
       $("#lead-banner").slideToggle(1000, function () {
           alert("ukoNczona");
       });
   });

    // $(".slide-up").on("click", function () {
   //     $("#lead-banner").slideUp(100);
   //
   // });
   //
   // $(".slide-down").on("click", function () {
   //     $("#lead-banner").slideDown(400, function () {
   //         alert("ukoNczone");
   //     });
   // });
});
*/

//ep#21 - Hide and Show Elements
/*
$(document).ready(function () {
    $("img[alt=map]").on("click", function () {
        // $(this).hide(1000).show(1000);
        $("section > h2").toggle(1000);
    });
});

// .fadeIn();
// .fadeOut();
// .fadeTo();

// .hide();
// .show();
// .toggle();
*/

//ep#20 - Fading Elements In & Out
/*
$(document).ready(function () {

    $("section > h2").on("click", function () {
        // $(this).animate({opacity: "0.5"});
        // $(this).fadeOut(2000).fadeIn(500);
        $(this).fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8);
    });
});

// .fadeIn();
// .fadeOut();
// .fadeTo();
*/

//ep#19 - Animations in jQuery
/*
$(document).ready(function () {

    function ukonczona() {
        alert("animacja ukończona");
    }

    $("section > h2").on("click", function () {
        // $(this).css({width: "500px", height: "100px"});
        $(this).animate({width: "500px", height: "100px"}, 1000, "linear", ukonczona);
    });

});
*/

//ep#18 - The Event Object in jQuery
/*
$(document).ready(function () {
    // selektor uniwersalny
    $("*").on("click", function (e) {

        console.log(e.target);
        console.log("type eventu: " + e.type);
        console.log("x: "+ e.pageX);
        console.log("y: "+ e.pageY);
        e.stopPropagation();
    });
});
*/

//ep#17 - Document Ready vs Window Load
/*
// $(document).on("ready", function () {
// $(document).ready(function () {
$(function () {

});

// $(window).on("load", function () {
$(window).load(function () {

});
*/

//ep#16 - Event Helpers
/*
// $("#lead-banner").click(function () {
//     alert('you clicked me');
// });

$("#lead-banner").dblclick(function () {
    alert('you dbl clicked me');
    $("#lead-banner").off("dblclick");
});
*/

//ep#15 - Binding & Unbinding Events
/*
var myLis = $("#points-of-sale li");

myLis.on('click', function (e) {
    e.preventDefault();
    $(this).css({background: "pink"});

    myLis.off('click');
});

// .on();
// .off();
*/

//ep#14 - Adding & Removing Classes
/*
var button = $("#lead-banner a");

button[0].onclick = function () {
    $("#points-of-sale").toggleClass("open");
    return false;
};

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");

// .removeClass();
// .addClass();
// .toggleClass();
*/

//ep#13 - css with jquery
/*
// console.log($("#social-nav").css("position"));
// console.log($("#social-nav").css("top"));
// $("#social-nav").css("top", "-200px").css("left", "100px").css("border", "2px solid red");

// var myObject = {
//     height : "40",
//     speed : "100"
// };

$("#social-nav").css({
    top : "-400px",
    left : "150px",
    opacity : "0.5",
    borderTop : "2px solid red"
});
*/

//ep#12 - changing attributes
/*
// $("#contact img").removeAttr("alt");
// $("#contact img").attr("alt", "location");

console.log($("#contact img").attr("alt"));

// .removeAttr();
// .attr();
*/

//ep#11 - removing content
/*
// $(".button").empty();
$(".button").remove();
// $("#points-of-sale").empty();
$("#contact img").remove();

// .empty();
// .remove();
*/

//ep#10 - wraping
/*
var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function () {
    if(wrapped){
        $("section").unwrap();
        wrapped = false;
        button.text("wrap");
    }else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("unwrap");
    }
};

// przykłady
$("section").wrap("<div>");
$("section").unwrap();
$("section").wrapAll("<div>");

// wrap();
// unwrap();
// wrapAll();
*/

//ep#9 - adding content
/*
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> the big fight live: ham vs cheese!</div>";

// $("#tweets div").append(tweet);
// $("#tweets div").prepend(tweet);
// $("#tweets div p").before(tweet);
// $("#tweets div p").after(tweet);
// $("#tweets div").html(tweet);
$("#tweets div p").text(tweet);

// .append();
// .prepend();
// .before();
// .after();
// .html();
// .text();
*/

//ep#8 - chaining
/*
$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});
*/

//ep#7 - przechodzenie DOM
/*
//next
// $("#contact-methods").next().css({border: "3px solid red"});

//prev
// $("#social-nav").prev().css({border: "3px solid blue"});

//parent + s
// $(".banner-title").parent().css({border: "3px solid pink"});

//children
// $("#social-nav").children().css({border: "3px solid green"});

//find szybciej działa od zapisu w pierwszym $()
// $("#contact").find(".facebook").css({border: "3px solid purple"});

//closest
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});
*/

//ep#6 - filtry
/*
// $("header nav li:first").css({border: "2px solid red"});
// $("header nav li:last").css({border: "2px solid red"});
//
// $("#contact ul:first-child").css({border: "2px solid red"});
// $("#contact ul:last-child").css({border: "2px solid red"});
//
// // liczone od zera !!!
// $("header nav li:even").css({border: "2px solid blue"});
// $("header nav li:odd").css({border: "2px solid yellow"});

// $("section:not('#contact')").css({border: "2px solid green"});

// less then and greater then
// od zera !!!
// $("#social-nav li:lt(3)").css({border: "2px solid blue"});
// $("#social-nav li:gt(2)").css({border: "2px solid blue"});

// $("div[class]").css({border: "2px solid pink"});

// $("img[alt=quote]").css({border: "2px solid purple"});
*/

//ep#5 - selektory
/*
// znacznik
$("h3").css({border: "3px solid blue"});

// klasa
$(".wrapper").css({border: "3px solid red"});

// id
$("#clients").css({border: "3px solid yellow"});
*/
