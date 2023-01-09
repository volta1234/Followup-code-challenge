document.addEventListener("DOMContentLoaded", () => {

   const newComment = document.getElementById("addcomment")


   newComment.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentForm = event.target;
      const comments = document.getElementById("newcomment");
      comments.innerText = commentForm.comments.value + comments.innerText;
   })

   const dogTittle = document.getElementById("tittle")
   const dogImage = document.getElementById("imagePhoto")
   const dogComments = document.getElementById("comments")
   const fetchButton = document.getElementById("getdogdetails")
   const dogLikes = document.getElementById("likes")

   function mydogs() {
      fetch("http://localhost:3000/images")
      .then(response => response.json())
      .then(data => {
         console.log(data)
         data.forEach(image => {
            dogTittle.innerHTML = `<h2>${image.title}</H2>`
         })
         data.forEach(image => {
            dogLikes.innerHTML = `<span id="count">${image.likes}</span>`
         })
         data.forEach(image => {
            dogComments.innerHTML = `<ul>${image.comments}</ul>`
         })
      })
   }
   fetchButton.addEventListener("click", mydogs)
})
