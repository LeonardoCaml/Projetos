const mode = document.getElementById("icon2");
const mode2 = document.getElementById("icon");

mode.addEventListener('click', () => {
    const form = document.getElementById('contain');

    if(mode.classList.contains('moon')) {
        form.classList.toggle('dark');

        return;
    } else {
        document.body.style.background = "#ff5c00";
    }
});