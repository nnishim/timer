const minuteElement = document.querySelector(`.minute`);
const secondElement = document.querySelector(`.second`);
const millisecondElement = document.querySelector(`.millisecond`);

const startBtn = document.querySelector(`.start`);
const pauseBtn = document.querySelector(`.pause`);
const resetBtn = document.querySelector(`.reset`);
const newBtn = document.querySelector(`.new`);

let startButton = startBtn.addEventListener(`click`, () => {
	clearInterval(interval);
	interval = setInterval(Timer, 10)
});

let pauseButton = pauseBtn.addEventListener(`click`, () => {
	clearInterval(interval);
});

let newButton = newBtn.addEventListener(`click`, () => {
	clearInterval(interval);
	const results = document.querySelector(`.results`);
	let block = document.createElement(`div`);
	block.innerText = `Время круга - ${minute} : ${second} : ${millisecond}`;
	results.append(block);
	clearFields();
});

let resetButton = resetBtn.addEventListener(`click`, () => {
	clearInterval(interval);
	clearFields();
});

let	minute = 00,
		second = 00,
		millisecond = 00,
		interval;

function Timer() {  
	millisecond++;
	if (millisecond < 9) {
		millisecondElement.innerText = `0` + millisecond;
	}
	if (millisecond > 9) {
		millisecondElement.innerText = millisecond;
	}
	if (millisecond > 99) {
		second++;
		secondElement.innerText = `0` + second;
		millisecond = 0;
		millisecondElement.innerText = `0` + millisecond;
	}


	if (second < 9) {
		secondElement.innerText = `0` + second;
	}
	if (second > 9) {
		secondElement.innerText = second;
	}
	if (second > 59) {
		minute++;
		minuteElement.innerText = `0` + minute;
		second = 0;
		secondElement.innerText = `0` + second;
	}


	if (minute < 9) {
		minuteElement.innerText = `0` + minute;
	}
	if (minute > 9) {
		minuteElement.innerText = minute;
	}
	if (minute > 60) {
		pauseButton;
	}
};

function clearFields() {  
	hour = 00;
	minute = 00;
	second = 00;
	millisecond = 00;

	minuteElement.textContent = `00`;
	secondElement.textContent = `00`;
	millisecondElement.textContent = `00`;
};