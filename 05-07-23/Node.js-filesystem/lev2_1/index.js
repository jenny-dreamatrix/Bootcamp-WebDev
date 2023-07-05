import fs from "node:fs/promises"

const pathData = new URL("./data.json", import.meta.url)
const pathText = new URL("./data.txt", import.meta.url)

// reading data from data.json
const contentData = await fs.readFile(pathData, {encoding: "utf8"})
// console.log({contentData});

// in json Format umwandeln
const contentJSON = JSON.parse(contentData)

// eine leere Text Datei erstellen
await fs.writeFile(pathText, "", {encoding: "utf8"})

// Text Datei mit Inhalten füllen und formatieren
const writingFunction = async (contentJSON) => {
    for (let i = 0; i < contentJSON.length; i++) {
        await fs.appendFile(pathText, contentJSON[i]["id"] + " - " + contentJSON[i]["title"] + "\n" + contentJSON[i]["description"] + "\n" + "\n", {encoding: "utf8"})
    }
}
writingFunction(contentJSON)