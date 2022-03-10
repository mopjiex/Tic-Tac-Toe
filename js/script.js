const area = document.getElementById('main__area_inner');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('window__content');
const modalResult = document.getElementById('main__modal_wrap');
const overlay = document.getElementById('modal__overlay');
const btnClose = document.getElementById('window__close');


area.addEventListener('click', e => {
    if(e.target.className = 'area__box_item') {
        console.log(e.target);
        move % 2 === 0 ? e.target.innerHTML = '<img src="/images/x.png">': e.target.innerHTML = '<img src="/images/0.png">'
        move++;
        check();
    }
});


const check = () => {
    const boxes = document.getElementsByClassName('area__box_item');
    console.log(boxes);
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < arr.length; i++) {
        if(boxes[arr[i][0]].innerHTML == '<img src="/images/x.png">' && boxes[arr[i][1]].innerHTML == '<img src="/images/x.png">' && boxes[arr[i][2]].innerHTML == '<img src="/images/x.png">') {
            result = 'Крестики';
            prepareResult(result);
        }

        else if(boxes[arr[i][0]].innerHTML == '<img src="/images/0.png">' && boxes[arr[i][1]].innerHTML == '<img src="/images/0.png">' && boxes[arr[i][2]].innerHTML == '<img src="/images/0.png">') {
            result = 'Нолики';
            prepareResult(result);
        }
    }

    if (move === 9){
        result = 'Ничья';
        draw(result);
    }
}

const prepareResult = winner => {
    console.log(winner);
    contentWrapper.innerHTML = `Победили ${winner}!`;
    modalResult.style.display = 'block';
}

const draw = winner => {
    contentWrapper.innerHTML = `Ничья`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);