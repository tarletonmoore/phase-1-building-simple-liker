// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector(`#modal`)
// function mimicServerCall() {
//   return fetch(url = "http://mimicServer.example.com")
//     .then(function (response) {
//       console.log(
//         response)
//     })
//     .catch(function (error) {
//       setTimeout(function () {
//         return modal
//       }, 3000)
//     })
// }
const hearts = document.querySelectorAll(`.like-glyph`)
hearts.forEach(heart => {

  heart.addEventListener(`click`, () => {
    if (heart.innerHTML === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART
      heart.className = ``
    }

    else {
      mimicServerCall()
        .then(function (response) {

          heart.innerHTML = FULL_HEART
          heart.className = `activated-heart`

        })
        .catch(function (error) {
          modal.className = ``
          modal.textContent = error

          setTimeout(function () {
            modal.className = `hidden`

          }, 3000)
        })
    }

  })
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
