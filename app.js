var path = require('path');
var str = path.join(__dirname, '/unnstudents.db');
var mDatabase = require('nedb');
var db = new mDatabase({filename:str, autoload:true});
console.log(str);

class UNNStudent {
    constructor(name, facultet, age) {
        this.name = name;
        this.facultet = facultet;
        this.age = age;
    }
}

// добавление рандомных студентов
for (let i = 0; i < 100; i++) {
    db.insert(new UNNStudent(
        generateStr(16),
        generateStr(7),
        generateInt(17, 24),
    ), function (err, newDoc) {
    })
}

// удаление 
db.remove({ age: 24},  { multi: true }, function(err, newDoc) {
})

// обновление 
db.update({ age: 17 }, { age: 18 }, { multi : true }, function (err, numReplaced) {
});

function generateInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}