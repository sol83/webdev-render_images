const imgs = [
    "images/dog1.jpg",
    "images/cat1.jpg",
    "images/dog2.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Out pets" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()