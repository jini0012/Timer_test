const buttons = document.querySelectorAll('.buttons li button');

const timer = document.querySelectorAll('.time li input');

const hour = timer[0];
const min = timer[1];
const sec = timer[2];

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const name = event.target;

        if (name.textContent === 'START') {
            name.classList.remove('start');
            name.classList.add('pause');
            name.textContent = 'PAUSE';

            if (hour.value === 0 && min.value === 0 && sec.value === 0) {
                clearInterval(time);
            }
            const time = setInterval(() => {
                hour.value -= 1;
            }, 1000);
        } else if (name.textContent === 'RESET') {
        } else if (name.textContent === 'PAUSE') {
            name.classList.add('start');
            name.classList.remove('pause');
            name.textContent = 'START';
        }
    });
});
