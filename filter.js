const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get characters with mass greater than 100
// const greaterMassCharacter = characters.filter( character => {
//     return character.mass > 100
// })
// // console.log(greaterMassCharacter)

// // Get characters with height less than 200
// const heightless = characters.filter (character =>{
//     return character.height < 200
// })
// console.log(heightless)

// Get all male characters
// const maleCharacter = characters.filter(character => character.gender === "male")
// console.log(maleCharacter)
const maleCharacter = characters.filter(character =>{
    return character.gender === "male"
})
console.log(maleCharacter)
// Get all female characters
const maleCharacter = characters.filter(character =>{
    return character.gender === "female"
})