const fs = require('fs')
const book = {
    title:'Ego is the enemy',
    author:'Ryon Holidays'
 }
 
 const bookJson = JSON.stringify(book)
 fs.writeFile('data.json',bookJson,(e)=>{
     if(e) throw e;
     console.log('Write file')
 })

fs.readFile('data.json',(e, data)=>{
    if(e){
        console.log('file note exit')
    }else{
        console.log(data)
        const parseResult = JSON.parse(data)
        console.log(parseResult.title)
    }
    
})
const result = fs.readFileSync('data.json')

// const data1 = result.toString()
// console.log(data1) 