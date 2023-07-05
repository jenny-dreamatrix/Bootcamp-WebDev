import fs from "node:fs/promises"

// blog1 verändern
try {
    const pathBlog1 = new URL("./blog1.txt", import.meta.url)
    const blog1Content = await fs.readFile(pathBlog1, {encoding: "utf8"})
    console.log({blog1Content});
    await fs.writeFile(pathBlog1, "Ich bin ein Developer", {encoding: "utf8"})
    console.log(`blog1 verändert`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// blog2 erstellen
try {
    const pathBlog2 = new URL("./blog2.txt", import.meta.url)
    await fs.writeFile(pathBlog2, "beliebiger Text", {encoding: "utf8"})
    const blog2Content = await fs.readFile(pathBlog2, {encoding: "utf8"})
    console.log({blog2Content});
    console.log(`blog2 erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// assets prüfen und ggf löschen
const pathAssets = new URL("./assets", import.meta.url)
try {
    await fs.access(pathAssets);
    console.log(`assets ist bereits vorhanden`);
    await fs.rmdir(pathAssets)
    console.log(`assets wurde gelöscht`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// assets erstellen
try {
    await fs.mkdir(pathAssets, { recursive: true })
    console.log(`assets wurde erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// delete.txt prüfen und ggf. löschen
const pathDelete = new URL("./delete.txt", import.meta.url)
try {
    await fs.access(pathDelete)
    console.log(`delete ist bereits vorhanden`);
    await fs.rm(pathDelete)
    console.log(`delete wurde gelöscht`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// delete.txt erstellen
try {
    await fs.writeFile(pathDelete, "random text", {encoding: "utf8"})
    console.log(`delete wurde erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// Hello.txt erstellen
const pathHello = new URL("./Hello.txt", import.meta.url)
try {
    await fs.writeFile(pathHello, "irgendwas", {encoding: "utf8"})
    console.log(`Hello wurde erstellt`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}

// Hello.txt umbenennen
const newPathHello = new URL("./HelloWorld.txt", import.meta.url)
try {
    await fs.rename(pathHello, newPathHello)
    console.log(`Hello wurde umbenannt`);
} catch (err) {
    console.error(`Fehler: ${err}`);
}