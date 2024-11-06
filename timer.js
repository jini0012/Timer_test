const buttons = document.querySelectorAll('.buttons li button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const name = event.target;

        if (name.textContent === 'START') {
            name.classList.remove('start');
            name.classList.add('pause');
            name.textContent = 'PAUSE';
        } else if (name.textContent === 'RESET') {
        } else if (name.textContent === 'PAUSE') {
            name.classList.add('start');
            name.classList.remove('pause');
            name.textContent = 'START';
        }
    });
});

console.log(buttons);
