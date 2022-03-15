class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(iconCount = 0, folderCount = 0) {
		const desktop = document.createElement('section');
		desktop.classList.add('desktop');

		this.icons = [];
		this.folders = [];

		for (let i = 0; i < Math.max(iconCount, folderCount); i++) {
			if (i < iconCount)
				this.icons.push(new Icon(desktop, 25 * i, 25 * i));
			if (i < folderCount)
				this.folders.push(new Folder());
		}
		document.querySelector('body').append(desktop);
	}
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(desktop, top = 0, left = 0) {
		this.icon = document.createElement('div');
		this.icon.classList.add('icon');
		this.icon.style.top = `${top}px`;
		this.icon.style.left = `${left}px`;

		this.initEventListeners();
		desktop.append(this.icon);
	}

	initEventListeners() {
		this.icon.addEventListener('mousedown', () => {
			this.icon.addEventListener('mousemove', this.onMouseMove);
		});
		this.icon.addEventListener('mouseup', () => {
			this.icon.removeEventListener('mousemove', this.onMouseMove);
		});
		// TODO leave까지 추가 안해줘도 되는 더 좋은 방법이 있을 것 같다.
		this.icon.addEventListener('mouseleave', () => {
			this.icon.removeEventListener('mousemove', this.onMouseMove);
		});
	}

	onMouseMove(evt) {
		const top = evt.target.style.top.replace('px', '');
		const left = evt.target.style.left.replace('px', '');
		evt.target.style.top = `${+top + evt.movementY}px`;
		evt.target.style.left = `${+left + evt.movementX}px`;
	}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};
