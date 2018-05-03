
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
