# Midterm Evaluation – Homework Duration Tracker

## Overview

This midterm focuses on applying `console.log`, `if/else`, and basic conditional logic in JavaScript.  
You will build a simple console-based homework tracker that asks about the user’s homework completion, reacts to responses, and tracks "focus points" to measure study quality.

No arrays, loops, or advanced features are required — only if, else if, and else statements.

---

## Getting Started

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

4. **Run the Tracker:**

```bash
node init.js
```

### Total: 3 points

---

## Level 1 – Foundation: Homework Input & Condition

### Objective

- Use an if statement to give a simple response based on whether the user did their homework.

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
4. Modify the question to `Did you do your homework last night?`
5. Find the comment

```bash
/*
if(logic){
  //write your console.log here
}
*/
```

inside where you are supposed to write the code, and uncomment it. Remove the word `logic` and add in your own `===` statement based on the task below.  
6. Add another `if` statement yourself for the other task where the answer is `no`

### Task

- Ask the user: `Did you do your homework last night?`
  1. If the user input is `yes`, log: `Great! Let's track how long you studied.`
  2. If the user input is `no`, log: `No worries. Let's see how we can help.`

### Evaluation Criteria

- Input Handling — Program correctly takes user input (3 pts)
- Conditional Logic — Uses if / else correctly (3 pts)
- Output Clarity — Response message matches user input (3 pts)

### Total: 9 points

---

## Level 2 – Describing Homework Duration

### Objective

- Use conditions (ifs) to modify a variable, and report back the status

### Instructions

**Before you start**  Look for the comment `//create your homeworkTime variable here.`
Go to the if statement for your `yes` condition in the function
```bash
function AskInitialQuestion()
```
After your console log for the `yes` statement, run `AskHomeworkDuration()` by typing in 
```bash
if(...){
  console log ...
  AskHomeworkDuration();
}
```
From this point onward you can modify the `AskHomeworkDuration()` function.

1. Look for the function

```bash
function AskHomeworkDuration()
```

2. Look for the comment

```bash
/*Write your code below here*/


/*Write your code above here*/
```

3. Read the Task below and think about how you plan to write your logic (DO NOT START YET!)
4. Modify the question to `Describe how long you worked on homework?`
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

- Create a variable named `homeworkTime` with a default value of 0
- Inside the function `AskHomeworkDuration()`, ask: `Describe how long you worked on homework?`
- Assign a number value and a log to `homeworkTime` based on their response:

| User Input      | homeworkTime | Example Console Response                              |
| --------------- | ------------ | ----------------------------------------------------- |
| "all evening"   | 4            | "Impressive dedication!"                              |
| "an hour or two"| 2            | "Good job, but try to keep a steady pace."            |
| "a little"      | 1            | "Every bit counts — keep it up!"                      |
| "barely"        | 0.5          | "Try to set aside more time for homework next time."  |

- At the end of the function just give a status logging `"We've estimated that you studied for "+ homeworkTime +" hours"`.  For example, if the input was "barely", then the log at the end will say `"We've estimated that you studied for 0.5 hours". For this part I am looking for you to use your variable as part of your console log.

### Evaluation Criteria

- Conditional Range — Correct use of multiple conditions (3 pts)
- Logical Accuracy — Correctly assigns `homeworkTime` (3 pts)
- Prints appropriate feedback (3 pts)

### Total: 9 points

---

## Level 3 – Tracking Focus Points

### Objective

- Combine math and logic to simulate tracking "focusPoints" and study health.

### Instructions

**Before you start**  
Create a focusPoints variable and have an initial value of 0. Look for the function `AskHomeworkDuration()`.

```bash
function AskHomeworkDuration()
```
After your final console log about the homeworkTime, run `TrackHomeworkStatus()` by typing in 

```bash
console log ... with homeworkTime
TrackHomeworkStatus();
```
From this point onward you can modify the `TrackHomeworkStatus()` function.

1. Look for the function

```bash
function TrackHomeworkStatus()
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

- create a variable `focusPoints`
- After describing homework, ask:
  How do you want me to help? (type `exit` to exit)

**Two main options**

1. if the user input is `track`  
   Use the `homeworkTime` value to update a global `focusPoints` variable:

   - If `homeworkTime` is below 1, add 5 `focusPoints`
   - If `homeworkTime` between 1–2, add 10 `focusPoints`
   - If `homeworkTime` between 3–4, add 15 `focusPoints`
   - repeat TrackHomeworkStatus() again

2. `stats`  
   Display the user’s current focusPoints:
   - if `focusPoints` is below 30, "You’re running low on focus — try to study a bit more."
   - if `focusPoints` between 30–70, "You’re in a healthy study zone."
   - if `focusPoints` above 70, "You’re highly focused and on track!"
   - repeat TrackHomeworkStatus() again
   
3. `restart`
  Ask the initial question AskInitialQuestion().

### Evaluation Criteria

- Numeric Conversion — Correctly assigns numeric values to `focusPoints` (1 pt)
- Conditional Logic — Uses conditions to assign proper  (1 pt)
- Focus Point Tracking — Correctly updates and evaluates `homeworkTime` and `focusPoints` (1 pt)
- Completion Condition — Logic does what the user inputs (1 pt)

### Total: 4 points

---

Bonus Challenge – Homework Problems

Modify another function `CheckHomeworkProblems()` that asks:
What happened last night?

This function will only run if you answer `no` from the initial question.

Deduct points and add comments based on keywords:

| Keyword in Input | Effect / Response Example                                     |
| ---------------- | ------------------------------------------------------------ |
| "distraction"    | Deduct 5 points – "Try to find a quiet place to study."      |
| "stress"         | Deduct 10 points – "Take a short break to clear your mind."  |
| "procrastination"| Deduct 8 points – "Break your work into smaller tasks."      |
| "too much work"  | Deduct 6 points – "Prioritize and plan your assignments."    |

Once the deduction is applied, return to the initial question.

### Total Points: 25 + Bonus