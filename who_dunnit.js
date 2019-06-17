// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// This should output "The murderer is Miss Scarlet" to the console since
// the functions are scoped to the same level.
//
// -----------------------------------------------------------------------------
// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// This should throw an assignment type error when we invoke the changeMurderer
// function since this tries to assign the murderer to "Mrs Peacock" when we have
// already declared the murderer to be constant and assigned to "Professor Plum"
//
// -----------------------------------------------------------------------------
// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// The first console log will output "First Verdict: The murderer is Mrs Peacock"
// since firstVerdict is assigned to the output of the declareMurderer call which
// returns Mrs. Peacock in the string interpolation. The murderer is assigned to
// Mrs. Peacock inside the function block.
//
// The second console log will output "Second Verdict: The murderer is Professor Plum"
// since secondVerdict is assigned with the string interpolation of murderer which
// remains Professor Plum as the one inside the function is only scoped inside the
// function block.
//
// -----------------------------------------------------------------------------
// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The first console log will output "The suspects are Miss Scarlet, Professor Plum
// Colonel Mustard." since suspect three is overridden inside the function block
// and the other two are still within the scope of the initial variable declaration
//
// The second console log will output "Suspect three is Mrs. Peacock" since the
// variable inside the function block is restricted to just inside the function
//
// -----------------------------------------------------------------------------
// Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The output will be "The weapon is the revolver." since the object may be constant
// but we can stil reassign the weapon property of the object to something else.
//
// -----------------------------------------------------------------------------
// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The output will be "The murderer is Mrs White." since the scope is not
// restricted to the function blocks so the reassignments persist outside of
// the functions.
//
// -----------------------------------------------------------------------------
// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The output will be "The murderer is Mr. Green." since the reassignments in
// plotTwist onwards are restricted to just those blocks. Only the reassignment
// to Mr. Green will persist after the changeMurderer call.
//
// -----------------------------------------------------------------------------
// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// The output will be "The weapon is Candle Stick." since .room is reassigned to
// "Dining Room" first then plotTwist will reassign .murderer to "Colonel Mustard"
// and finally unexpectedOutcome will reassign .weapon to "Candle Stick"
//
// -----------------------------------------------------------------------------
// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The output will be "The murderer is Professor Plum." since the assignment of
// murderer inside the if statement is just restricted to that block.
//
// -----------------------------------------------------------------------------
// Episode 10 - Extension

const scenario = {
  murderer: "Colonel Mustard",
  room: "Kitchen",
  weapon: "Rope"
};

const changeScenario = function () {
  scenario.murderer = "Miss Scarlet";
  scenario.room = "Lounge";

  const plotTwist = function () {

    const unexpectedOutcome = function () {
      if (scenario.room === "Lounge") {
        scenario.weapon = "Revolver";
      }
    }

    unexpectedOutcome();

    var scenario = {
      murderer: "Mrs Peacock",
      room: "Study",
      weapon: "Lead Pipe"
    };

  }

  plotTwist();

}

const declareAccusation = function () {
  return `It was ${scenario.murderer} with the ${scenario.weapon} in the ${scenario.room}.`;
}

changeScenario();
const verdict = declareAccusation();
console.log(verdict);

// Throws type error cannot read property room
