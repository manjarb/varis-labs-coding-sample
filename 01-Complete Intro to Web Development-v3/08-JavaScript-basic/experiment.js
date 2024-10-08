// Variable
// var monthlyRent = 500;
// monthlyRent = 'baci'

let monthlyRent = 1000;

const firstName = 'Varis';
const lastName = 'First';

const fullName = firstName + " " + lastName;

const rentPeriod = 13;
const totalRent = monthlyRent * rentPeriod;

// console.log(totalRent, ': totalRent', ' :final');
const lightIsOn = true;
const lightIsOff = false;

// Control flow
if (monthlyRent === 1200) {
  // console.log(1)
} else if (monthlyRent === 900) {

} else if (monthlyRent === 800) {

} else if (monthlyRent === 700) {

} else if (monthlyRent === 900) {

}

// switch (monthlyRent) {
//   case 1200:
//     console.log(1)
//     break;
//   case 1000:
//     console.log(2)
//     break;
//   case 800:
//     console.log(3)
//     break;
//   default:
//     break;
// }

// Loop
let friendsAtTheParty = 0;
// friendsAtTheParty = friendsAtTheParty + 1;
// friendsAtTheParty = friendsAtTheParty + 1;
// friendsAtTheParty = friendsAtTheParty + 1;
// friendsAtTheParty = friendsAtTheParty + 1;
// friendsAtTheParty = friendsAtTheParty + 1;
// friendsAtTheParty = friendsAtTheParty + 1;

// 10
// 0 .. 9

for (let i = 0; i < 10;i++) {
  // before
  // 1st i = 0; friendsAtTheParty = 0;
  // 2nd i = 1; friendsAtTheParty = 1;
  // friendsAtTheParty = friendsAtTheParty + 1;

  // after
  // 1st i = 1; friendsAtTheParty = 1;
  // 2nd i = 2; friendsAtTheParty = 2;
}

// while (friendsAtTheParty < 10) {
//   friendsAtTheParty = friendsAtTheParty - 1;
// }

// console.log(friendsAtTheParty, ' :friendsAtTheParty')

const result = addTwo(6);
// console.log(result);

function addAnything(number, value) {
  return number + value;
}

// Function
// 5 + 2 -> 7
function addTwo(number) {
  const result = addAnything(number, 2);
  return result;
}

// console.log(addTwo(5)) // 7
// console.log(addTwo(10)) // 12

function logMyFullName(firstName, lastName) {
  console.log('My Fullname is ' + firstName + " " + lastName);
}

// logMyFullName("Varis", "Dara")

const meow = function () {
  console.log('meow meow')
}

// meow()
// Arrow function
const chirp = () => {
  console.log("arrow function")
}

// chirp()

// Scope

function addFive(number) {
  const value = 5;
  return number + value;
}

let A = 'A';

function doStuff() {
  A = 'AAAA'
  const B = 'B'
}

doStuff();
console.log(A); // AAAA
// console.log(B); // Error

let E = 0;
while (E < 3) {
  E++;
  const G = 'G'
}

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

const number = 5.3;
const roundedNumber = Math.round(number);
// console.log(roundedNumber, ' :roundedNumber')

const date = new Date();
// console.log(date, ' :date')

// Object
const varis = {
  firstName: 'Varis',
  lastName: 'Dara 2',
  age: 34,
  isThai: true,
  bio: {
    from: 'Bkk',
    house: 'CNX'
  },
  logMyFullName() {
    // console.log("Varis Dara");
    console.log(this.firstName + " " + this.lastName)
  }
}

// console.log(varis)
// console.log(varis.firstName)
// console.log(varis['firstName'])
// console.log(varis.anything)
// console.log(varis.bio.house)
// console.log(varis['bio']['house'])

function isOld(person) {
  if (person.age > 30) {
    console.log('He is old')
  }
}

// isOld(varis)
// varis.logMyFullName()

// Array
const daysOfTheWeek = [
  'Mon', // 0
  'Tue', // 1
  'Wed', // 2
  'Thurs', // 3
  'Fri', // 4
  'Sat', // 5
  'Sun', // 6
]

const members = []

// console.log(daysOfTheWeek[5])
// console.log(daysOfTheWeek.length)
// console.log(daysOfTheWeek.join(' | '))

daysOfTheWeek.push('Special day')
daysOfTheWeek.splice(1, 2)
// console.log(daysOfTheWeek, ' :daysOfTheWeek');

// The DOM
