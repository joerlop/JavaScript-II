// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const yourMajesty = function() {
  let majesty = "Roger Federer";
  console.log(`Your majesty is ${majesty}`);
  debugger;

  const grandSlams = function() {
    console.log(`${majesty} has the all-time record of Grand Slam titles`);
    debugger;

    const masters = function() {
      console.log(`${majesty} has the all-time record of Masters 1000 titles`);
      debugger;
    }
    
    masters();
  }

  grandSlams();
}

yourMajesty();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
