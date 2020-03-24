https://github.com/netology-code/git-homeworks-neuro-fork/pull/16/conflict?name=js%252Fapp.js&base_oid=f7336fee570a51b2f07f64bff1561aba51378ed8&head_oid=2a0f916dcd96ff1b99bd970394451b62729f30cf(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
    // TODO: add custom logic here
})();