// Filter is Used to Check True Or False
const myNumn=[1,2,3,4,5,6,7,8,9,10]
const NewNumb=myNumn.filter( (num) =>(num>4) )
//console.log(NewNumb);


//Execrise
const book = [
    {
        "name": "The Girl with the Dragon Tattoo",
        "genre": "crime",
        "year": 2005
    },
    {
        "name": "In the Garden of Beasts",
        "genre": "history",
        "year": 2011
    },
    {
        "name": "The Thorn Birds",
        "genre": "romance",
        "year": 1977
    },
    {
        "name": "The Godfather",
        "genre": "crime",
        "year": 1969
    },
    {
        "name": "The Nightingale",
        "genre": "history",
        "year": 2015
    },
    {
        "name": "Gone with the Wind",
        "genre": "romance",
        "year": 1936
    },
    {
        "name": "The Silence of the Lambs",
        "genre": "crime",
        "year": 1988
    },
    {
        "name": "The Romanov Prophecy",
        "genre": "history",
        "year": 2004
    },
    {
        "name": "Pride and Prejudice",
        "genre": "romance",
        "year": 1813
    },
    {
        "name": "The Da Vinci Code",
        "genre": "crime",
        "year": 2003
    }
]
let UserBook=book.filter( (bk) => bk.genre==="crime"&& bk.year<2011)
//console.log(UserBook);

// Chaining Method

const Numbs=[1,2,3,4,5,6,7,8,9,10]
const Numb= Numbs.map( (nums) => nums*10 )
                .map((nums)=>nums+10)
                .filter((nums)=>nums>40)


//console.log(Numb);

// reduce 

const Three=[1,2,3]
const total=Three.reduce( (acc,cv)=> {
    console.log(`acc:${acc} cv${cv}`);
    return acc+cv
},0)
console.log(`total is ${total}`);