
window.onload = function () {

    //ep#5 - Generators
    /*
    genWrap(function* () {

        var tweets = yield $.get("tweets.json");
        console.log(tweets);

        var friends = yield $.get("friends.json");
        console.log(friends);

        var videos = yield $.get("tweets.json");
        console.log(videos);
    });

    function genWrap(generator) {

        var gen = generator();

        function handle(yielded) {
            if(!yielded.done){
                yielded.value.then(function (data) {
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next());
    }
    */

    /*
    function* gen() {
        var x = yield 10;
        console.log(x);
    }

    var myGen = gen();

    console.log(myGen.next());
    console.log(myGen.next(10));
    */


    //ep#4 - Promises
    /*
    $.get("tweets.json").then(function (tweets) {
        console.log(tweets);
        return $.get("friends.json");
    }).then(function (friends) {
        console.log(friends);
        return $.get("videos.json");
    }).then(function (videos) {
        console.log(videos);
    });
    */

    /*
    function get(url) {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function () {
                if(xhttp.status === 200){
                    resolve(JSON.parse(xhttp.response));
                }else{
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function () {
                reject(xhttp.statusText);
            };
            xhttp.send();
        });
    }

    var promise = get("tweets.json");

    promise.then(function (tweets) {
        console.log(tweets);
        return get("friends.json");
    }).then(function (friends) {
        console.log(friends);
        return get("videos.json");
    }).then(function (videos) {
        console.log(videos);
    }).catch(function (error) {
        console.log(error);
    });
    */


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

