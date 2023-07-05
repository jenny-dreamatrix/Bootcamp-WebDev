import fs from "node:fs/promises"

// blog1 verändern
const pathBlog1 = new URL("./blog1.txt", import.meta.url)
const blog1Content = await fs.readFile(pathBlog1, {encoding: "utf8"})
console.log({blog1Content});
await fs.writeFile(pathBlog1, "Ich bin ein Developer", {encoding: "utf8"})

// blog2 erstellen
const pathBlog2 = new URL("./blog2.txt", import.meta.url)
await fs.writeFile(pathBlog2, "beliebiger Text", {encoding: "utf8"})
const blog2Content = await fs.readFile(pathBlog2, {encoding: "utf8"})
console.log({blog2Content});

// assets prüfen und ggf löschen
const pathAssets = new URL("./assets", import.meta.url)
try {
    await fs.access(pathAssets);
    console.log("assets ist bereits vorhanden");
    await fs.rmdir(pathAssets)
} catch (err) {
    console.log("assets nicht vorhanden", err);
}

// assets erstellen
await fs.mkdir(pathAssets, { recursive: true })

// delete.txt prüfen und ggf. löschen
const pathDelete = new URL("./delete.txt", import.meta.url)
try {
    await fs.access(pathDelete)
    console.log("delete ist bereits vorhanden");
    await fs.rm(pathDelete)
} catch (err) {
    console.log("delete ist noch nicht vorhanden", err);
}

// delete.txt erstellen
await fs.writeFile(pathDelete, "random text", {encoding: "utf8"})

// Hello.txt erstellen
const pathHello = new URL("./Hello.txt", import.meta.url)
await fs.writeFile(pathHello, "irgendwas", {encoding: "utf8"})

// Hello.txt umbenennen
const newPathHello = new URL("./HelloWorld.txt", import.meta.url)
await fs.rename(pathHello, newPathHello)