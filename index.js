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

// ----- 22. Glue two numbers -----
// a = 12, b = 34. Number(String(a) + String(b)) -> 1234. Log it, then log typeof the result.

// ----- 23. Pad the clock -----
// minute (0–59). if String(minute).length === 1 add "0" in front. Log like "05" or "42".
// Test 5 and 42.

// ----- 24. Cents to price tag -----
// cents (3+ digit number like 150). s = String(cents).
// rest = s.slice(s.length - 2); dollars = s.slice(0, s.length - 2).
// Log "$" + dollars + "." + rest -> "$1.50". Test 150 and 905.

// ----- 25. Is this string a number? -----
// input (string like "42" or "hello"). if isNaN(Number(input)) -> "Invalid input";
// otherwise turn it into a number, double it, log the result. Test "21" and "abc".

/* ============================================================
   End of workbook. Nice work!
   ============================================================ */
