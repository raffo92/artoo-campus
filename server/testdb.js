console.log('This File contains mongodb exercises! =)');

var mongoose = require("mongoose");
var settings=require('./settings') //app artoo /artoo-mean
mongoose.Promise= require("bluebird");

mongoose.connect (settings.mongoUrl, function (err){
   if(!err) console.log('Connection with the database has been made.');
    else console.log(err);
   
});

//Definisco Schema
var Schema=mongoose.Schema;
//Creo collezione User
var userSchema= new Schema({
    name:String,
    surname: String,
    birthdate: Date,
    updatedAt: Date,
});

//Creo una funzioni da usare nello schema
userSchema.methods.greet= function (name){
    console.log('Hello '+ name+ ' from '+this.name+ '!');//il this è l'user mentre il name è la string in fn.greet()
}
userSchema.methods.sayAge = function(){
    var today = new Date();
    var age = today.getFullYear() - this.birthdate.getFullYear();
    console.log ('I m '+ age +' years old!');
}
//Middlewares
userSchema.pre('save', function(next){
    this.updatedAt= new Date();
    var err;
    if(this.name.length > 2) err=new Error('Fuck off!');
    next(err);
})

//Creo Modello
var User = mongoose.model('User',userSchema);


//Aggiungo Utente
var bob = new User({
    name:'Bob',
    surname: 'Doe',
    birthdate: new Date(1990, 2, 17),
})


//console.log(bob);
//console.log(bob.id)//.id è shortcut per l' _id nel model
// bob.greet('Anna');
// bob.sayAge();


//------BLOCCO SAVE---------------
// //Salvo Utente
bob.save().then(()=>{
  console.log('User Successfully saved');
}).catch((err)=>{
  // throw err; //Mette eccezione sul global (console browser)
    console.error('Error in saving the user: '+ err);
});
//-----------------------------------


//---------BLOCCO READ----------------
// User.find().exec().then((user)=>{ //.exec fa l'esegui della query
//     console.info(user);
//     // user.greet('Raffo');
// })
//------------------------------------


//----------UPDATE con Modifica Js ----------------
// User.findOne({name: 'Jhon Doe'}).exec().then((user)=>{
//     // User.greet('Raffo');
//     user.name = 'John';
//     user.surname= 'Doe';
//     return user.save();
// })
// .then(()=>{
//     console.log('Update successfully!');
// })
// .catch((err)=>{
//     console.log(err);
// })
//------------------------------------------

//---------------Remove---------------
// User.findOne({name: 'Bob'}).exec().then((user)=>{
//     // User.greet('Raffo');
//     return user.remove();
// })
// .then(()=>{
//     console.log('Remove successfully!');
// })
// .catch((err)=>{
//     console.log(err);
// })
// -----------------------------------------





// findOneAndUpdate
// findOneAndRemove

var express= require("express");
var app= express();


app.listen(8080 , function (){
    console.log('My server run!')
})