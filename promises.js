  ///////----------PROMISE----------------////////
  //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  /*A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises,
   this guide will explain consumption of returned promises before explaining how to create them.*/
  
 
/*  A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/
  
//Promise.resolve():
//Creates a new Promise object that is resolved with the provided value or a resolved Promise
//object if the provided value is already a Promise.
  
//Promise.reject():
//Creates a new Promise object that is rejected with the provided reason.
//Useful for creating a rejected Promise object explicitly to signify failure or error conditions. 
  
  const promiseOne = new Promise(function(resolve, reject){
//Do the async task
// DB calls,cryptography, network

 setTimeout(function(){
    console.log('Async task is completed');
    resolve();                   // it connects the async task with the promise consumed 
 },1000)
  })

  promiseOne.then(function(){                  // then directly connects the promise with the resolve.....
    console.log("Promise consumed");
  })


  new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
  }).then(function(){
    console.log("Async 2 resolved");
  })



  const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"Chai",email :"chai@example.com"})
    },1000)
  })


  promiseThree.then(function(user){                           // the parameters passed in resolve is passed in these functions 
    console.log(user);
  })


 
  const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Aryan",password :"2428"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
  })

  promiseFour
  .then((user)=>{
    console.log(user);
    return user.username
  })
  .then((username) =>{                            // the value in the function returned in the abouve one passes to the next then
    console.log(username);
  })
  .catch(function(error){
    console.log(error);                               // this section is for getting the error in the function
  }).finally(() => console.log(" the promise either resolved or rejected")) // this act as a default whther the promise is sucessful or not 




  const promiseFive  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password :"2008"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
  })
  
  //---------Async Syntax-------//
 // The keyword async before a function makes the function return a promise:

 //--------await---------//
 
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


   async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
   
    } catch (error) {
        console.log(error)
    }
   }





   consumePromiseFive ()
   async function  getAllUsers(){
      try {
         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
           const data = await response.json()                                             // the response also takes time to convert the code 
           console.log(data)   
      } catch (error) {
        console.log('E:',error)
      }
   }
   getAllUsers()


   //USING TRY CATCH METHOD
 fetch(' https://jsonplaceholder.typicode.com/users')             
  .then((response) =>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error) => console.log(error))


  //FETCH API
 /* The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.

Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and
 is integrated with features of the modern web such as service workers and Cross-Origin Resource Sharing (CORS).

With the Fetch API, you make a request by calling fetch(), which is available as a global function in both window
 and worker contexts. You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response.
 You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.*/

/* The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so
  we also check the response status and throw if it is not OK.*/
