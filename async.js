
window.onload = function () {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if(http.readyState === 4 && http.status === 200){
            // console.log(JSON.parse(http.response));
        }
    };

    http.open("GET", "tweets.json", true); // false !!! nie nie nie
    http.send();

// ----------------------------------------------------------------------------
    // jQuery wersja
    $.get("tweets.json", function (data) {
        console.log(data);
    });

    console.log("test");

};






/*
* ready states
*
* 0 req not initialized
* 1 req has been set up
* 2 req has been sent
* 3 req is in process
* 4 req is complete
*
* */