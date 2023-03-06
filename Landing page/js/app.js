function transition() {
    const buttonStart = document.getElementById('letsGo')
    
    buttonStart.addEventListener('click', () => {
      window.location = 'login.html'
    })
}

transition()