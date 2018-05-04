
window.onload = function () {

    //ep#3 - Callback Functions
    /*
    function handleError (jqXHR, textStatus, error) {
        console.log(error);
    }
    
    $.ajax({
       type: "GET",
       url:  "tweets.json",
       success: cbTweets,
       error: handleError
    });

    function cbTweets(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url:  "friends.json",
            success: cbFriends,
            error: handleError
        });
    }

    function cbFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url:  "videos.json",
            success: function (data) {
                console.log(data);
            },
            error: handleError
        });
    }
    */

    /*
    function cb(data) {
        console.log(data);
    }

    $.get("tweets.json", cb);

    console.log("test");
    */

    /*
    function callback(t) {
        console.log(t);
    }

    var fruits = ["banana", "apple", "pear"];
    fruits.forEach(callback);

    console.log("test");
    */


    //ep#2 - AJAX Requests
    /*
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

    //
    // ready states
    //
    //  0 req not initialized
    //  1 req has been set up
    //  2 req has been sent
    //  3 req is in process
    //  4 req is complete
    //
    */

};

