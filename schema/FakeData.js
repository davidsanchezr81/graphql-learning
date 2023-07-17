const UserList = [
{
    id:1,
    name: "John",
    username:"john wick",
    age:20,
    nationality:"Canada",
    friends: [
        {
            id:2,
            name: "Maria",
            username:"maria la del barrio",
            age:14,
            nationality:"Venezuela"
        },
        {
            id:3,
            name: "Pedro",
            username:"Pedro Navaja",
            age:23,
            nationality:"Colombia"
        },
    ]
},
{
    id:2,
    name: "Maria",
    username:"maria la del barrio",
    age:14,
    nationality:"Venezuela"
},
{
    id:3,
    name: "Pedro",
    username:"Pedro Navaja",
    age:23,
    nationality:"Colombia"
},
];

const MovieList = [
    {
        id: 1,
        name: "Avengers",
        yearOfPublication: 2019,
        isInTheaters: true
        
    },
    {
        id: 2,
        name: "Avengers II",
        yearOfPublication: 2020,
        isInTheaters: false
        
    },
    {
        id: 3,
        name: "Avengers III",
        yearOfPublication: 2021,
        isInTheaters: true
        
    },
    ] 

module.exports = { UserList, MovieList };