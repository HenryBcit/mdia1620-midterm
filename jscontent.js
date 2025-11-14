module.exports.ac1 = `
// Import the readline module and create an interface for reading input/output from the console
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create your homeworkTime variable here.

/**
 * AskHomeworkDuration()
 * ----------------
 * Function for basic homework tracking.
 * - Asks the user how long they did homework.
 * - Ends the program if the user types "exit".
 * - Gives encouraging responses based on hours of homework.
 */
function AskHomeworkDuration() {
  readline.question('?Question? (type "exit" to exit): ', (input) => {
      
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for tracking your study time!");
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
 * TrackHomeworkStatus()
 * ---------------------
 * Function for advanced homework tracking.
 * - Asks what kind of help the user needs.
 * - Check if the answer is "track"
 * - If it's "track", then check what the homeworkTime is. Add a number to the focusPoints based on the homework time.
 * - Check if the answer is "stats"
 * - If it's "stats", then give a different console log response based on the amount of focusPoints
 */
function TrackHomeworkStatus() {
  readline.question('?Question? ("exit" to exit): ', (input) => {
      
    if (input.toLowerCase() === "exit") {
        console.log("Thanks for tracking your study. Good luck!");
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
 * Starting function for the homework tracker.
 * - Asks if the user did any homework.
 * - Ends if they type "exit".
 * - Check for "yes" or "no"
 * - Leads into AskHomeworkDuration() or CheckHomeworkProblems().
 */
function AskInitialQuestion() {
  readline.question('?Question? (or type "exit" to exit): ', (input) => {
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

// BONUS BELOW, IGNORE BELOW UNLESS YOU ARE DOING THE BONUS

/**
 * CheckHomeworkProblems()
 * ---------------------
 * Function for advanced homework tracking.
 * - Asks "what happened today?" to get the user to respond.
 * - Based on the answer from the user, deduct focusPoints as indicated in README.md
 * - Go back to the AskInitialQuestion()
 */
function CheckHomeworkProblems() {
  readline.question('What happened today? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for tracking your study. Good luck!");
      readline.close();
      return;
    }

    /*Write your code below here*/


    /*Write your code above here*/
  });
}
`