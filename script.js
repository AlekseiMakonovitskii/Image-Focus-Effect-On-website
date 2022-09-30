const focusEl = document.querySelector(`.focus`);

const moving = (e) => {
	focusEl.style.left = e.pageX - focusEl.offsetWidth / 2 + 'px';
	focusEl.style.top = e.pageY - focusEl.offsetHeight / 2 + 'px';
}

document.addEventListener('mousemove', (e) => {
	moving(e);
})