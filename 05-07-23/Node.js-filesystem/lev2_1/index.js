import fs from "node:fs/promises"

const pathData = new URL("./data.json", import.meta.url)
const pathText = new URL("./data.txt", import.meta.url)

// reading data from data.json
let contentData;
try {
    contentData = await fs.readFile(pathData, {encoding: "utf8"})
    // console.log({contentData});
    console.log(`data.json wurde gelesen`);
} catch (err) {
    console.error(`Fehler: ${err}`)
}

// Daten in json Format umwandeln
const contentJSON = JSON.parse(contentData)

// eine leere Text Datei erstellen
try {
    await fs.writeFile(pathText, "", {encoding: "utf8"})
    console.log(`Text Datei wurde erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`)
}

// Text Datei mit Inhalten füllen und formatieren
const writingFunction = async (contentJSON) => {
    for (let i = 0; i < contentJSON.length; i++) {
        try {
            await fs.appendFile(pathText, contentJSON[i]["id"] + " - " + contentJSON[i]["title"] + "\n" + contentJSON[i]["description"] + "\n" + "\n", {encoding: "utf8"})
            console.log(`Inhalte wurden der Text Datei hinzugefügt`);
        } catch (err) {
            console.error(`Fehler: ${err}`)
        }
    }
}
writingFunction(contentJSON)