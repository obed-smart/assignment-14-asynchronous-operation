/*
Implement a callback function to multiply two numbers and print the result.
• Step 1: Define a function named multiply -
• Step 2: Make multiply  accept three parameters: two numbers and a callback.
• Step 3: Inside multiply, call the callback with the product of the two numbers.
• Step 4: Define a callback function that logs the result to the console.
*/

// the function that multiply the two Numbers and store th result in a callBack function

function multiply(firstNum, secondNum, callBack) {
  const product = firstNum * secondNum;
  callBack(product);
}

// the callBack function that will log the final result
function logResult(result) {
  console.log(`the result of the multiplication is: ${result}`);
}

multiply(5, 5, logResult);

/*
Chain two Promises to perform two dependent asynchronous operations.

• Step 1: Create two functions that return Promises, with the second depending on the first.
• Step 2: Chain the Promises using -then()
 */

//function that return the username if successful
function fetchUserName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccessful = true;
      if (isSuccessful) {
        const userName = "obedsmart";
        resolve(userName);
      } else {
        reject("failed to fetch the username");
      }
    }, 1000);
  });
}

//function that return all the userdata including the username
function fetchuserData(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        const userData = {
          id: "ob31d9e",
          userName: username,
          age: 20,
          country: "Nigeria",
        };
        resolve(
          `\n\nName: ${userData.userName} \nAge: ${userData.age} \nCountry: ${userData.country}  \nuserId:${userData.id}`
        );
      } else {
        reject(`failed in fetching the user data`);
      }
    }, 2000);
  });
}

//fetching the username first and chaining it in the userdata
fetchUserName()
  .then((name) => {
    return fetchuserData(name); // chaining the both function to sync the usernam
  })
  .then((userData) => {
    console.log(`userData found: 👇👇 ${userData}`);
  })
  .catch((error) => {
    console.error(`Type of error: ${error}`);
  });

/*
  Write an async function that throws an error and handle it with try... catch.
• Step 1: Define an async function.
• Step 2: Use throw to simulate an error within the function.
• Step 3: Wrap the function call in a try... catch block.
• Step 4: Log the error in the catch block.
   */
//function to simulate error
async function simulateAnError() {
  throw new Error("something went wrong when trying to get data");
}

// calling the function
try {
  simulateAnError();
} catch (error) {
  console.error(`type of error: ${error}`);
}

/*
Demonstrate the use of await to pause code execution until a Promise is fulfilled.
• Step 1: Define an async function.
• Step 2: Inside the function, create a Promise that resolves after a delay.
• Step 3: Use await to wait for the Promise to resolve.
• Step 4: Log a message after the await statement.
 */

async function awaitForStatement() {
  //create a Promise
  const newPromise = new Promise((resolve, reject) => {
    // check for its state
    const istrue = true;
    setTimeout(() => {
      if (istrue) {
        resolve(`the Promise has been fulfilled`);
      } else {
        reject(`failed to return the Promise`);
      }
    }, 2000);
  });
  // wait for the Promise for 2s for successfull
  const result = await newPromise;

  //log the result
  console.log(`awaitted message: ${result}`);
}

awaitForStatement();

/*
Implement error handling with -catch) in a Promise chain.
• Step 1: Create a function that returns a Promise, with the chance of rejecting.
• Step 2: Chain -then() to handle the resolved state.
• Step 3: Attach a -catch) to handle any errors and log an error message.
*/

//function that return a Promise
function returnPromise() {
  return new Promise((resolve, reject) => {
    const isSuccessful = false;
    setTimeout(() => {
      if (isSuccessful) {
        resolve(`Promise returned successful`);
      } else {
        reject(`Promise not fulfilled`);
      }
    }, 2000);
  });
}

//chaining it to read the returned message
returnPromise()
  .then((message) => {
    console.log(`message: ${message}`);
  })
  .catch((error) => {
    console.error(`type of error: ${error}`); // catching the error
  });

/*>
Demonstrate an example of callback hell by nesting multiple callbacks.
• Step 1: Define a function that takes a callback and performs an asynchronous action (e.g.,setTimeout )- 
• Step 2: Within this function, create another call to an asynchronous function with another callback.
• Step 3: Repeat the nesting a few times (at least three levels deep).
 */

// the is a function that simulate going to market to buy two items

// the first level function
function firstLevelfunction(callBack) {
  setTimeout(() => {
    console.log("reached the market and ready to buy my item");
    callBack();
  }, 1000);
}

//the second level function
function secondLevelfunction(callBack) {
  setTimeout(() => {
    console.log("found item 1 and payed for it ");
    callBack();
  }, 1000);
}

// the third level function
function thirdLevelfunction(callBack) {
  setTimeout(() => {
    console.log("found item 2 and payed for it");
    callBack();
  }, 1000);
}

firstLevelfunction(() => {
  secondLevelfunction(() => {
    thirdLevelfunction(() => {
      setTimeout(() => {
        console.log("am done buying the item and am going");
      }, 1000);
    });
  });
});

/*
Implement a basic timer with setInterval that stops after 5 seconds.
• Step 1: Define a function that uses setInterval to print the time every second.
• Step 2: Track elapsed time in a variable.
• Step 3: Use clearInterval to stop the timer after 5 seconds.
 */

function countDowntimer() {
  let startTime = 0;

  const timeInterval = setInterval(() => {
    startTime++;
    console.log(`the time will stop in ${startTime} seconds`);

    if (startTime >= 5) {
      clearInterval(timeInterval);
      console.log(`the timer has stop after ${startTime} seconds`);
    }
  }, 1000);
}

countDowntimer();

/*
Use Promise.all) to execute two Promises concurrently and log both results.
• Step 1: Create two functions that return Promises with different delays.
• Step 2: Use Promise.all) with the two functions.
• Step 3: Log the results once both Promises have resolved.
 */

function userData1() {
  return new Promise((resolve,reject) => {
    let isSuccessful = true;
    setTimeout(() => {
      if (isSuccessful) {
        resolve("successfully fetched user Data 1");
      } else {
        reject("failed to fetch user data 1");
      }
    }, 1000);
  });
}

function userData2() {
  return new Promise((resolve, reject) => {
    let isSuccessful = true;
    setTimeout(() => {
      if (isSuccessful) {
        resolve("successfully fetched user Data 2");
      } else {
        reject("failed to fetch user data 2");
      }
    }, 1000);
  });
}

Promise.all([userData1(), userData2()])
  .then((responds) => {
      console.log("Both Promise has been fulfilled:", responds);
  })
  .catch((error) => {
    console.error(`type of error: ${error}`);
  });

/*
1. Write a function using setTimeout that prints "Hello" after 2 seconds.
• Step 1: Define a function named printHello.
• Step 2: Inside the function, use setTimeout.
• Step 3: Set the delay to 2000 milliseconds (2 seconds).
• Step 4: Within setTimeout, log "Hello" to the console.
 */

function printHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 2000);
}

printHello()

/*
Show how to handle an error in a Promise-based function with - catch() -
• Step 1: Create a function that returns a Promise with potential rejection.
• Step 2: Call the function and chain a -catch) to handle any errors.
• Step 3: Log the error message within -catch)
 */

function checkError() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let isSuccessful = false
      if (isSuccessful) {
        resolve("successful")
      }else{
      reject("failed to fulfill the Promise")
      }
    }, 1000);
  })
}

checkError()
.then(responds =>{
  console.log("successful:", responds)
})
.catch(error=>{
  console.error("type of error:",error);
  
})

