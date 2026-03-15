let myImgs = [

    { adress: "ahmadardity-quran-4951037_1280.jpg", name: "Quran", description: "Islamische Bücher" },
    { adress: "ben_kerckx-mosque-6835469_1280.jpg", name: "Moschee", description: "Ein Moschee" },
    { adress: "freebiespic-quran-4178711_1280.jpg", name: "Quran", description: "Ein Quran mit spanischer Übersetzung" },
    { adress: "glady-mecca-66966_1280.jpg", name: "Mekkah vom Berg aus", description: "Ein Bild von Mekkah" },
    { adress: "hnsarowar385-mosque-8328077_1280.jpg", name: "Aqsa Moschee", description: "Ein Bild bon Aqsa Moschee im Quds" },
    { adress: "konevi-cami-4190404_1280.jpg", name: "Madina", description: "Ein Bild von Medina" },
    { adress: "konevi-kaaba-4372252_1280.jpg", name: "Mahram Moschee", description: "Mahram Moschee in Mekkah" },
    { adress: "mdjihadhossen-islam-8519137_1280.jpg", name: "Quran", description: "Ein Bild von Quran" },
    { adress: "rwayne307-al-aqsa-mosque-196846_1280.jpg", name: "Aqsa Moschee", description: "Aqsa Moschee im Quds" },
    { adress: "shamsherniazi-birds-5407779_1280.jpg", name: "Moschee", description: "Ein Moschee in einem islamischem Stadt" }
]; // das ist unser Array mit den unterschiedlichen Objekten! 

let imgOutput = document.getElementById("imgs"); // hiermit haben wir zugriff auf unser div mit dem id imgs

for (let i = 0; i < myImgs.length; i++) {

    let picture = myImgs[i]; //damit haben wir Zugriff auf objekts in unserem array.

    imgOutput.innerHTML += `<img src="./img/imgs/${picture.adress}" class="main-imgs img-button" onclick="openDialog(${i})">`;
    //mit der Forschleife tun wir: 1. div in einem button umgewandelt.
    // 2. im button haben wir Bild mit der jeweiligen Adressen...
}

let dialogRef = document.getElementById("dialog"); //Dialog rufen.
let dialogImage = document.getElementById("dialogImage"); //img im dialog rufen.
let dialogTitle = document.getElementById("pictureheadline"); // Überschrift im Dialog rufen
let imageDescription = document.getElementById("imageCaption"); // Beschreibung des Bildes im Dialog.
let currentIndex = 0; // das ist der Startposition.

function openDialog(index) {

    currentIndex = index; // currentindex =  das Bild was geklickt wurde.
    let selectedImage = myImgs[currentIndex]; // selectedImage =  das Bild was geklickt wurde.
    dialogImage.src = `./img/imgs/${selectedImage.adress}`; //Das Bild im Dialog anzeigen
    dialogTitle.textContent = selectedImage.name; // H1 im Dialog umschreiben
    imageDescription.textContent = selectedImage.description;
    dialogRef.showModal(); // Dialog öffnen
    showPositionOfImages();
}

function closeDialog() {
    dialogRef.close() // Dialog schließen
}

function nextImage() {
    currentIndex++; // nächste Position von currentIndex aufrufen
    if (currentIndex >= myImgs.length) {
        currentIndex = 0; //Startet vom Beginn wieder!
    }
    updateDialogImage();
}

function previousImage() {
    currentIndex--; // letzte Position von currentIndex aufrufen
    if (currentIndex < 0) {
        currentIndex = myImgs.length - 1; // Zum letzten Bild in Array springen.
    }

    updateDialogImage();
}


// UpdateDialogImage ist dafür da, wenn nextImagegedrückt wird, dass Dialog neugeladen wird.
function updateDialogImage() {
    let selectedImage = myImgs[currentIndex]; //selectedImage =  das Bild was geklickt wurde.

    dialogImage.src = `./img/imgs/${selectedImage.adress}`; // Bild wird neu ausgewählt.
    dialogTitle.textContent = selectedImage.name; // Bildüberschrift wird neu ausgewählt.
    imageDescription.textContent = selectedImage.description; // Bilderbeschreibung wird neu ausgewählt.
    showPositionOfImages();
}


// addEventListener nutzen wir, um bei click auf backdrop Dialog zu schließen.
dialogRef.addEventListener("click", (event) => {
    if (event.target == dialogRef) {
        dialogRef.close()
    }
}); // wenn der click, waws targetiert wird gleich wie dialogRef ist, dann soll Dialog geschloßen werden.

let spanRef = document.getElementById("imagePosition");

function showPositionOfImages() {
    let total = myImgs.length;
    spanRef.textContent = `${currentIndex + 1} / ${total}`;
}