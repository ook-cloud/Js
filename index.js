console.log("Hello world");
/* ============================================================
   JS CLASS — ONE-FILE WORKBOOK
   ------------------------------------------------------------
   How to use:
   - Each exercise is written as a comment (lines starting with //).
   - Write your JavaScript in the blank space under each one.
   - Use console.log(...) to print your answer.
   - Run this file with Node:   node workbook.js
     (or paste one exercise at a time into a lesson's Run box.)
   Sections:
     PART 1 — IF STATEMENTS        (1–10)
     PART 2 — COMBINED PROJECT     (1–20)
     PART 3 — STRINGS + INTERVIEW  (1–25)
   ============================================================ */
/* ============================================================
   PART 1 — IF STATEMENTS
   ============================================================ */
// ----- 1. Simple if -----
// Declare `let age = 16`. Write an if that logs "You can drive" when age >= 16.
let age = 16;
if (age >= 16) {
  age = "You can drive";
} else {
  age = "You can't drive";
}
console.log(age);

// ----- 2. if / else -----
// Declare `let isWeekend = true`. Log "Relax!" if it is the weekend, otherwise "Go to work".
let isWeekend = true;
if (isWeekend) {
  console.log("Relax");
} else {
  console.log("Go to work");
}

// ----- 3. Even or odd -----
// Declare `let number = 7`. Use if/else and `number % 2 === 0` to log "even" or "odd".
let number = 8;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ----- 4. Grade the score -----
// Declare `let score = 82`. Log the letter grade:
//   90+ -> "A", 80–89 -> "B", 70–79 -> "C", below 70 -> "F".
let score = 72;
if (score >= 90) {
  console.log("A");
} else if (80 <= score && score <= 89) {
  console.log("B");
} else if (70 <= score && score <= 79) {
  console.log("C");
} else if (60 <= score && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// ----- 5. Biggest of two -----
// Declare `let a = 14` and `let b = 9`. Log whichever is larger, or "equal" if they match.
let t = 9;
let r = 9;
if (t < r) {
  console.log("r is larger");
} else if (t > r) {
  console.log("t is larger");
} else {
  console.log("equal");
}

// ----- 6. Temperature advice -----
// Declare `let temp = 30`. Log:
//   above 28 -> "Wear shorts", 15 to 28 -> "Wear a jacket", below 15 -> "Wear a coat".
let temp = 99;
if (28 < temp) {
  console.log("Wear shorts");
} else if (15 <= temp && temp > 28) {
  console.log("Wear a jacket");
} else {
  console.log("Wear a coat");
}

// ----- 7. Login message -----
// Declare `let username = "admin"` and `let password = "1234"`.
// If both are correct, log "Welcome", otherwise "Access denied".
let username = "admin";
let password = "1234";
let enterID = "admin";
let enterpassword = 1234;
if ((username = enterID && password == enterpassword)) {
  console.log("Welcome");
} else {
  console.log("access denied");
}

// ----- 8. Positive, negative, zero -----
// Declare `let n = -5`. Log "positive", "negative", or "zero".
let N = -5;
if (N > 0) {
  console.log("positive");
} else if (N < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// ----- 9. Ticket price -----
// Declare `let age = 65`. Price: under 12 -> "$5", 12 to 64 -> "$12", 65+ -> "$8".

let Age = 65;
let Price;
if (Age < 12) {
  Price = "$5";
} else if (Age <= 64) {
  price = "$12";
} else {
  price = "$8";
}
console.log(price);

// ----- 10. Traffic light -----
// Declare `let light = "yellow"`. Log:
//   "green" -> "Go", "yellow" -> "Slow down", "red" -> "Stop", else -> "Invalid light".
let light = "yellow";

if (light === "green") {
  console.log("Go");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop");
} else {
  console.log("Invalid light");
}
/* ============================================================
   PART 2 — COMBINED PROJECT (variables + operators + if)
   ============================================================ */
// ----- 1. Movie ticket machine -----
// Variables: age, hasMembership (boolean).
//   under 12 OR over 65 -> "$6", member of any age -> "$8", everyone else -> "$12". Log the price.
let nas = 30;
let hasMembership = true;
let pricE;
if (nas < 12 || nas > 65) {
  pricE = "$6";
} else if (hasMembership) {
  pricE = "$8";
} else {
  pricE = "$12";
}
console.log(pricE);

// ----- 2. Password strength -----
// Variable: password (string). Using password.length:
//   >= 12 -> "Strong", >= 8 -> "Medium", otherwise -> "Weak".
let Password = "mypassword123";
let strength;
if (Password.length >= 12) {
  strength = "Strong";
} else if (Password.length >= 8) {
  strength = "Medium";
} else {
  strength = "Weak";
}
console.log(strength);

// ----- 3. Game level up -----
// let xp = 250, const levelUpAt = 200. If xp >= levelUpAt, log "Level up!" and reset xp to 0;
// otherwise log how much XP is left. Show xp before and after.
let xp = 250;
const levelUpAt = 200;
console.log("XP before:", xp);
if (xp >= levelUpAt) {
  console.log("Level up!");
  xp = 0;
} else {
  console.log("XP left:", levelUpAt - xp);
}
console.log("XP after:", xp);

// ----- 4. Tip calculator -----
// Variables: bill, serviceWasGood (boolean). Good -> 20% tip, otherwise 10%.
// Compute the tip and the total, log both.
let bill = 100;
let serviceWasGood = true;
let tip = serviceWasGood ? bill * 0.2 : bill * 0.1;
let Total = bill + tip;
console.log("Tip:", tip);
console.log("Total:", Total);

// ----- 5. Weather outfit -----
// Variables: temp, isRaining (boolean).
//   raining AND temp < 15 -> "Coat and umbrella", raining only -> "Umbrella",
//   temp > 28 -> "T-shirt", otherwise -> "Light jacket".
let raining = true;
let Temp = 10;
if (raining && Temp < 15) {
  console.log("Coat and umbrella");
} else if (raining) {
  console.log("Umbrella");
} else if (Temp > 28) {
  console.log("T-shirt");
} else {
  console.log("Light jacket");
}

// ----- 6. Exam pass with bonus -----
// Variables: score, attendedExtraClass (boolean).
// Pass if score >= 50, OR if score >= 45 AND attended the extra class. Log "Pass" or "Fail".
let Score = 47;
let attendedExtraClass = true;
if (Score >= 50 || (Score >= 45 && attendedExtraClass)) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ----- 7. Cart discount -----
// Variables: total, isMember (boolean).
//   total >= 100 AND member -> 20% off, total >= 100 only -> 10% off, otherwise -> no discount.
// Log the final price.
let total = 120;
let isMember = true;
let finalPrice = total;
if (total >= 100 && isMember) {
  finalPrice *= 0.8;
} else if (total >= 100) {
  finalPrice *= 0.9;
}
console.log(finalPrice);

// ----- 8. Login system -----
// Variables: const correctUser, const correctPass, plus enteredUser, enteredPass, isLocked (boolean).
// Log "Welcome" only when NOT locked AND both username and password match. Otherwise "Login failed".
const correctUser = "admin";
const correctPass = "1234";
let enteredUser = "admin";
let enteredPass = "1234";
let isLocked = false;
if (!isLocked && enteredUser === correctUser && enteredPass === correctPass) {
  console.log("Welcome");
} else {
  console.log("Login failed");
}

// ----- 9. BMI category -----
// Variables: weight (kg), height (m). bmi = weight / (height * height). Log:
//   below 18.5 -> "Underweight", 18.5–24.9 -> "Normal", 25–29.9 -> "Overweight", 30+ -> "Obese".
let Weight = 70;
let height = 1.75;
let bmi = Weight / (height * height);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// ----- 10. Mini ATM -----
// let balance = 500, let withdrawAmount = 200, const dailyLimit = 300.
// Allow only when withdrawAmount <= balance AND withdrawAmount <= dailyLimit.
//   allowed -> subtract from balance, log "Success" + new balance;
//   too much -> "Insufficient funds"; over limit -> "Over daily limit".
let balance = 500;
let withdrawAmount = 200;
const dailyLimit = 300;
if (withdrawAmount > balance) {
  console.log("Insufficient funds");
} else if (withdrawAmount > dailyLimit) {
  console.log("Over daily limit");
} else {
  balance -= withdrawAmount;
  console.log("Success");
  console.log("New balance:", balance);
}

// ----- 11. Leap year check -----
// Variable: year. Leap when divisible by 4 AND (not divisible by 100 OR divisible by 400).
// Use % with && and ||. Log "Leap year" or "Normal year". Test with 2000, 1900, 2024.
let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Normal year");
}
// ----- 12. FizzBuzz (one number) -----
// Variable: n. divisible by 3 AND 5 -> "FizzBuzz", by 3 only -> "Fizz", by 5 only -> "Buzz",
// otherwise -> the number itself. Test with 15, 9, 10, 7.
let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}

// ----- 13. Rock paper scissors -----
// Variables: player1, player2 (strings: "rock", "paper", "scissors").
// Log "Player 1 wins", "Player 2 wins", or "Tie". rock>scissors, scissors>paper, paper>rock.
let player1 = "rock";
let player2 = "scissors";
if (player1 === player2) {
  console.log("Tie");
} else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "scissors" && player2 === "paper") ||
  (player1 === "paper" && player2 === "rock")
) {
  console.log("Player 1 wins");
} else {
  console.log("Player 2 wins");
}
// ----- 14. Triangle type -----
// Variables: sides a, b, c. First check valid triangle (each side < sum of other two).
// invalid -> "Not a triangle"; all equal -> "Equilateral"; exactly two equal -> "Isosceles";
// all different -> "Scalene".
let L = 5;
let M = 5;
let K = 5;
if (L + M <= K || L + K <= M || M + K <= L) {
  console.log("Not a triangle");
} else if (L === M && M === K) {
  console.log("Equilateral");
} else if (L === M || L === K || M === K) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}

// ----- 15. 12-hour clock -----
// Variable: hour (0–23). Convert to 12-hour and log like "3 PM".
//   0 -> "12 AM", 12 -> "12 PM", 1–11 -> "AM", 13–23 -> subtract 12 and add "PM".
// Test with 0, 9, 12, 18.
let hour = 18;
if (hour === 0) {
  console.log("12 AM");
} else if (hour === 12) {
  console.log("12 PM");
} else if (hour < 12) {
  console.log(hour + " AM");
} else {
  console.log(hour - 12 + " PM");
}

// ----- 16. Shipping cost -----
// Variables: weight (kg), isExpress (boolean), isMember (boolean).
// Base: weight <= 1 -> $5, weight <= 5 -> $10, otherwise -> $20.
// If isExpress, double base. Then if isMember, take $3 off (never below $0). Log final cost.
let weight = 6;
let isExpress = true;
let IsMember = true;
let cost;
if (weight <= 1) {
  cost = 5;
} else if (weight <= 5) {
  cost = 10;
} else {
  cost = 20;
}
if (isExpress) {
  cost *= 2;
}
if (IsMember) {
  cost -= 3;
}
if (cost < 0) {
  cost = 0;
}
console.log("Final cost:", cost);
// ----- 17. Progressive tax -----
// Variable: income. first $10,000 -> 0%, $10,001–$30,000 -> 10% on that portion,
// above $30,000 -> 20% on that portion. Log total tax. Test with 5000, 20000, 50000.
let income = 50000;
let tax = 0;
if (income > 10000) {
  let mid = Math.min(income, 30000) - 10000;
  tax += mid * 0.1;
}
if (income > 30000) {
  tax += (income - 30000) * 0.2;
}
console.log(tax);

// ----- 18. Password validator -----
// Variables: password (string), confirmPassword (string). Log "Valid" only when ALL true:
//   length >= 8, NOT equal to "password", AND matches confirmPassword.
// Otherwise a specific reason: "Too short", "Too common", or "Does not match" (in that order).
let pass = "mypass";
let confirmPass = "mypass";
if (pass.length < 8) {
  console.log("Too short");
} else if (pass === "pass") {
  console.log("Too common");
} else if (pass !== confirmPass) {
  console.log("Does not match");
} else {
  console.log("Valid");
}
// ----- 19. Concert pricing -----
// Variables: age, day (string), hasVipCode (boolean). Start price $50.
//   under 18 OR 65+ -> half price; day is "Tuesday" -> $10 off (after age discount);
//   hasVipCode -> add flat $30 at the end. Log the final price.
let aGe = 20;
let day = "Tuesday";
let hasVipCode = true;
let prIce = 50;
if (aGe < 18 || aGe >= 65) {
  prIce *= 0.5;
}
if (day === "Tuesday") {
  prIce -= 10;
}
if (hasVipCode) {
  prIce += 30;
}
console.log("Final prIce:", prIce);

// ----- 20. Vending machine -----
// const price = 150 (cents), insertedAmount (cents), isSoldOut (boolean). In order:
//   isSoldOut -> "Sold out" and stop; insertedAmount < price -> log how much more is needed;
//   exact -> "Enjoy your drink!"; too much -> "Enjoy your drink!" AND change (insertedAmount - price).
const pRice = 150;
let insertedAmount = 200;
let isSoldOut = false;
if (isSoldOut) {
  console.log("Sold out");
} else if (insertedAmount < pRice) {
  console.log("Need", pRice - insertedAmount, "more cents");
} else if (insertedAmount === pRice) {
  console.log("Enjoy your drink!");
} else {
  console.log("Enjoy your drink!");
  console.log("Change:", insertedAmount - pRice);
}
/* ============================================================
   PART 3 — STRINGS + INTERVIEW ROUND
   ------------------------------------------------------------
   Tools: .length .toUpperCase() .toLowerCase() text[i] .charAt()
          .includes() .indexOf() .slice() .substring() .trim() + (join)
   Convert: String(n)  Number(s)  (n).toString()  "" + n  isNaN(Number(x))
   ============================================================ */
// ----- 1. How long is the word? -----
// word (string). Log word.length. if longer than 5 -> "Long word", else "Short word".
// Test "sun" and "elephant".
let word = "sunnys";
if (word.length > 5) {
  console.log("Long word");
} else {
  console.log("Short word");
}

// ----- 2. Loud and quiet -----
// name (string). Log it with .toUpperCase() and with .toLowerCase().
let naame = "Alex";
console.log(naame.toUpperCase());
console.log(naame.toLowerCase());

// ----- 3. First and last letter -----
// word (string). Log word[0] and word[word.length - 1]. Test "hello" -> h and o.
let Word = "hello";
console.log(Word[0], Word[Word.length - 1]);

// ----- 4. Cut a piece (slice) -----
// word = "JavaScript". Log word.slice(0, 4) and word.slice(4).
let wOrd = "JavaScript";
console.log(wOrd.slice(0, 4));
console.log(wOrd.slice(4));

// ----- 5. Is it an email? -----
// email (string). if email.includes("@") -> "Looks like an email", else "Not an email".
// Test "sam@mail.com" and "sam.com".
let email = "sam@mail.com";
if (email.includes("@")) {
  console.log("Looks like an email");
} else {
  console.log("Not an email");
}

// ----- 6. Full name builder -----
// firstName, lastName (strings). Join with a space using + into fullName.
// Log fullName and fullName.length.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// ----- 7. Valid username -----
// username (string). Valid only when length >= 3 AND <= 15.
// Log "Valid username" or "Invalid username".
let Username = "alex123";
if (Username.length >= 3 && Username.length <= 15) {
  console.log("Valid Username");
} else {
  console.log("Invalid Username");
}

// ----- 8. Same word? (ignore case) -----
// a, b (strings). if a.toLowerCase() === b.toLowerCase() -> "Match", else "No match".
// Test "Hello" and "hello".
let a = "Hello";
let b = "hello";

console.log(a.toLowerCase() === b.toLowerCase() ? "Match" : "No match");

// ----- 9. Clean the spaces (trim) -----
// raw = "   hi there   ". clean = raw.trim(). Log clean and clean.length. Compare to raw.length.
let raw = " hi there ";
let clean = raw.trim();

console.log(clean);
console.log(clean.length);
console.log(raw.length);

// ----- 10. Find a letter (indexOf) -----
// word (string). word.indexOf("a"). if -1 -> "No letter a", else "Found a at position " + ...
// Test "banana" and "sky".
let worD = "banana";
let pos = worD.indexOf("a");
console.log(pos === -1 ? "No letter a" : "Found a at position " + pos);

// ----- 11. Phone area code -----
// phone (10-char string like "5551234567"). Log "Area code: " + phone.slice(0, 3).
// if phone.length is not exactly 10 -> "Invalid number".
let phone = "5551234567";
if (phone.length !== 10) {
  console.log("Invalid number");
} else {
  console.log("Area code: " + phone.slice(0, 3));
}

// ----- 12. Password rule (length + word) -----
// password (string). "Strong" only when length >= 8 AND NOT contains "password"
// (!password.toLowerCase().includes("password")). Otherwise "Weak".
let passWord = "mypassword123";
if (passWord.length >= 8 && !password.toLowerCase().includes("password")) {
  console.log("Strong");
} else {
  console.log("Weak");
}

// ----- 13. Initials -----
// firstName, lastName (strings). first letters uppercase, join with + and dots -> "M.J.".
// "maria" + "jones" -> "M.J.".
let frstName = "otgon";
let lstName = "baatar";
let initials = frstName[0].toUpperCase() + "." + lstName[0].toUpperCase() + ".";
console.log(initials);

// ----- 14. Capitalize a name -----
// name = "maria". Join name[0].toUpperCase() with name.slice(1) -> "Maria".
let ner = "otgonbaatar";
let capitalized = ner[0].toUpperCase() + ner.slice(1);
console.log(capitalized);

// ----- 15. Tiny palindrome check -----
// word (3-letter string like "mom"). Reverse with word[2]+word[1]+word[0], compare with ===.
// Log "Palindrome" or "Not a palindrome". Test "mom" and "cat".
// --- Interview round: Numbers <-> Strings ---
let woRd = "mom";
let reversed = woRd[2] + woRd[1] + woRd[0];
console.log(reversed === word ? "Palindrome" : "Not a palindrome");

// ----- 16. Count the digits -----
// n (number). String(n).length. if more than 3 digits -> "Big number", else "Small number".
// Test 42 and 10000.
let O = 42;
console.log(String(n).length > 3 ? "Big number" : "Small number");
O = 10000;
console.log(String(n).length > 3 ? "Big number" : "Small number");

// ----- 17. Sum the two digits -----
// n (2-digit number like 47). s = String(n). Number(s[0]) + Number(s[1]). Log the sum.
// if sum is exactly 10 -> "Round". Test 47 and 55.
let k = 47;
let s = String(k);
let sum = Number(s[0]) + Number(s[1]);

console.log(sum);
if (sum === 10) console.log("Round");

// ----- 18. First and last digit -----
// n (3-digit number). s = String(n). Log Number(s[0]) and Number(s[s.length - 1]).
// if equal -> "Same ends". Test 363 and 481.
let g = 363;
let f = String(g);

let first = Number(f[0]);
let last = Number(f[f.length - 1]);
console.log(first, last);
if (first === last) console.log("Same ends");

// ----- 19. Reverse a 3-digit number -----
// n (3-digit number). s = String(n). reversed = Number(s[2] + s[1] + s[0]). Log it.
// Test 123 -> 321.
let h = 123;
let j = String(h);
let Reversed = Number(j[2] + j[1] + j[0]);
console.log(Reversed);

// ----- 20. Palindrome number -----
// n (3-digit number). Build reversed like #19, compare to n with ===.
// Log "Palindrome" or "Not a palindrome". Test 121 and 123.
let l = 121;
let q = String(l);
let reVersed = Number(q[2] + q[1] + q[0]);
console.log(reVersed === l ? "Palindrome" : "Not a palindrome");

// ----- 21. Contains a lucky 7? -----
// n (number). if String(n).includes("7") -> "Lucky!", else "No luck". Test 1700 and 2024.
let x = 4;
let y = 7;
function checkLucky(x) {
  console.log(String(x).includes("7") ? "Lucky!" : "No luck");
}
checkLucky(x);
checkLucky(y);
// ----- 22. Glue two numbers -----
// a = 12, b = 34. Number(String(a) + String(b)) -> 1234. Log it, then log typeof the result.
let u = 12;
let i = 34;
glued = Number(String(u) + String(i));
console.log(glued);
console.log(typeof glued);

// ----- 23. Pad the clock -----
// minute (0–59). if String(minute).length === 1 add "0" in front. Log like "05" or "42".
// Test 5 and 42.
let min = 4;
if ((min.length = 1)) {
  console.log("0" + min + " min");
}

// ----- 24. Cents to price tag -----
// cents (3+ digit number like 150). s = String(cents).
// rest = s.slice(s.length - 2); dollars = s.slice(0, s.length - 2).
// Log "$" + dollars + "." + rest -> "$1.50". Test 150 and 905.
let cents = 150;
let p = String(cents);
let dollars = p.slice(0, p.length - 2);
let rest = p.slice(p.length - 2);
console.log("$" + dollars + "." + rest);

// ----- 25. Is this string a number? -----
// input (string like "42" or "hello"). if isNaN(Number(input)) -> "Invalid input";
// otherwise turn it into a number, double it, log the result. Test "21" and "abc".

let iinput = "21";
if (isNaN(Number(iinput))) {
  console.log("Invalid input");
} else {
  console.log(Number(iinput) * 2);
}

/* ============================================================
   End of workbook. Nice work!
   ============================================================ */
/* ============================================================
   LESSON 6 — LOOPS: EXERCISES + TEST CASES
   ------------------------------------------------------------
   How to use:
   - Read the exercise, then write your loop in the blank space
     under it (where you see  // your code here).
   - Use console.log(...) to print your answer.
   - Each exercise has 3 TEST CASES: an INPUT -> the EXACT output
     you should get. Change the starter variable to each test
     value, run the file (node lesson-6-loops-tests.js), and
     compare your output to the expected output.
   - All 3 match = exercise correct.

   Rules: NO arrays. NO functions. Only variables, data types,
   operators (% && || !), if, strings, String()/Number()/isNaN,
   and Math.floor(x).

   NOTE: every exercise uses a DIFFERENT variable name, so all
   your answers can live in this one file with no clashes.

   The two shapes:
     for (let i = 0; i < 5; i++) { ... }       // known count
     let n = 5; while (n > 0) { ...; n--; }     // until false
   ============================================================ */

/* ============================================================
   PART A — FOR LOOPS
   ============================================================ */

// ----- 1. Count up -----
// Log the numbers 1 through `maxCount`, one per line, using a for loop.
let maxCount = 10;
for (i = 1; i <= maxCount; i++) {
  console.log(i);
}

// TEST 1:  maxCount = 10  ->  1 2 3 4 5 6 7 8 9 10
// TEST 2:  maxCount = 3   ->  1 2 3
// TEST 3:  maxCount = 1   ->  1

// ----- 2. Count down -----
// Log `startNum` down to 0, then log "Liftoff!" after the loop ends.
let startNum = 10;
for (i = startNum; i >= 0; i--) 
  console.log(i);
// TEST 1:  startNum = 10  ->  10 9 8 7 6 5 4 3 2 1 0  then  Liftoff!
// TEST 2:  startNum = 3   ->  3 2 1 0  then  Liftoff!
// TEST 3:  startNum = 0   ->  0  then  Liftoff!

// ----- 3. Even numbers only -----
// Log every even number from 2 up to `evenMax`. (Step i += 2, or if (i % 2 === 0).)
let evenMax = 20;
for (i = 2; evenMax >= i; i += 2) console.log(i);

// TEST 1:  evenMax = 20  ->  2 4 6 8 10 12 14 16 18 20
// TEST 2:  evenMax = 10  ->  2 4 6 8 10
// TEST 3:  evenMax = 1   ->  (nothing printed)

// ----- 4. Sum 1 to max -----
// sumTotal = 0 before the loop. Add each number 1..`sumMax` to it. Log sumTotal.
let sumMax = 100;
let maxTotal = 0;
for (i = 1; i <= sumMax; i++) {
  maxTotal = maxTotal + i;
}
console.log(maxTotal);
// TEST 1:  sumMax = 100  ->  5050
// TEST 2:  sumMax = 10   ->  55
// TEST 3:  sumMax = 1    ->  1

// ----- 5. Times table -----
// Log the `tableN` times table from "tableN x 1" to "tableN x 10", like "7 x 3 = 21".
let tableN = 7;
for (let i = 1; i <= 10; i++) {
  console.log(tableN + " x " + i + " = " + (tableN * i));
}
// TEST 1:  tableN = 7  ->  7 x 1 = 7  ...  7 x 10 = 70
// TEST 2:  tableN = 2  ->  2 x 1 = 2  ...  2 x 10 = 20
// TEST 3:  tableN = 1  ->  1 x 1 = 1  ...  1 x 10 = 10

// ----- 6. Factorial -----
// Multiply 1*2*...*`factN` with an accumulator starting at 1. Log the result.
let factN = 5; 
let accumulator = 1; 
for (i = 1; i <= factN; i++) {
  accumulator = accumulator * i;
}
console.log(accumulator);

// TEST 1:  factN = 5  ->  120
// TEST 2:  factN = 3  ->  6
// TEST 3:  factN = 1  ->  1

// ----- 7. Count multiples -----
// Count how many numbers from 1 to `multMax` are divisible by 3 (i % 3 === 0). Log the count.
let multMax = 50;
let count = 0; 
for (let i = 1; i <= multMax; i++) {
  if (i % 3 === 0) {
    count = count + 1;
  }
}
console.log(count);

// TEST 1:  multMax = 50  ->  16
// TEST 2:  multMax = 10  ->  3
// TEST 3:  multMax = 2   ->  0

// ----- 8. FizzBuzz (lite) -----
// Loop 1 to `fizzMax`. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.
let fizzMax = 20;
for (let i = 1; i <= fizzMax; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// TEST 1:  fizzMax = 5   ->  1 2 Fizz 4 Buzz
// TEST 2:  fizzMax = 15  ->  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
// TEST 3:  fizzMax = 3   ->  1 2 Fizz

/* ============================================================
   PART B — WHILE LOOPS
   ============================================================ */
// ----- 9. Halve it -----
// While halveN > 1, log halveN then halve it: halveN = Math.floor(halveN / 2).
let halveN = 100;
while (halveN > 1) {
console.log(halveN);
halveN = Math.floor(halveN / 2);
}

// TEST 1:  halveN = 100  ->  50 25 12 6 3 1
// TEST 2:  halveN = 16   ->  8 4 2 1
// TEST 3:  halveN = 1    ->  (nothing printed)

// ----- 10. Count the digits -----
// Using digitN = Math.floor(digitN / 10) in a while loop, count the digits. Log the count. (Pure math.)
let digitN = 7384;
let digitCount = 0;
if (digitN === 0) {
digitCount = 1;
} else {
let tempDigitN = digitN;
while (tempDigitN > 0) {
digitCount = digitCount + 1;
tempDigitN = Math.floor(tempDigitN / 10);
}
}
console.log(digitCount);

// TEST 1:  digitN = 7384  ->  4
// TEST 2:  digitN = 50    ->  2
// TEST 3:  digitN = 9     ->  1

// ----- 11. Sum of digits -----
// Add last digit (sumDigitN % 10) to a total, then sumDigitN = Math.floor(sumDigitN / 10). While > 0. Log total.
let sumDigitN = 1234;
let totalSum = 0;
let tempSumDigitN = sumDigitN;
while (tempSumDigitN > 0) {
totalSum = totalSum + (tempSumDigitN % 10);
tempSumDigitN = Math.floor(tempSumDigitN / 10);
}
console.log(totalSum);

// TEST 1:  sumDigitN = 1234  ->  10
// TEST 2:  sumDigitN = 999   ->  27
// TEST 3:  sumDigitN = 5     ->  5

// ----- 12. Guess limiter -----
// While guessNum !== secretNum, log "Trying " + guessNum, then guessNum++.
// After the loop log "Found it: " + secretNum.
let secretNum = 4;
let guessNum = 1;
while (guessNum !== secretNum) {
console.log("Trying " + guessNum);
guessNum++;
}
console.log("Found it: " + secretNum);

// TEST 1:  secretNum = 4, guessNum = 1  ->  Trying 1 / Trying 2 / Trying 3, then  Found it: 4
// TEST 2:  secretNum = 2, guessNum = 1  ->  Trying 1, then  Found it: 2
// TEST 3:  secretNum = 1, guessNum = 1  ->  (no Trying), then  Found it: 1

/* ============================================================
PART C — LOOPING OVER STRINGS
============================================================ */

// ----- 13. Spell it out -----
// Loop with spellWord[i] and log one letter per line.
let spellWord = "hello";
for (let i = 0; i < spellWord.length; i++) {
console.log(spellWord[i]);
}

// TEST 1:  spellWord = "hello"  ->  h e l l o
// TEST 2:  spellWord = "hi"     ->  h i
// TEST 3:  spellWord = "a"      ->  a

// ----- 14. Count a letter -----
// Count how many times "a" appears in letterWord (if letterWord[i] === "a"). Log the count.
let letterWord = "banana";
let letterCount = 0;
for (let i = 0; i < letterWord.length; i++) {
if (letterWord[i] === "a") {
letterCount = letterCount + 1;
}
}
console.log(letterCount);

// TEST 1:  letterWord = "banana"  ->  3
// TEST 2:  letterWord = "aaa"     ->  3
// TEST 3:  letterWord = "dog"     ->  0

// ----- 15. Count the vowels -----
// For each char, if "aeiou".includes(vowelText[i]) add to a counter. Log the count.
let vowelText = "javascript";
let vowelCount = 0;
for (let i = 0; i < vowelText.length; i++) {
if ("aeiou".includes(vowelText[i])) {
vowelCount = vowelCount + 1;
}
}
console.log(vowelCount);

// TEST 1:  vowelText = "javascript"  ->  3
// TEST 2:  vowelText = "aeiou"        ->  5
// TEST 3:  vowelText = "xyz"          ->  0

// ----- 16. Reverse a string -----
// reversedText = "". Loop and build backwards: reversedText = reverseWord[i] + reversedText. Log it.
let reverseWord = "code";
let reversedText = "";
for (let i = 0; i < reverseWord.length; i++) {
reversedText = reverseWord[i] + reversedText;
}
console.log(reversedText);

// TEST 1:  reverseWord = "code"  ->  edoc
// TEST 2:  reverseWord = "abc"   ->  cba
// TEST 3:  reverseWord = "x"     ->  x

// ----- 17. Count the words -----
// wordCount = 1. Each space (wordSentence[i] === " ") -> wordCount++. Log the count.
let wordSentence = "the cat sat down";
let wordCount = 1;
for (let i = 0; i < wordSentence.length; i++) {
if (wordSentence[i] === " ") {
wordCount = wordCount + 1;
}
}
console.log(wordCount);

// TEST 1:  wordSentence = "the cat sat down"  ->  4
// TEST 2:  wordSentence = "hello world"        ->  2
// TEST 3:  wordSentence = "one"                ->  1

/* ============================================================
PART D — COMBINE IT
============================================================ */

// ----- 18. Find first digit in text -----
// Loop digitText chars. When !isNaN(Number(digitText[i])) -> log "First digit: " + char and break.
// If none found, log "No digits".
let digitText = "abc4def";
let foundDigit = false;
for (let i = 0; i < digitText.length; i++) {
if (digitText[i] !== " " && !isNaN(Number(digitText[i]))) {
console.log("First digit: " + digitText[i]);
foundDigit = true;
break;
}
}
if (!foundDigit) {
console.log("No digits");
}

// TEST 1:  digitText = "abc4def"  ->  First digit: 4
// TEST 2:  digitText = "a9b2"     ->  First digit: 9
// TEST 3:  digitText = "abc"      ->  No digits

// ----- 19. Is it prime? -----
// Loop i from 2 to primeN-1. If primeN % i === 0 -> not prime, break. Log "Prime"/"Not prime".
let primeN = 13;
let isPrime = true;
if (primeN < 2) {
isPrime = false;
} else {
for (let i = 2; i < primeN; i++) {
if (primeN % i === 0) {
isPrime = false;
break;
}
}
}
if (isPrime) {
console.log("Prime");
} else {
console.log("Not prime");
}

// TEST 1:  primeN = 13  ->  Prime
// TEST 2:  primeN = 15  ->  Not prime
// TEST 3:  primeN = 2   ->  Prime

// ----- 20. Multiplication grid (nested) -----
// Loop row 1..gridRows, inside it loop col 1..gridCols. Log row + " x " + col + " = " + (row * col).
let gridRows = 3;
let gridCols = 3;
for (let row = 1; row <= gridRows; row++) {
for (let col = 1; col <= gridCols; col++) {
console.log(row + " x " + col + " = " + (row * col));
}
}

// TEST 1:  gridRows = 3, gridCols = 3  ->  9 lines, last is  3 x 3 = 9
// TEST 2:  gridRows = 2, gridCols = 2  ->  4 lines, last is  2 x 2 = 4
// TEST 3:  gridRows = 1, gridCols = 3  ->  1 x 1 = 1 / 1 x 2 = 2 / 1 x 3 = 3

/* ============================================================
PART E — LEETCODE-STYLE  (same tools only: loops, if,
% , Math.floor, strings — NO arrays, NO functions)
Each problem is stated like a coding challenge. Read the
input, compute, and log the answer.
============================================================ */

// ----- E1. Palindrome Number  (LeetCode 9) -----
// Given an integer palinNum, log true if it reads the same forwards and
// backwards, else false. Negative numbers are never palindromes.
// Hint: rebuild the number reversed with % 10 and Math.floor(/10), compare.
let palinNum = 121;
if (palinNum < 0) {
console.log(false);
} else {
let original = palinNum;
let reversed = 0;
while (original > 0) {
let remainder = original % 10;
reversed = reversed * 10 + remainder;
original = Math.floor(original / 10);
}
console.log(palinNum === reversed);
}

// EXAMPLE 1:  Input: palinNum = 121    Output: true
//   Explanation: reading 121 left-to-right and right-to-left both give 121.
// EXAMPLE 2:  Input: palinNum = -121   Output: false
//   Explanation: right-to-left it reads 121-, so it is not a palindrome.
// EXAMPLE 3:  Input: palinNum = 10     Output: false
//   Explanation: right-to-left it reads 01, which is not the same as 10.

// ----- E2. Reverse Integer  (LeetCode 7) -----
// Given an integer revNum, log its digits reversed. Keep the sign.
// Hint: track sign, work on the positive value, build revResult with % 10.
let revNum = 123;
let sign = 1;
let tempRevNum = revNum;
if (tempRevNum < 0) {
sign = -1;
tempRevNum = tempRevNum * -1;
}
let revResult = 0;
while (tempRevNum > 0) {
let remainder = tempRevNum % 10;
revResult = revResult * 10 + remainder;
tempRevNum = Math.floor(tempRevNum / 10);
}
console.log(revResult * sign);

// EXAMPLE 1:  Input: revNum = 123    Output: 321
//   Explanation: the digits 1-2-3 reversed are 3-2-1.
// EXAMPLE 2:  Input: revNum = -123   Output: -321
//   Explanation: reverse 123 -> 321, then re-apply the negative sign.
// EXAMPLE 3:  Input: revNum = 120    Output: 21
//   Explanation: 120 reversed is 021; a leading zero drops, leaving 21.

// ----- E3. Add Digits / Digital Root  (LeetCode 258) -----
// Given a non-negative integer rootNum, repeatedly add its digits until only
// one digit remains, then log it. (Use a while loop INSIDE a while loop, or
// loop until rootNum < 10.)
let rootNum = 38;
let currentRootNum = rootNum;
while (currentRootNum >= 10) {
let sum = 0;
while (currentRootNum > 0) {
sum = sum + (currentRootNum % 10);
currentRootNum = Math.floor(currentRootNum / 10);
}
currentRootNum = sum;
}
console.log(currentRootNum);

// EXAMPLE 1:  Input: rootNum = 38   Output: 2
//   Explanation: 3 + 8 = 11, then 1 + 1 = 2. 2 has one digit, so stop.
// EXAMPLE 2:  Input: rootNum = 0    Output: 0
//   Explanation: 0 already has a single digit.
// EXAMPLE 3:  Input: rootNum = 99   Output: 9
//   Explanation: 9 + 9 = 18, then 1 + 8 = 9.

// ----- E4. Happy Number  (LeetCode 202) -----
// Replace happyNum by the sum of the squares of its digits, repeat.
// Log true if it reaches 1, false otherwise.
// Hint (no arrays): an unhappy number always reaches 4 — loop while
// happyNum !== 1 && happyNum !== 4.
let happyNum = 19;
let currentHappy = happyNum;
while (currentHappy !== 1 && currentHappy !== 4) {
let sum = 0;
let temp = currentHappy;
while (temp > 0) {
let digit = temp % 10;
sum = sum + (digit * digit);
temp = Math.floor(temp / 10);
}
currentHappy = sum;
}
console.log(currentHappy === 1);

// EXAMPLE 1:  Input: happyNum = 19   Output: true
//   Explanation: 1²+9²=82, 8²+2²=68, 6²+8²=100, 1²+0²+0²=1. Reached 1.
// EXAMPLE 2:  Input: happyNum = 2    Output: false
//   Explanation: 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> ... loops, never reaches 1.
// EXAMPLE 3:  Input: happyNum = 7    Output: true
//   Explanation: 7 -> 49 -> 97 -> 130 -> 10 -> 1. Reached 1.

// ----- E5. Number of 1 Bits / Hamming Weight  (LeetCode 191) -----
// Given a non-negative integer bitsNum, log how many 1s are in its binary form.
// Hint: while bitsNum > 0, add (bitsNum % 2) to a count, then Math.floor(/2).
let bitsNum = 11;
let bitCount = 0;
let tempBitsNum = bitsNum;
while (tempBitsNum > 0) {
bitCount = bitCount + (tempBitsNum % 2);
tempBitsNum = Math.floor(tempBitsNum / 2);
}
console.log(bitCount);

// EXAMPLE 1:  Input: bitsNum = 11    Output: 3
//   Explanation: 11 in binary is 1011, which has three 1s.
// EXAMPLE 2:  Input: bitsNum = 128   Output: 1
//   Explanation: 128 in binary is 10000000, which has one 1.
// EXAMPLE 3:  Input: bitsNum = 7     Output: 3
//   Explanation: 7 in binary is 111, which has three 1s.

// ----- E6. Power of Three  (LeetCode 326) -----
// Given an integer powNum, log true if it is a power of 3 (3^0=1, 3^1=3, ...),
// else false. Hint: while powNum % 3 === 0, divide it by 3; check if it ends at 1.
let powNum = 27;
let tempPowNum = powNum;
if (tempPowNum <= 0) {
console.log(false);
} else {
while (tempPowNum % 3 === 0) {
tempPowNum = Math.floor(tempPowNum / 3);
}
console.log(tempPowNum === 1);
}

// EXAMPLE 1:  Input: powNum = 27   Output: true
//   Explanation: 27 = 3 × 3 × 3 = 3³, so it is a power of three.
// EXAMPLE 2:  Input: powNum = 0    Output: false
//   Explanation: no power of three equals 0.
// EXAMPLE 3:  Input: powNum = 45   Output: false
//   Explanation: 45 = 9 × 5; the factor 5 means it is not a power of three.

// ----- E7. Length of Last Word  (LeetCode 58) -----
// Given a string lastWordStr that may have trailing spaces, log the length of
// the LAST word. Hint: walk from the end — skip trailing spaces, then count
// letters until the next space.
let lastWordStr = "Hello World";
let lastWordLength = 0;
let index = lastWordStr.length - 1;
while (index >= 0 && lastWordStr[index] === " ") {
index--;
}
while (index >= 0 && lastWordStr[index] !== " ") {
lastWordLength++;
index--;
}
console.log(lastWordLength);

// EXAMPLE 1:  Input: lastWordStr = "Hello World"    Output: 5
//   Explanation: the last word is "World", which has 5 letters.
// EXAMPLE 2:  Input: lastWordStr = "   fly me   "   Output: 2
//   Explanation: ignore trailing spaces; the last word is "me" (2 letters).
// EXAMPLE 3:  Input: lastWordStr = "a"              Output: 1
//   Explanation: the only word is "a", length 1.

// ----- E8. Valid Palindrome (lowercase, no spaces)  (LeetCode 125 lite) -----
// Given a string palinStr, log true if it reads the same forwards and backwards.
// Hint: two counters — left = 0, right = palinStr.length - 1 — move inward.
let palinStr = "racecar";
let left = 0;
let right = palinStr.length - 1;
let isValidPalin = true;
while (left < right) {
if (palinStr[left] !== palinStr[right]) {
isValidPalin = false;
break;
}
left++;
right--;
}
console.log(isValidPalin);

// EXAMPLE 1:  Input: palinStr = "racecar"   Output: true
//   Explanation: reversed it is still "racecar".
// EXAMPLE 2:  Input: palinStr = "hello"     Output: false
//   Explanation: reversed it is "olleh", which differs from "hello".
// EXAMPLE 3:  Input: palinStr = "abba"      Output: true
//   Explanation: position 0 matches 3 (a/a) and 1 matches 2 (b/b).

// ----- E9. Climbing Stairs  (LeetCode 70) -----
// You can climb 1 or 2 steps at a time. Given stairsNum steps, log how many
// distinct ways to reach the top. (It is the Fibonacci pattern.)
let stairsNum = 5;
if (stairsNum <= 1) {
console.log(1);
} else {
let prev2 = 1;
let prev1 = 2;
for (let i = 3; i <= stairsNum; i++) {
let current = prev1 + prev2;
prev2 = prev1;
prev1 = current;
}
console.log(prev1);
}

// EXAMPLE 1:  Input: stairsNum = 2   Output: 2
//   Explanation: two ways — (1+1) or (2).
// EXAMPLE 2:  Input: stairsNum = 3   Output: 3
//   Explanation: three ways — (1+1+1), (1+2), (2+1).
// EXAMPLE 3:  Input: stairsNum = 5   Output: 8
//   Explanation: the counts follow Fibonacci: 1,2,3,5,8 for 1..5 steps.

// ----- E10. Sqrt(x)  (LeetCode 69) -----
// Given a non-negative integer sqrtNum, log the integer part of its square root
// (round down). Do NOT use Math.sqrt. Hint: loop i up while i * i <= sqrtNum.
let sqrtNum = 8;
let sqrtResult = 0;
while ((sqrtResult + 1) * (sqrtResult + 1) <= sqrtNum) {
sqrtResult++;
}
console.log(sqrtResult);

// EXAMPLE 1:  Input: sqrtNum = 8    Output: 2
//   Explanation: √8 ≈ 2.82; rounded down it is 2 (since 2×2=4 ≤ 8 < 3×3=9).
// EXAMPLE 2:  Input: sqrtNum = 16   Output: 4
//   Explanation: √16 = 4 exactly (4×4=16).
// EXAMPLE 3:  Input: sqrtNum = 1    Output: 1
//   Explanation: √1 = 1.

// ----- E11. Excel Sheet Column Number  (LeetCode 171) -----
// Columns go A=1, B=2, ... Z=26, AA=27, AB=28, ... Given an uppercase string
// excelStr, log its column number. Hint: alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for each char, result = result * 26 + (alphabet.indexOf(char) + 1).
let excelStr = "AB";
let excelResult = 0;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < excelStr.length; i++) {
excelResult = excelResult * 26 + (alphabet.indexOf(excelStr[i]) + 1);
}
console.log(excelResult);

// EXAMPLE 1:  Input: excelStr = "A"    Output: 1
//   Explanation: A is the 1st column.
// EXAMPLE 2:  Input: excelStr = "AB"   Output: 28
//   Explanation: A=1 -> 1×26 + B(2) = 26 + 2 = 28.
// EXAMPLE 3:  Input: excelStr = "ZY"   Output: 701
//   Explanation: Z=26 -> 26×26 + Y(25) = 676 + 25 = 701.

// ----- E12. Ugly Number  (LeetCode 263) -----
// An ugly number is positive and its only prime factors are 2, 3, and 5.
// Given uglyNum, log true if ugly, else false. Hint: while divisible by 2 -> /2,
// then by 3, then by 5; ugly if you end at exactly 1.
let uglyNum = 6;
let tempUgly = uglyNum;
if (tempUgly <= 0) {
console.log(false);
} else {
while (tempUgly % 2 === 0) {
tempUgly = Math.floor(tempUgly / 2);
}
while (tempUgly % 3 === 0) {
tempUgly = Math.floor(tempUgly / 3);
}
while (tempUgly % 5 === 0) {
tempUgly = Math.floor(tempUgly / 5);
}
console.log(tempUgly === 1);
}

// EXAMPLE 1:  Input: uglyNum = 6    Output: true
//   Explanation: 6 = 2 × 3; only the factors 2 and 3.
// EXAMPLE 2:  Input: uglyNum = 14   Output: false
//   Explanation: 14 = 2 × 7; the factor 7 is not allowed.
// EXAMPLE 3:  Input: uglyNum = 1    Output: true
//   Explanation: 1 has no prime factors, which counts as ugly.

// ----- E13. Factorial Trailing Zeroes  (LeetCode 172) -----
// Given zeroN, log how many trailing zeros are in zeroN! (zeroN factorial).
// Hint: it equals floor(zeroN/5) + floor(zeroN/25) + ... — loop dividing a
// counter by 5 each turn and summing.
let zeroN = 5;
let trailingZeroes = 0;
let tempZeroN = zeroN;
while (tempZeroN >= 5) {
tempZeroN = Math.floor(tempZeroN / 5);
trailingZeroes = trailingZeroes + tempZeroN;
}
console.log(trailingZeroes);

// EXAMPLE 1:  Input: zeroN = 5    Output: 1
//   Explanation: 5! = 120, which ends in one zero.
// EXAMPLE 2:  Input: zeroN = 3    Output: 0
//   Explanation: 3! = 6, which has no trailing zero.
// EXAMPLE 3:  Input: zeroN = 10   Output: 2
//   Explanation: 10! = 3628800, which ends in two zeros (floor(10/5)=2).

// ----- E14. Steps to Reduce a Number to Zero  (LeetCode 1342) -----
// While stepsNum > 0: if even -> stepsNum = stepsNum / 2, else -> stepsNum -= 1.
// Count the steps to reach 0. Log the count.
let stepsNum = 14;
let stepsCount = 0;
let tempStepsNum = stepsNum;
while (tempStepsNum > 0) {
if (tempStepsNum % 2 === 0) {
tempStepsNum = tempStepsNum / 2;
} else {
tempStepsNum = tempStepsNum - 1;
}
stepsCount = stepsCount + 1;
}
console.log(stepsCount);

// EXAMPLE 1:  Input: stepsNum = 14    Output: 6
//   Explanation: 14->7->6->3->2->1->0 = 6 steps (/2, -1, /2, -1, /2, -1).
// EXAMPLE 2:  Input: stepsNum = 8     Output: 4
//   Explanation: 8->4->2->1->0 = 4 steps.
// EXAMPLE 3:  Input: stepsNum = 123   Output: 12
//   Explanation: it takes 12 even-halve / odd-subtract steps to reach 0.

// ----- E15. Subtract Product and Sum of Digits  (LeetCode 1281) -----
// Given prodSumN, compute (product of its digits) - (sum of its digits) and log it.
// Hint: product starts at 1, sum starts at 0; peel digits with % 10 and Math.floor(/10).
let prodSumN = 234;
let digitProduct = 1;
let digitSum = 0;
let tempProdSumN = prodSumN;
if (tempProdSumN === 0) {
digitProduct = 0;
digitSum = 0;
} else {
while (tempProdSumN > 0) {
let digit = tempProdSumN % 10;
digitProduct = digitProduct * digit;
digitSum = digitSum + digit;
tempProdSumN = Math.floor(tempProdSumN / 10);
}
}
console.log(digitProduct - digitSum);

// EXAMPLE 1:  Input: prodSumN = 234    Output: 15
//   Explanation: product 2×3×4 = 24, sum 2+3+4 = 9, 24 - 9 = 15.
// EXAMPLE 2:  Input: prodSumN = 4421   Output: 21
//   Explanation: product 4×4×2×1 = 32, sum 4+4+2+1 = 11, 32 - 11 = 21.
// EXAMPLE 3:  Input: prodSumN = 9      Output: 0
//   Explanation: product 9, sum 9, 9 - 9 = 0.

/* ============================================================
CHALLENGE (optional) — Star triangle (nested loops)
============================================================ */

// ----- Star triangle -----
// Loop row 1..starRows. Build a line of "" with an inner loop, then log the line.
let starRows = 5;
for (let row = 1; row <= starRows; row++) {
let line = "";
for (let col = 1; col <= row; col++) {
line = line + "";
}
console.log(line);
}

// TEST 1:  starRows = 5  ->  *
//                            
//                            ***
//                            ****
//                            *****
// TEST 2:  starRows = 3  ->  *
//                            
//                            ***
// TEST 3:  starRows = 1  ->  *