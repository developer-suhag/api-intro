fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => loadImages(data))

function loadImages(images) {
    const imageContainer = document.getElementById('photo-section')
    for (const image of images) {
        const div = document.createElement('div')
        console.log(image.url);
        let url = URL.createObjectURL(image.url)
        div.innerHTML = `
            <img src = "${url}"/>
        `;
        imageContainer.appendChild(div)
    }
}