"use strict";
// const anchor = document.querySelector('a')!;
// if(anchor){
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'else'; // CANT
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'yoshi';
// invTwo.amount = 150;
// console.log(invoices);
invoices.forEach(function (inv) {
    // inv.client = 'somtehing'; //CANT
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
