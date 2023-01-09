document.addEventListener("DOMContentLoaded", () => {
   const source = "http://localhost:3000/images/1";

   const newComment = document.getElementById("addcomment")
   const comment = document.getElementById("")

   function fetch() {
      return fetch(source)
      .then(response => Response.json())
   }

   newComment.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentForm = event.target;
      const comments = document.getElementById("newcomment");
      comments.innerText = commentForm.comments.value + comments.innerText;
   })
})
