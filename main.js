
// object literals

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    hobbies: ["music","movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    },
};

//print the first andsecond name
console.log(person.firstName,person.lastName);

//print 2nd hobby
console.log(person.hobbies[1]);

// print city
console.log(person.address.city);

//destructuring
const{firstName, lastName, address:{city}} = person;

//print destructured values
console.log (firstName, lastName, city);
//add property
person.email = "johndoe@gmail.com";

//print new property
console.log(person.email);



