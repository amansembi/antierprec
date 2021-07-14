const fs = require('fs')
const getNotes = ()=>{
    return 'Testing add notes'
}
const  addNotes = (title, body)=>{
    const notes = loadNotes()
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)

}

const saveNotes = (notes)=>{
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('nodejs.json',datajson)

}
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('nodejs.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return [];
    }
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}