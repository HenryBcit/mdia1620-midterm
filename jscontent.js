module.exports.ac1 = `
// Import the readline module and create an interface for reading input/output from the console
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//create your sleepTime variable here.

/**
 * AskSleepDuration()
 * ----------------
 * Function for basic sleep tracking.
 * - Asks the user how long they slept.
 * - Ends the program if the user types "exit".
 * - Gives encouraging responses based on hours of sleep.
 */
function AskSleepDuration() {
  readline.question('?QUESTION? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for taking care of your rest!");
      readline.close();
      return;
    }

    /*Write your code below here*/
    
    /*
    if(logic){
      //modify the variable and do the console log here
    }
    */
    
    /*Write your code above here*/
  });
}

/**
 * TrackSleepStatus()
 * ---------------------
 * Function for advanced sleep tracking (Level 3 – Math & Logic).
 * - Asks what kind of help the user needs.
 * - Check if the answer is "track"
 * - If it's "track", then check what the sleepTime is. Add a number to the rest points based on the sleep time (see README.md)
 * - Check if the answer is "stats"
 * - If it's "stats", then give a different console log response based on the amount of sleep points
 */
function TrackSleepStatus() {
  readline.question('?QUESTION? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for tracking your rest. Sweet dreams!");
      readline.close();
      return;
    }

    /*Write your code below here*/
    
    /*
    if(logic){

      //run 2nd logic
      if(logic2){
        //do your math here
      }
    }
    */
    
    /*Write your code above here*/
  });
}

/**
 * AskInitialQuestion()
 * ----------------
 * Starting function for the sleep tracker.
 * - Asks if the user got some rest.
 * - Ends if they type "exit".
 * - Check for "yes" or "no"
 * - Leads into AskSleepDuration() or CheckSleepProblems().
 */
function AskInitialQuestion() {
  readline.question('?QUESTION? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("See you next time!");
      readline.close();
      return;
    }

    /*Write your code below here*/

    /*
    if(logic){
      //write your console.log here
    }
    */

    /*Write your code above here*/
    
  });
}

// Start the program
AskInitialQuestion();


//BONUS BELOW, IGNORE BELOW UNLESS YOU ARE DOING THE BONUS

/**
 * CheckSleepProblems()
 * ---------------------
 * Function for advanced sleep tracking.
 * - Asks "what happened last night?" to get the user to respond.
 * - Based on the answer from the user, deduct restPoints as indicated in README.md
 * - Go back to the AskInitialQuestion()
 */
function CheckSleepProblems() {
  readline.question('?QUESTION? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for tracking your rest. Sweet dreams!");
      readline.close();
      return;
    }

    /*Write your code below here*/


    /*Write your code above here*/
  });
}
`