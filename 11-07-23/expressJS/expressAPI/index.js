import express from "express"
import fs from "node:fs/promises"

const app = express()
const PORT = 9898
const API = `https://jsonplaceholder.typicode.com/posts`
let postsData = []

app.listen(PORT, () => console.log("ich bin ready"))

app.get('/', (req, res) => {
    res.send('Hallo Welt')
    res.end()
})

// ----------------------------------------------------------------

// Level 1

app.get('/status', (req, res) => {
    res.status(200).send('OK')
    res.end()
})

// ----------------------------------------------------------------

// ein Beispiel ohne dynamische Einbindung (Level 2 und 3):

// app.get('/posts', async (req, res) => {
//     await fetch(API).then(res => res.json()).then(data => postsData = data).catch(err => console.log(err))
//     res.json(postsData)
//     res.end()
// })

// const APISinglePost = `https://jsonplaceholder.typicode.com/posts/1`
// let singlePostData = []

// app.get(`/posts/1`, async (req, res) => {
//     await fetch(APISinglePost).then(res => res.json()).then(data => singlePostData = data).catch(err => console.log(err))
//     res.json(singlePostData)
//     res.end()
// })

// ----------------------------------------------------------------

// dynamische Version (Level 2 und 3):

// let singlePostData = []
// let id;
// // der fetch muss global durchgeführt werden, damit die /posts/${id} urls funktionieren, auch wenn man vorher nicht auf /posts war
// // so sind die Daten immer vorhanden und der User kann direkt zu /posts/65 gehen zum Beispiel
// await fetch(API).then(res => res.json()).then(data => postsData = data).catch(err => console.log(err))

// app.get('/posts', async (req, res) => {
//     res.json(postsData)
//     res.end()
// }) 

// postsData?.map(async (post) => {
//     id = post.id
//     const APISinglePost = `https://jsonplaceholder.typicode.com/posts/${id}`

//     app.get(`/posts/${id}`, async (req, res) => {
//     await fetch(APISinglePost).then(res => res.json()).then(data => singlePostData = data).catch(err => console.log(err))
//     res.json(singlePostData)
//     res.end()
//     })
// })

// ----------------------------------------------------------------

// Level 4

const pathDataDir = new URL('./data', import.meta.url)
const pathDataJSON = new URL('./data/posts.json', import.meta.url)

// Funktion, die prüft, ob ein Pfad vorhanden/zugänglich ist
// gibt true oder false zurück
const exists = async (path) => {
    let exists;
    try {
        await fs.access(path, fs.constants.W_OK)
        exists = true 
    } catch (err){
        exists = false
    }
    return exists
}

// Funktion, die einen Ordner erstellt, falls er noch nicht vorhanden ist
// einen state (isSetup) definieren, der angibt, ob die Funktion schon durchlaufen ist // falls ja -> return
let isSetup = false
const setup = async () => {
    if (isSetup) return
    // führt die exists() Funktion aus mit dem entsprechenden Pfad als Parameter und speichert das Ergebnis (true oder false) in einer Variable 
    const hasDataDir = await exists(pathDataDir)
    // wenn hasDataDir = false, soll ein Ordner erstellt werden
    if (!hasDataDir){
        await fs.mkdir(pathDataDir)
    }
    isSetup = true
}

// Funktion, die die Daten aus der API in eine JSON Datei lokal speichert
const writingData = async () => {
    await fetch(API).then(res => res.json()).then(async (data) => {
        postsData = data
        await setup()
        await fs.writeFile(pathDataJSON, JSON.stringify(postsData, null, 2), {encoding: "utf-8"})
    })
}
writingData()

// jetzt benutzen wir die lokale JSON Datei, um Inhalte auszulesen und anzuzeigen
// die Daten in eine globale Variable speichern
let localeData = await fs.readFile(pathDataJSON, {encoding: "utf8"})
localeData = JSON.parse(localeData);

// ein Beispiel nicht dynamisch:
// app.get(`/posts/3`, async (req, res) => {
//     let singleData = localeData?.filter(post => post.id === 3)
//     res.json(singleData)
//     res.end()
// })

let id;

app.get('/posts', async (req, res) => {
    res.json(localeData)
    res.end()
})
 
localeData?.map(async (post) => {
    id = post.id
    app.get(`/posts/${id}`, async (req, res) => {
        res.json(post)
        res.end()
    })
})

// ----------------------------------------------------------------

// Level 5

// die IDs starten bei 101 (100 +1)
let newId = 100;
// Funktion, um ID automatisch hinzuzufügen
const getId = (newPost) => {
    newId = newId + 1
    newPost.id = newId
}

// auslesen des bodys
app.use(express.json())

app.post('/posts', (req, res) => {
    // nicht dynamische Version zum Testen:
    // const newPost = {userId: 1, title: "dolorem eum magni eos aperiam quia", body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspic"}
    
    // dynamisch (der User kann selbst etwas eingeben und das wird ausgelesen):
    const { userId, title, body } = req.body
    const newPost = {userId, title, body}
    getId(newPost)
    // in die Variable localeData hinzufügen
    localeData.push(newPost)
    // in die posts.json Datei hinzufügen
    fs.writeFile(pathDataJSON, JSON.stringify(localeData, null, 2), {encoding: "utf8"})
    res.json(localeData)
})

// ----------------------------------------------------------------

// Level 6




