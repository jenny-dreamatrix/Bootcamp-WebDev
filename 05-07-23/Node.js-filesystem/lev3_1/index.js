import fs from "node:fs/promises"

const pathDir = new URL("./neu", import.meta.url)
await fs.mkdir(pathDir, {recursive: true})

const pathText = new URL("./neu/text.txt", import.meta.url)

const checkFile = async (parameter) => {
try {
    await fs.access(pathText)
    console.log("Die Datei existiert bereits.");
    await fs.appendFile(pathText, "\n" + parameter)
    
} catch (err) {
    console.log("Die Datei existiert noch nicht.", err);
    await fs.writeFile(pathText, parameter)
}
}

checkFile("dies ist ein Test 4")