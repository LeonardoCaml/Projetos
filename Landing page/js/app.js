const body = document.querySelector("body")

function loadPage() {

  let xhr = new XMLHttpRequest()

  xhr.open("GET", 'login.html')

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      body.innerHTML = xhr.responseText
    }
  }

  xhr.send()

}

function transition() {
    const buttonStart = document.getElementById('loadFormPage')
    buttonStart.addEventListener('click', loadPage)
}

transition()