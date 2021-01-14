const { timeStamp } = require("console");

const {setWorldConstructor} = require("@cucumber/cucumber")

class Record{
    constructor(){
        this.rec = [];
        this.name = '';
    }
    
    getRow(){
        return this.rec  
    }

}

setWorldConstructor(Record)