class ThemeSwitch extends HTMLElement {

	constructor() {
		super();

		this.modeType = window.localStorage.getItem('mode') ? window.localStorage.getItem('mode') : '';
		this.themeIcon = (this.modeType == 'light-mode') ? 'icon-moon' : 'icon-sun';
	}

	connectedCallback() {

		var $this = this;

		// insert HTML
		this.innerHTML = `
			<div class="theme-switch">
				<button class="theme-switch-button" id="theme-switch-button" aria-label="Theme Switcher" role="presentation" aria-hidden="true">
					<svg class="svg-icon icon-inline" shape-rendering="geometricPrecision" role="presentation" aria-label="icon" aria-hidden="true">
						<use xlink: href="#${this.themeIcon}"></use>
					</svg>
				</button>
			</div>
		`;


		// check mode on page load
		if(window.matchMedia('(prefers-color-scheme: dark)').matches == true && this.modeType == '') {
			console.log('dark mode on load');
			setMode('dark-mode');
		} else {
			console.log(this.modeType + ' on load');
			setMode(this.modeType);
		}


		// set mode on OS change
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e){
			const updatedMode = e.matches ? "dark-mode" : "light-mode";
			console.log(updatedMode + ' on OS change');
			setMode(updatedMode);
		});

		// watch for change on input
		this.querySelector('#theme-switch-button').addEventListener('click', function(e){
			if($this.modeType == 'light-mode'){
				setMode('dark-mode');
				$this.modeType = 'dark-mode';
				console.log('dark mode on button');
			} else if($this.modeType == 'dark-mode'){
				setMode('light-mode');
				$this.modeType = 'light-mode';
				console.log('light mode on button');
			}
		});
	}

}

customElements.define('theme-switch', ThemeSwitch);



function setMode(modeType) {
	document.body.setAttribute('data-theme', modeType);
	window.localStorage.setItem('mode', modeType);
	console.log(modeType + ' on setMode func');
}