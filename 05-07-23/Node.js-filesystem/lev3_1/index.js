import fs from "node:fs/promises"

const pathDir = new URL("./neu", import.meta.url)
try {
    await fs.mkdir(pathDir, {recursive: true})
    console.log(`Ordner wurde erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`)
}

const pathText = new URL("./neu/text.txt", import.meta.url)

const checkFile = async (parameter) => {
try {
    await fs.access(pathText)
    console.log(`Die Datei existiert bereits.`)
    try {
        await fs.appendFile(pathText, "\n" + parameter)
        console.log(`Neuer Inhalt wurde hinzugefügt`)
    } catch (err) {
        console.error(`Fehler von appendFile(): ${err}`);
    }
} catch (err) {
    console.error(`Fehler von access(): ${err}`);
    try {
        await fs.writeFile(pathText, parameter)
        console.log(`Datei wurde erstellt`);
    } catch (err) {
        console.error(`Fehler von writeFile(): ${err}`);
    }
}}

checkFile("dies ist ein Test")