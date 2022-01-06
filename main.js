//loop through arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        iscompleted:true
    },
    {
        id: 2,
        text: 'do 300 pushups',
        iscompleted: true
    },
    {
        id: 1,
        text: 'Take a shower',
        iscompleted: true
    }
];

for (let i = 0; i < todos.length; i++ ){
    console.log(todos[i].text);
};