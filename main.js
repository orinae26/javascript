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
        id: 3,
        text: 'Take a shower',
        iscompleted: false
    }
];
//High order array methods
//map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
