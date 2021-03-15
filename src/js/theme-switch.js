import alpinejs from 'https://cdn.skypack.dev/alpinejs';


window.themeSwitch = () => {
	return {
		theme: 'browser-mode',
		savedTheme: '',
		iconStyle: '',
		hideMenu: true,
		init(){

			// watch for changes on theme
			this.$watch('theme', (value) => {
				this.changeTheme(value);
			});
			  
			// check for saved theme in localStorage
			this.savedTheme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : '';

			// check current browser theme on load
			if(this.savedTheme == ''){
				
				// set theme from browser if no saved theme

				if(window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
					this.theme = 'dark-mode';
				} else if(window.matchMedia('(prefers-color-scheme: dark)').matches == false) {
					this.theme = 'light-mode';
				}
				
				// watch for browser theme switch
				const $this = this;
				window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e){
					const newThemeType = e.matches ? 'dark-mode' : 'light-mode';
					$this.theme = newThemeType;
				});
				
			} else {

				// set theme from saved theme regardless of browser
				this.theme = this.savedTheme;
			}

			

		},
		changeTheme(themeType){

			if(themeType !== 'browser-mode'){
				this.iconStyle = (themeType == 'dark-mode') ? '#icon-sun' : '#icon-moon';
				document.body.setAttribute('data-theme', themeType);
			} else if(themeType == 'browser-mode'){
				this.resetTheme();
			}

		},
		saveTheme(e){
			// save theme choice to localStorage in browser
			window.localStorage.setItem('theme', e.target.id);

			this.savedTheme = e.target.id;
		},
		resetTheme(){

			// remove local storage value
			window.localStorage.removeItem('theme');

			// set back to blank
			this.theme = 'browser-mode';

		}
	}
}