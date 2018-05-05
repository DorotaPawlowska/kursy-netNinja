
window.onload = function () {

    //ep








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

