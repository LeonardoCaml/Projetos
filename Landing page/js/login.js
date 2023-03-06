function transition() {
    const buttonRegister = document.getElementById('register')

    buttonRegister.addEventListener('click', () => {
      window.location = 'register.html'
    })
}

transition()