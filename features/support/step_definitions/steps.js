const { Given, When, Then } = require("@cucumber/cucumber")
const {assert} = require("chai")

Given('I have the following books in the store', function (record) {
    this.rec = record.rows()
    console.log(this.rec)
});

When('I search books by author {string}', function (author) {
    console.log(author);
    this.name = author;

  });

Then('I find {int} books', function (num) {
    //console.log(num)
    count = 0;
    for (const row of this.rec) {
       if (row[1] == this.name){
           count += 1;
       }
    }
    console.log(`Number of books found is ${count}`)
    assert.equal(num,count)
});