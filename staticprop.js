class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){       // the 'static' keyword restricts the access of the value to others 
      return `123`  
    }
}
   const aamin = new User("aamin")
   // console.log(aamin.createId())


   class Teacher extends User{
    constructor( username, email){
        super(username)
        this.email = email
    }
   }

   const Iphone = new Teacher("iphone","i@phone.com ")
   Iphone.logMe()
   console.log (Iphone.createId( ))

