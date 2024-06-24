const rnd = (min, max) => {
	const r = min + Math.random() * (min - max + 1);
	return Math.floor(r);
}

const initRunning = (obj) => {
	obj.style.position = 'absolute';
	obj.style.transition = '0.09s';
	obj.addEventListener('mouseover', () => {
		obj.style.left = `${rnd(30, 50)}%`;
		obj.style.top = `${rnd(30, 50)}%`;
	});
};

const initColor = (obj) => {
	setInterval(() => {
		obj.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	}, 100);
};