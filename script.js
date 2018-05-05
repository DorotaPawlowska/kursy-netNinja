
window.onload = function () {

    //ep#11 - Generators
    /*
    genWrapper(function* generator() {
        var tweets = yield $.getJSON("tweets.json");
        console.log(tweets);

        var friends = yield $.getJSON("friends.json");
        console.log(friends);

        var videos = yield $.getJSON("videos.json");
        console.log(videos);

    });

    function genWrapper(generator) {

        // set up generator/iterator
        var myGen = generator();

        //create function to handle the yielded value
        function handle(yielded) {
            if(!yielded.done){
                yielded.value.then(function (data) {
                    return handle(myGen.next(data));
                });
            }

        }//end handle

        //return handle func, passing in myGen.next
        return handle(myGen.next());
    }//end genWrapper
    */

    /*
    function* gen() {
        var x = yield "pear"; // JS read code from right to left
        var y = yield "banana";
        var z = yield "apple";

        // yield "pear"; // JS read code from right to left
        // yield "banana";
        // yield "apple";

        // yield console.log("pear"); // JS read code from right to left
        // yield console.log("banana");
        // yield console.log("apple");

        // console.log("all done");
        // return "all done";
        return x+y+z;
    }

    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));
    console.log(myGen.next(3));
    // myGen.next();
    // myGen.next();
    // myGen.next();
    */


    //ep#10 - Sets
    /*
    var ninjas = ["shaun", "ryu", "crystal", "yoshi", "ryu", "yoshi"];

    var refinedNinjas = new Set(ninjas);

    console.log(refinedNinjas);

    ninjas = [...refinedNinjas];

    console.log(ninjas);
    */

    /*
    var names = new Set();

    names.add("Shaun").add("Ryu").add("Crystal").add("Ryu");
    console.log(names.delete("Crystal"));
    console.log(names.has("Ryu"));
    console.log(names.has("Crystal"));

    // names.clear();
    // names.delete("Crystal").delete("Shaun"); // delete nie łaczymy
    console.log(names.size);

    console.log(names);
    */


    //ep#9 - Arrow Functions
    /*
    var ninja = {
        name: "Ryu",
        chop(x){ // new ES6
            // var _this = this; // important !!
            // window.setInterval(function () {
            window.setInterval(() => {
                if(x > 0){
                    console.log(/*_this.name*/ /* this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.chop(5);
    */

    /*
    var ninjaGreeting = name => console.log(`${name} says 
    hiiiya`);
    // var ninjaGreeting = (name) => console.log(`${name} says
    // hiiiya`);

    // var ninjaGreeting = () => console.log("hiiiiiya");

    // var ninjaGreeting = () => {
    //     console.log("hiiiiiya");
    // };

    // var ninjaGreeting = function () {
    //     console.log("hiiiiiya");
    // };

    ninjaGreeting("Mark");
    */


    //ep#8 - Object Literal Enhancements
    /*
    var name = "Crystal";
    var belt = "black";
    var ninja = {
        //new ES6
        name, belt,
        chop(x){
            console.log(`you chopped the enemy ${x} times`);
        }

        //ES5
        // chop: function (x) {
        //     console.log(`you chopped the enemy ${x} times`);
        // }
        // name: name,
        // belt: belt
    };

    console.log(ninja.chop(5));
    console.log(ninja.name);
    console.log(ninja.belt);
    */


    //ep#7 - New String Methods
    /*
    var test = "my name is Ryu";

    console.log(test.includes("name"));
    console.log(test.includes("names"));
    */

    /*
    var youSay = "goodbye";

    if(youSay.startsWith("goodbye")){
        var iSay = "hello";
    }
    console.log(`you say ${youSay}, I say ${iSay}`);
    */

    /*
    var str = "gryyyyy || ";
    var str2 = "goodbye";


    console.log(str2.startsWith("good"));
    console.log(str2.startsWith("bye"));
    console.log(str2.startsWith("bye", 4));

    console.log(str2.endsWith("bye"));
    console.log(str2.endsWith("good"));
    console.log(str2.endsWith("good", str2.length - 3));

    console.log(str.repeat(15));
    */

    /*
    //new string methods
    // repeat();
    // startsWith();
    // endsWith();
    // includes();
    */


    //ep#6 - Template Strings
    /*
    function logNinja(name, age) {
        // console.log("my name is "+name+" and my age is "+age);
        // console.log(`my name is ${name} and my age is ${age}`);
        console.log(`my name is ${name} 
        and my age is ${10+9}`);
    }

    logNinja("Ryu", 24);
    */
    
    /*
    var temp = `hello, my name 
    
    is ...`

    console.log(temp);
    */


    //ep#5 - The Spread Operator
    /*
    var nums = [3,5,7];
    function addNums(a,b,c) {
        console.log(a+b+c);
    }

    addNums(...nums);
    */
    
    /*
    var nums1 = [1, 2, 3];
    var nums2 = [...nums1, 4, 5, 6];

    console.log(nums2);
    */

    /*
    var meats = ["ham", "salami", "bacon"];

    console.log(...meats);
    */


    //ep#4 - Default Parameters
    /*
    function logNinja(name="Ryu", belt="red", age=25) {
        console.log("my name is "+ name +
            " and my belt colour is " + belt +
            " and my age is "+ age);
    }

    logNinja("Shaun", "black", 23)
    */
    
    /*
    function log(num=10) {
        console.log(num);
    }
    log(20);
    */


    //ep#3 - The Let Keyword
    /*
    var items = document.getElementsByTagName("li");

    for(let x = 0; x < items.length; x++){
        items[x].onclick = function () {
            console.log(x);
        }
    }
    // console.log(x);
    */

    /*
    var x = 10;

    if(x > 5){
        let x = 5;
        console.log("inside "+x);
    }

    console.log("outside " + x);
    */


    //ep#2 - Constants
    /*
    const pi = 3.142;

    function calcArea(r) {
        const pi = 10;
        console.log(" powierzchnia okręgu: " + pi*r*r);
    }

    console.log(pi);
    calcArea(5);

    // const pi = 10;
    // console.log(pi);
    */

};
