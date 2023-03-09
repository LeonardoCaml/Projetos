function transition() {
  const user = document.getElementById('nome')
  const email = document.getElementById('email')
  const senha = document.getElementById('senha')

  const erro = document.getElementById('error')

  const buttonRegister = document.getElementById('register')
  const buttonEnter = document.getElementById('enter')

  const accout = [{
    user: 'leonardo camelo',
    email: 'leonardo123@gmail.com',
    senha: 'userPassword'
  }]

  // validação de entrada

  buttonEnter.addEventListener('click', (e) => {

    e.preventDefault()

    if(user.value == accout[0].user && email.value == accout[0].email && senha.value == accout[0].senha) {
      window.location = 'interface.html'
    } else {
      erro.style.display = 'flex'
    }


  })

  // cadastrar
  
  buttonRegister.addEventListener('click', () => {
    window.location = 'register.html'
  })
}

transition()