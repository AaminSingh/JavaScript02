  //let myName  = "aameen      "
  //let myChannel = "tryYoutube    "

  //console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aamin = function(){
    console.log(`aamin is present in all objects`);
}

Array.prototype.heyAamin = function(){
    console.log(`Hitesh says hello`);
}
  //heroPower.aamin()
   //myHeros.aamin()
   //myHeros.heyAamin()
  //heroPower.heyAamin()


  const Teacher = {
    makevideo:true
  }

  const TeachingSupport = {
    isAvailable: false
  }

  const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
  }
 // Teacher.__proto__ = User


  //modern Syntax
 //OBJECT.SETPROTOTYPEOF: Sets the prototype of a specified object o to object proto or null.Returns the object o
  Object.setPrototypeOf(TeachingSupport,Teacher)

  let anotherUserName = "ChaiAurCode   "

  String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
  }

  anotherUserName.trueLength()
  "aamin".trueLength()
  "iceTea".trueLength()