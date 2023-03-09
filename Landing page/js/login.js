function transition() {
    const buttonRegister = document.getElementById('register')
    const buttonEnter = document.getElementById('enter')

    buttonRegister.addEventListener('click', () => {
      window.location = 'register.html'
    })

    buttonEnter.addEventListener('click', () => {
      window.location = 'interface.html'
    })

}

transition()