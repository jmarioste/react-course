// console.log('destructuring');

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['55 Sindulan Street', 'Mabolo', 'Cebu City', '6000'];

const [street, city, state = 'New York', zip] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}.`);