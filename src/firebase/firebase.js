import * as firebase from 'firebase';

//provider -authenticaton for google, fb, etc.

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

//set
//updates
//remove
//read - once / on
//push - automatically generates the id.


// const expenses = [{
//   descripion: 'Rent',
//   amount: 5000,
//   note: '',
//   createdAt: 1000
// }, {
//   descripion: 'Gas',
//   amount: 500,
//   note: '',
//   createdAt: 2000
// }, {
//   descripion: 'Water bill',
//   amount: 2500,
//   note: '',
//   createdAt: 4000
// }]

// const expensesRef = database.ref('expenses');
// expensesRef.on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// expensesRef.on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// expensesRef.on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// expenses.forEach(expense => database.ref('expenses').push(expense));

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((expenseSnapshot, key) => {
//       expenses.push({
//         id: expenseSnapshot.key,
//         ...expenseSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });










// database.ref("notes/-LC6xMONr-vU5JPhH5DW").remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const message = `${val.name} is a ${val.job.title} at ${val.job.company}.`;
//   console.log(message);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });


// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Errror fetching data', e.message)
//   })

// database.ref().set({
//   name: 'Jasser Mark',
//   age: 26,
//   stressLevel: 5,
//   isSingle: false,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });



// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed from db');
//   }).catch((e) => {
//     console.log('Error ', e.message);
//   });