document.addEventListener("DOMContentLoaded", () => {

   const Image = document.getElementById("card-image");
   const Tittle = document.getElementById("card-tittle");
   const Likes = document.getElementById("like-count");
   const Comments = document.getElementById("comment-list");
   const likesButton = document.getElementById("like-button");
   const addCommentsForm = document.getElementById("comment-form")
   let likes;

   fetch(" http://localhost:3000/images/1")
   .then((response) => response.json())
   .then(pageData);

   function pageData(data) {
      likes = data.likes;
      Image.src = data.image;
      Tittle.textContent = data.title;
      Likes.textContent = data.likes;

      pageLikes();
      pageComments(data.comments);
   }

   function pageLikes() {
      Likes.textContent = `${likes} likes`
   }

   function pageComments(comments) {
      Comments.innerHTML = "";
      comments.forEach(pageComment);
   }

   function pageComment(comment) {
      let List = document.createElement("li");
      List.textContent = comment.content;
      Comments.appendChild(List);
   }

   function post(e) {
      e.preventDefault();
      const newComments = e.target.comment.value;
      pageComment({content: newComments})

      event.target.reset();
   }

   likesButton.addEventListener("click", () => {
      likes += 1;
      pageLikes();
   })

   addCommentsForm.addEventListener("submit", post);
})
