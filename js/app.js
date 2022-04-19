(() => {
(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
    const earlyorderForm = document.querySelector('#earlyorder-form');

    earlyorderForm.addEventListener('submit', ev => {
        ev.preventDefault();

        const earlyorderContact = earlyorderForm.querySelector('#earlyorder-contact');
        const contact = earlyorderContact.value.trim();

        if (contact === '') {
            return;
        }

        // TODO: send email simulation:
        setTimeout(() => {
            $('#earlyorderModal').modal('show');
            earlyorderContact.value = '';
        }, 500);
    });
(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
})();