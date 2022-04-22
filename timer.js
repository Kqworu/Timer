const one = document.getElementById('one');
const three = document.getElementById('three');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const set = document.getElementById('set');
const start = document.getElementById('start');
const count = document.getElementById('count');

let time = '';

const selectTime = () => {
    if (one.checked) {
        time = 60;
    } else if (three.checked) {
        time = 180;
    } else if (five.checked) {
        time = 300;
    } else {
        time = 600;
    }
};

const finSen = () => {
    let finText = '';

    if (one.checked) {
        finText = '1分';
    } else if (three.checked) {
        finText = '3分';
    } else if (five.checked) {
        finText = '5分';
    } else {
        finText = '10分'
    }

    return `${finText}経過しました！\n【OK】タイマーをもう一度使用する / 【キャンセル】終了`;
};

const finish = clock => {
    clearInterval(clock);

    const result = confirm(finSen());

    if (result == true) {
        window.location.reload()
    }
};

const timer = () => {
    const clock = setInterval(() => {
        if (time < 0) {
            finish(clock);
        }

        count.textContent = time--;
    }, 1000);
};

set.addEventListener('click', () => {
    selectTime();

    count.textContent = time;

    start.style.display = 'block';
})

start.addEventListener('click', () => {
    timer();

    start.style.display = 'none';
    set.style.display = 'none';
})