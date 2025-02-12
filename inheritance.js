class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
    
    class Teacher extends User{
        constructor(username, email, password){
            super(username);
            this.email = email;
            this.password = password
        }

        addCourse(){
            console.log(`A new course was added to ${this.username}`)
        }
    }
    const chai = new Teacher("chai", "chai@teacher.com","1234")
    chai.addCourse()
    chai.logMe()
    const masalaChai = new User("masalaChai")

    //masalaChai.addCourse()     // it doesn't have the access to the function 
    masalaChai.logMe()
    console.log(chai === masalaChai);
    console.log(chai instanceof Teacher);

      