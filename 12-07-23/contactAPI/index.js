import express from "express"
import fs from "node:fs/promises"

const app = express()
const PORT = 3001
const contacts = []
const pathData = new URL('./data/contacts.json', import.meta.url)

app.use(express.json())

app.get('/contacts', (req, res) => {
    res.json(contacts)
})

let newId = 0;
const getId = (newPost) => {
    newId = newId + 1
    newPost.id = newId
}

app.post('/contacts', (req, res) => {
    const { name, telefonnummer, email } = req.body
    const newContact = {name, telefonnummer, email}
    getId(newContact)
    contacts.push(newContact)
    res.json(newContact)
    fs.writeFile(pathData, JSON.stringify(contacts, null, 2), {encoding: "utf8"})
})

app.get('/contacts/:id', (req, res) => {
    const id = Number(req.params.id);
    const contactById = contacts.find((contact) => contact.id === id)
    res.json(contactById)
})

app.put('/contacts/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, telefonnummer, email } = req.body
    let editedContact = contacts.find((contact) => contact.id === id)
    editedContact = {name, telefonnummer, email, id}
    contacts.map((contact, index, arr) => {
        if(contact.id === id){
            arr.splice(index, 1, editedContact)
        }
    })
    res.json(editedContact)
    fs.writeFile(pathData, JSON.stringify(contacts, null, 2), {encoding: "utf8"})
})

app.delete('/contacts/:id', (req, res) => {
    const id = Number(req.params.id);
    contacts.map((contact, index, arr) => {
        if(contact.id === id){
            arr.splice(index, 1)
        }
    })
    fs.writeFile(pathData, JSON.stringify(contacts, null, 2), {encoding: "utf8"})
    res.send("deleted contact")
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))