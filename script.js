const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const comment = document.getElementById("comment");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  email
    .send({
      SecureToken: "bbb0931b-8954-4357-96a1-51f36d3d1e66",
      To: "bshaikh1294@gmail.com",
      From: "George.themang103@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    })
    .then((message) => alert(message));
});



07/29 12pm
08/03 7:45am
