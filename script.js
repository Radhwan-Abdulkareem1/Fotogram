const myImgs = [

    { address: "ahmadardity-quran-4951037_1280.jpg", name: "Quran", description: "Islamische Bücher" },
    { address: "ben_kerckx-mosque-6835469_1280.jpg", name: "Moschee", description: "Ein Moschee" },
    { address: "freebiespic-quran-4178711_1280.jpg", name: "Quran", description: "Ein Quran mit spanischer Übersetzung" },
    { address: "glady-mecca-66966_1280.jpg", name: "Mekkah vom Berg aus", description: "Mekkah" },
    { address: "hnsarowar385-mosque-8328077_1280.jpg", name: "Aqsa Moschee", description: "Aqsa Moschee im Quds" },
    { address: "konevi-cami-4190404_1280.jpg", name: "Madina", description: "Medina" },
    { address: "konevi-kaaba-4372252_1280.jpg", name: "Mahram Moschee", description: "Mahram Moschee in Mekkah" },
    { address: "mdjihadhossen-islam-8519137_1280.jpg", name: "Quran", description: "Quran" },
    { address: "rwayne307-al-aqsa-mosque-196846_1280.jpg", name: "Aqsa Moschee", description: "Aqsa Moschee im Quds" },
    { address: "shamsherniazi-birds-5407779_1280.jpg", name: "Moschee", description: "Ein Moschee in einem islamischem Stadt" }
];

const imgOutput = document.getElementById("imgs"); // get the div element with id "imgs"
const dialogRef = document.getElementById("dialog"); // dialog used for displaying images
const dialogImage = document.getElementById("dialogImage"); // image displayed in the dialog preview
const dialogTitle = document.getElementById("pictureheadline"); // displays the image title in the dialog
const imageDescription = document.getElementById("imageCaption");
let currentIndex = 0; // tracks the currently displayed image index
const spanRef = document.getElementById("imagePosition");

// Renders all images from the myImgs array into the imgOutput container.
// Each image is wrapped in a button element with a data-index attribute
// to identify which image was clicked later.

function renderImages() {

    for (let i = 0; i < myImgs.length; i++) {

        let picture = myImgs[i]; // current image object

        imgOutput.innerHTML += `
            <button data-index="${i}" class="img-button">
                <img src="./img/imgs/${picture.address}" class="imgs" alt="${picture.name}">
            </button>`;
    }

    addClickEvents();
}

function addClickEvents() {
    document.querySelectorAll(".img-button").forEach(btn => {
        btn.addEventListener('click', (e) => {
            let index = Number(e.currentTarget.dataset.index);
            openDialog(index);
        })
    })
}

// Opens the dialog and displays the selected image based on the given index.
// Updates image source, title, description, and shows the current position.

function openDialog(index) {

    currentIndex = index;

    const selectedImage = myImgs[currentIndex];

    dialogImage.src = `./img/imgs/${selectedImage.address}`;
    dialogTitle.textContent = selectedImage.name;
    imageDescription.textContent = selectedImage.description;

    dialogRef.showModal();

    showPositionOfImages();
}


// Closes the image dialog.

function closeDialog() {
    dialogRef.close();
}


// Closes the dialog when the close button is clicked.
document.getElementById("closeButton").addEventListener("click", closeDialog);


// Shows the next image in the list.
// Loops back to the first image when reaching the end.

function nextImage() {
    currentIndex++;

    if (currentIndex >= myImgs.length) {
        currentIndex = 0;
    }

    updateDialogImage();
}


// Shows the previous image in the list.
// Loops to the last image when reaching the beginning.

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = myImgs.length - 1;
    }

    updateDialogImage();
}


// Updates the dialog content based on the current image index.
// Refreshes image, title, description, and position.

function updateDialogImage() {
    let selectedImage = myImgs[currentIndex];

    dialogImage.src = `./img/imgs/${selectedImage.address}`;
    dialogTitle.textContent = selectedImage.name;
    imageDescription.textContent = selectedImage.description;

    showPositionOfImages();
}


// Closes the dialog when clicking outside the content (backdrop).
dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) {
        dialogRef.close();
    }
});


// Displays the current image position (e.g. "1 / 10").
function showPositionOfImages() {
    const total = myImgs.length;
    spanRef.textContent = `${currentIndex + 1} / ${total}`;
}