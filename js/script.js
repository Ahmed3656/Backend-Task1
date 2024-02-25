const yargs = require("yargs")
const functions = require("./functions")

yargs.command ({
    command:"add",
    describe:"add items to data1",
    builder:{
        id:{
            describe:"id",
            demandOption:true,
            type:"number"
        },
        fname:{
            describe:"fname",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"lname",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"age",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"city",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        let person = {
            id:x.id,
            fname:x.fname,
            lname:x.lname,
            age:x.age,
            city:x.city
        }

        functions.add(person)
    }
})

yargs.command ({
    command:"del",
    describe:"delete items from data1",
    builder:{
        id:{
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        let id = x.id

        functions.remove(id)
    }
})

yargs.command ({
    command:"display",
    describe:"display a person using their id",
    builder:{
        id:{
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        let id = x.id

        functions.display(id)
    }
})

yargs.command ({
    command:"listPeople",
    handler:()=>{
        functions.listPeople()
    }
})

yargs.parse()
// console.log(yargs.argv)