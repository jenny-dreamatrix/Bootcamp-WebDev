import fs from "node:fs/promises"

const pathDataDir = new URL("./data", import.meta.url)
const pathPost = new URL("./data/post.json", import.meta.url)
const API = `https://jsonplaceholder.typicode.com/posts`

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

export const backup = async () => {
    // setup() Funktion aufrufen und sicherstellen, dass der Ordner erstellt wird, falls nicht vorhanden
    await setup()
    let postDataWithComments;

    try {
        // Post Daten auslesen und in Variable postData speichern
        let postData;
        await fetch(API).then((res) => res.json()).then((data) => {
            postData = data
            // über die Daten mappen und für jeden Post mithilfe der ID die Kommentare fetchen und in postDataWithComments speichern
            postDataWithComments = postData.map( async (post) => {
            let commentLink = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            let commentData;
            await fetch(commentLink).then((res) => res.json()).then((data) => {commentData = data}).catch(err => console.log(err))
            // definieren was herausgegeben werden soll -> für jeden Post ein Objekt mit folgenden key-values erstellen:
            return {
                id: post.id,
                title: post.title,
                body: post.body,
                userId: post.userId,
                comments: commentData,
            };
        })
        }).catch(err => console.log(err))

        // wartet darauf, dass alle Promises fulfilled sind
        // WIESO BRAUCHE ICH DAS ???
        const backup = await Promise.all(postDataWithComments);

        // Daten in string umwandeln, um sie in die post.json Datei schreiben zu können
        // writeFile() überschreibt jedesmal die Daten, die vom letzten Backup noch drin waren
        await fs.writeFile(pathPost, JSON.stringify(backup, null, 2), {encoding: "utf-8"})

    } catch (err){
        console.log(err);
    }
}