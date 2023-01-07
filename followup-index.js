const button = document.getElementById("button")
function images() {
    fetch("http://localhost:3000/images")
    .then(response => response.json)
    .then(response => {
        console.log(response)
    })
}

button.addEventListener("click", images)
