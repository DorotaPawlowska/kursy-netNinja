
window.onload = function () {

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

    //new string methods
    // repeat();
    // startsWith();
    // endsWith();
    // includes();



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

