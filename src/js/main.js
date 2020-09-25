class ThemeSwitch extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {

		// insert HTML
		this.innerHTML = `
			<div class="theme-switch">
				<label for="darkmode-switch">Toggle Theme</label>
				<input type="checkbox" name="darkmode" id="darkmode-switch" value="dark-mode" />
			</div>
		`;

		// try to get mode saved in browser localStorage
		let modeType = window.localStorage.getItem('mode') ? window.localStorage.getItem('mode') : 'light-mode';

		// check mode on page load
		if(window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
			console.log('is dark mode');
			setMode('dark-mode');
			this.querySelector('#darkmode-switch').checked = true;
		} else {
			setMode(modeType);
		}

		// set mode on OS change
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			console.log(e);
			const newColorScheme = e.matches ? "dark-mode" : "light-mode";
			setMode(newColorScheme);
		});

		// watch for change on input
		this.querySelector('#darkmode-switch').addEventListener('change', function(e){
			setMode(this.value);
		});


	}

	


}

customElements.define('theme-switch', ThemeSwitch);



function setMode(modeType) {
	console.log(modeType);
	document.body.classList.toggle(modeType);
	window.localStorage.setItem('mode', modeType);
}