document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input[required]');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                console.log(`Input with id ${input.id} is empty`);
            }
        });

        if (!allFilled) {
            event.preventDefault();
            console.log('Redirecting to error.html');
            window.location.href = 'error.html';
        } else {
            console.log('All inputs are filled, form will be submitted');
        }
    });
});
