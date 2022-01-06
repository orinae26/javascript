
console.log("hello world")

// jSON.stringify

const todos =[
    {
        id: 1,
        text: "take out trash",
        iscompleted: true
    },
    {
        id: 2,
        text: "do 30 sit ups",
        iscompleted: true
    },
    {
        id: 1,
        text: "take a shower",
        iscompleted: true
    }
];

//JSON.stringify(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loops 

for(let i = 0; i<10; i++){

    console.log(i);

};