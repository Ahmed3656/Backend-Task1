const fs = require("fs")


const add = (person) =>{
    const people = readData()
    let found = people.find((person1)=>person1.id===person.id)

    if(found){
        console.log("You have entered a person with a duplicated id")
    }else{
        people.push(person)
        writeData(people)
        console.log("person added successfully")
    }
}

const remove = (id) =>{
    const people = readData()
    let found = people.find((person)=> person.id === id)

    if(found){
        let filteredPeople = people.filter((person)=> person.id!==id)
        writeData(filteredPeople)
        console.log("person removed successfully")
    }else {
        console.log("No one has this id")
    }
}

const display = (id) =>{
    const people = readData()
    let found = people.find((person)=> person.id === id)

    if(found){
        console.log(found)
    }else {
        console.log("No one found with this id")
    }
}

const readData = () =>{
    try{
        return JSON.parse(fs.readFileSync("data1.json").toString())
    }
    catch{
        return []
    }
}

const listPeople = () =>{
    const people = readData()
    console.log(people)
}

const writeData = (people) =>{
    fs.writeFileSync("data1.json", JSON.stringify(people))
}

module.exports = {
    add,
    remove,
    display,
    listPeople
}