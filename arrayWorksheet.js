const characters = [
    {
        name : 'Luke Skywalker',
        height : '172',
        mass : '77',
        eye_color: 'blue',
        gender : 'male',
},

{
    name : 'Darth Vader',
    height : '172',
    mass : '136',
    eye_color : 'yellow',
    gender : 'male',
}, 

{
    name : 'Leia Organa',
    height : '150',
    mass : '49',
    eye_color : 'brown',
    gender : 'female',
},

{
    name : 'Anakin Skywalker',
    height : '188',
    mass : '84',
    eye_color : 'blue',
    gender : 'male'
}

];


// const greater100Characters = characters.filter ((character) => {
//     return character.name > 100
// })

// console.log(greater100Characters);

// const greater100Characters = characters.filter ((campudus) => {
//     return campudus.eye_color === "blue"
// })

// console.log(greater100Characters);

// const greater100Characters = characters.filter ((bredets) => {
//     return bredets.gender !== "male"
// })

// console.log(greater100Characters);

const greater100Characters = characters.map( (kunnu) => {
    return {
        name: kunnu.name,
        height : kunnu.height
    }
})
console.log(greater100Characters);