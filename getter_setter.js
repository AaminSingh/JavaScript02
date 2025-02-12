class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
        return this._email = value
     } 
    get password(){                                       // here if setting the values same as the constructor brings race condition therefore the values should be changed a bit  
        return `${this._password}amin`
    }

    set password(value){
        this._password = value
    }
}

const aamin = new User("aamin@.ai", "hello")
console.log(aamin.password);
console.log(aamin.email);