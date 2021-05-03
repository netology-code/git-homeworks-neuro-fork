(() => {
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
})();