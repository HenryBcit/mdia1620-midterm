# 🌙 Midterm Evaluation – Sleep Tracking Logic

## 📘 Overview

This midterm focuses on applying console.log, if/else, and basic conditional logic in JavaScript.  
You will build a simple console-based sleep tracker that asks about the user’s rest, reacts to responses, and tracks "rest points" to measure sleep quality.

No arrays, loops, or advanced features are required — only if, else if, and else statements.

---

## 🛠️ Getting Started

1. Clone the activity repository:

```bash
git clone "https://github.com/HenryBcit/mdia1620-midterm.git"
```

2. **Run the prepare file:**

```bash
node prepare.js
```

3. **Find `init.js`:**

- Use `cd` and `ls` repeatedly until you reach the deepest folder.
- Use `ls` to confirm `init.js` is present.

4. **Run the chat:**

```bash
node init.js
```

### Total: 3 points

---

## 🌕 Level 1 – Foundation: Sleep Input & Condition

### Objective

- Use an if statement to give a simple response based on whether the user slept.

### Instructions

1. Look for the function

```bash
function AskInitialQuestion()
```

2. Look for the comment

```bash
/*Write your code below here*/


/*Write your code above here*/
```

3. Read the Task below and think about how you plan to write your logic (DO NOT START YET!)
4. Modify the question to `Did you sleep last night?`
5. Find the comment

```bash
/*
if(logic){
  //write your console.log here
}
*/
```

inside where you are supposed to write the code, and uncomment it. Remove the word `logic` and add in your own `===` statement based on the task below. 6. Add another `if` statement yourself for the other task where the answer is `no`

### Task

- Ask the user: `Did you sleep last night?`
  1. If the user input is `yes`, log: `Wonderful! Let's track your sleep hours`.
  2. If the user input is `no`, log: `No worries. Let's see how we can help`.

### Evaluation Criteria

- Input Handling — Program correctly takes user input (3 pts)
- Conditional Logic — Uses if / else correctly (3 pts)
- Output Clarity — Response message matches user input (3 pts)

### Total: 9 points

---

## 🌜 Level 2 – Describing Sleep Duration

### Objective

- Use multiple conditions (if OR else if OR else) to modify a variable, and report back the status

### Instructions

**Before you start**  Look for the comment `//create your sleepTime variable here.`
Go to the if statement for your `yes` condition in the function
```bash
function AskInitialQuestion()
```
After your console log for the `yes` statement, run `AskSleepDuration()` by typing in 
```bash
if(...){
  console log ...
  AskSleepDuration();
}
```
From this point onward you can modify the `AskSleepDuration()` function.

1. Look for the function

```bash
function AskSleepDuration()
```

2. Look for the comment

```bash
/*Write your code below here*/


/*Write your code above here*/
```

3. Read the Task below and think about how you plan to write your logic (DO NOT START YET!)
4. Modify the question to `Describe how long you slept?`
5. Find the comment

```bash
/*
if(logic){
  //modify the variable and do the console log here
}
*/
```

inside where you are supposed to write the code, and uncomment it. Remove the word `logic` and add in your own `===` statement based on the task below. 
6. Add all other `if` statement yourself for the other task where the answer is `no`

### Task

- Create a variable named `sleepTime` with a default value of 0
- Inside the function `AskSleepDuration()`, ask: `Describe how long you slept?`
- Assign a number value and a log to `sleepTime` based on their response:

| User Input    | sleepTime | Example Console Response                            |
| ------------- | --------- | --------------------------------------------------- |
| "whole night" | 8         | "That’s a full night of rest!"                      |
| "a few hours" | 4         | "Not bad, but try to get a bit more sleep tonight." |
| "not much"    | 2         | "You must be tired — make time to rest."            |
| "barely"      | 1         | "Running on empty! Try to get some deep rest soon." |

- At the end of the function just give a status logging `"We've estimated that you've slept "+ sleepTime +" hours"`.  For example, if it the input was "barely", then the log at the end will say `"We've estimated that you've slept 1 hours". For this part I am looking for you to use your variable as part of your console log.

### Evaluation Criteria

- Conditional Range — Correct use of multiple conditions (3 pts)
- Logical Accuracy — Correctly assigns `sleepTime` (3 pts)
- Prints appropriate feedback (3 pts)

### Total: 9 points

---

## 🌠 Level 3 – Tracking Rest Points

### Objective

- Combine math and logic to simulate tracking "restPoints" and sleep health.

### Instructions

**Before you start** 
Create a restPoints variable and have an initial value of 0. Look for the function `AskSleepDuration()`.

```bash
function AskSleepDuration()
```
After your final console log about the sleepTime, run `TrackSleepStatus()` by typing in 

```bash
console log ... with sleepTime
TrackSleepStatus();
```
From this point onward you can modify the `TrackSleepStatus()` function.

1. Look for the function

```bash
function TrackSleepStatus()
```

2. Look for the comment

```bash
/*Write your code below here*/


/*Write your code above here*/
```

3. Read the Task below and think about how you plan to write your logic (DO NOT START YET!)
4. Modify the question to `How do you want me to help?`
5. Find the comment

```bash
/*
if(logic){

  //run 2nd logic
  if(logic2){
    //do your math here
  }
}
*/
```

inside where you are supposed to write the code, and uncomment it. Remove the word `logic` and add in your own comparison statements based on the task below. 
6. Add all other `if` statement yourself for the other task where the answer is `no`

### Task

- create a variable
- After describing sleep, ask:
  How do you want me to help? (type `exit` to exit)

**Two main options**

1. if the user input is `track`  
   Use the `sleepTime` value to update a global `restPoints` variable:

   - If `sleepTime` is below 2, add 5 `restPoints`
   - If `sleepTime` between 3–5, add 10 `restPoints`
   - If `sleepTime` between 6–8, add 15 `restPoints`

2. `stats`  
   Display the user’s current restPoints:
   - if `restPoints` is below 30, "You’re running low on rest — try to recharge soon."
   - if `restPoints` between 30–70, "You’re in a healthy rest zone."
   - if `restPoints` above 70, "You’re well-rested and balanced!"

3. `restart`
  Ask the inistial question.

### Evaluation Criteria

- Numeric Conversion — Correctly assigns numeric values to `restPoints` (1 pt)
- Conditional Logic — Uses conditions to assign proper  (1 pt)
- Rest Point Tracking — Correctly updates and evaluates `sleepTime` and `restPoints` (1 pt)
- Completion Condition — Logic does what the user inputs (1 pt)

### Total: 4 points

---

🌧️ Bonus Challenge – Sleep Problems

Modify another function `CheckSleepProblems()` that asks:
What happened last night?

This function will only run if you answer `no` from the initial question.

Deduct points and add comments based on keywords:

| Keyword in Input | Effect / Response Example                                  |
| ---------------- | ---------------------------------------------------------- |
| "noise"          | Deduct 5 points – "Try earplugs or white noise next time." |
| "stress"         | Deduct 10 points – "Take a moment to unwind before bed."   |
| "screens"        | Deduct 8 points – "Avoid screens an hour before sleep."    |
| "late work"      | Deduct 6 points – "Try setting a fixed bedtime routine."   |

Once the deduction is applied, return to the initial question.


### Total Points: 26 + Bonus
