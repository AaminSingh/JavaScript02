const user = {
    username: 'Aamina',
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        //console.log(" got user details from database");
       // console.log(`Username: ${this.username}`);
       // console.log(this);
    }}


    //console.log(user.username);
    //console.log(user.getUserDetails());
    //console.log(this);
   

    //CONSTRUCTOR---------------------it gives a new instance
    function User(username, loginCount, isLoggedIn){
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
        this.greeting = function(){
            console.log(`Welcome  ${this.username}`);

        }
        return this
    }
//NEW KEYWORD---------------> 
// whenever a 'new' keyword comes an empty object is created
// a constructor fxn is called cx of 'new' keyword takes all argument and provide to user
// all the argument inject in the 'this' keyword
// and they are finally provided 
     const userOne = new User("aamin",12, true)
     const userTwo = new  User("ChaiAurCode",11,false)
     console.log(userOne) 
     console.log(userTwo) 
     console.log(userOne.constructor)


    //  The instanceof operator tests to see if the prototype property of a constructor appears 
    //  anywhere in the prototype chain of an object. The return value is a boolean value. Its
    //   behavior can be customized with Symbol.hasInstance.