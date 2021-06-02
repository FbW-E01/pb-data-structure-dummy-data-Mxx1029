const arrayOfDummyData = [];

const getRandomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateDummyData = (year, month, dayStart, dayEnd, arrayofSalespersons) => {
    for (let i = dayStart; i <= dayEnd; i++) {
        const randomNumberofPurchases = getRandomBetween(50, 700);
        for (let j = 0; j <= randomNumberofPurchases; j++ ) { 
            let randomHour = getRandomBetween(8, 19);
            if (randomHour < 10) {
                randomHour = "0" + randomHour;
            };

            let randomMinutes = getRandomBetween(0, 59);
            if (randomMinutes < 10) {
                randomMinutes = "0" + randomMinutes;
            };

            let randomSeconds = getRandomBetween(0, 59);
            if (randomSeconds < 10) {
                randomSeconds = "0" + randomSeconds;
            };

            const obj = {};

            obj.time = randomHour + ":" + randomMinutes + ":" + randomSeconds + " " + i + "." + month + "." + year;

            obj.totalPrice = parseFloat(getRandomBetween(0.50, 100.00).toFixed(2));

            const currentPerson = arrayofSalespersons[Math.floor(Math.random() * arrayofSalespersons.length)];
            obj.salespersons = currentPerson;
            arrayOfDummyData.push(obj); 
            
        };
        // you would need to sort the data, but that would be quote complicated, as you need to change the whole format starting with year, month, day, hours, minutes, seconds - so the output would look different.
        // I don't think that's the goal for the dummy data, so I'm not doing that :) but here's an approach that would sort by time, but then jumble around the dates
        // arrayOfDummyData.sort((a,b) => {
        //     if (a.time > b.time) return 1;
        //     if (a.time === b.time) return 0;
        //     if (a.time < b.time) return -1;
        // });
    };
    
    return arrayOfDummyData;
};

const dummyDataForFirstWeekOfDecember2020 = generateDummyData(2020, 12, 1, 7, ["Ahmad", "Xiaofeng", "Ianto"]);

console.log(dummyDataForFirstWeekOfDecember2020);


// Coding together with Joel :) Not related to task above!


// const ourClass = [
//     'Abdulkader', 'Alexandru', 'André', 'Carsten', 'Dagmawi', 'Ferdinand', 'Gary', 'Joseph', 'Kai', 'Kalaya', 
//     'Karin', 'Khushal', 'Lars', 'Lea', 'Maria', 'Mario', 'Maxie', 'Ronnie', 'Rudesh',
// ];

// const randomizeClassMates = (arrayOfNames) => {
//     const randomizedNames = [];
//     const classRange = arrayOfNames.length;
//     for (i = 0; i < classRange; i++) {
//         const currentNumber = Math.floor(Math.random() * arrayOfNames.length);
//         randomizedNames.push(arrayOfNames.splice(currentNumber, 1)[0]);
//     };
//     return randomizedNames;
// };

// console.log(randomizeClassMates(ourClass));


// function sendMessage(username, message, ...args) {
//     if (args.length > 0) {
//         console.error("Too many arguments, remove extras: ", args);
//         return;
//     }
//     console.log(`<${username}>: ${message}`);
// }
// sendMessage("Badger", "Mushroom", "Snake", "Lemon");


// Object destructuring
// const user = { id: 11, username: "Cool Zero", email: null, };

// const { id, username } = user;
// console.log(username);

// const printUsername = ({ id: uID, username }) => { console.log(uID, username) };
// printUsername(user);

// Array destructuring
// const fruit = ["Apple", "Pear", "Banana", "Mango", "Strawberry", "Chainsaw"];

// const [ bestFruit, secondBestFruit, ...theRest ] = fruit;
// console.log(bestFruit);
// console.log(secondBestFruit);
// console.log(theRest);

// CLASSES review
// often 1 class per file

// class User {
//     username; //  not needed but nice for reading     
//     role;
//     activated;
//     password = '*****'; // you can declare properties and defult values here, too.

//     constructor(username, role = "NormalUser") {
//         console.log("Creating new user using the User class");
//         this.username = username;
//         this.role = role;
//         this.activated = false; // default value that will always be there in every instance
//     }

//     activate() {
//         this.activated = true;
//     }

//     login() {
//         if (this.activated) {
//             console.log(`User ${this.username} is loggin in!`);
//             return true;
//         }

//         console.log(`User ${this.username} not activated, blocking their login!`);
//         return false;
//     }
// };

// class Writer extends User {
//     constructor(username) {
//         super(username, "WriterUser"); // always give this role to every new writer
//         this.activated = true; // overwriting parent default value;
//         this.posts = []; // adding new properties that the parent doesn't have
//     }

//     login() {
//         console.log("Writer login for user " + this.username); // overwriting parent method
//     }
// }

// const writer = new Writer("john712");
// console.log(writer);
// writer.login();

// const user = new User("jane125");
// const myObject = {};
// console.log(user instanceof User);
// console.log(myObject instanceof User);
// user.activate();
// user.login();
// console.log(user);


