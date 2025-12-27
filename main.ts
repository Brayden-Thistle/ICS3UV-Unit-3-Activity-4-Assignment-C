/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-27
 * @fileoverview this program asks the user for their name, age and whether they are a student
 */

//variables
const Name = prompt("What is your name?");
const Age = Number(prompt("How old are you?"));
const Student = prompt("Are you a student? (true or false):");

//if else statement along with outputs
if (Student === "true" && Age >= 13 && Age <= 19) {
  console.log(`Student ${Name} is a teenager.`);
} if (Student === "true" && Age >= 5 && Age <= 12) {
  console.log(`Student ${Name} is a child.`);
} if (Student === "false" && Age >= 20 && Age <= 30) {
  console.log(`${Name} is a young adult`);
} else {
  console.log(`${Name} is in a different life stage.`);
}

console.log("\nDone.");