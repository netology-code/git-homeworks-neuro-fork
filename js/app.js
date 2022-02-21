(async () => {
<<<<<<< HEAD
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
=======
    // TODO: add custom logic here
>>>>>>> 857e3d95477bfbd9c93fb04804a64d0007c1c075
})();