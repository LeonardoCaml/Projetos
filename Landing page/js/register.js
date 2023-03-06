function transition() {
    const buttonCompleted = document.getElementById('concluded')

    buttonCompleted.addEventListener('click', () => {
        window.location = 'login.html'
    })
}

transition()