import alpinejs from 'https://cdn.skypack.dev/alpinejs';


window.themeSwitch = () => {
	return {
		theme: '',
		iconStyle: '',
		init(){

			// watch for changes on theme
			this.$watch('theme', (value) => {
				this.changeTheme(value);
			});
			
			// check for saved theme in localStorage
			this.theme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light-mode';

			// check current browser theme on load
			if(window.matchMedia('(prefers-color-scheme: dark)').matches == true && this.theme !== '') {
				this.theme = 'dark-mode';
			} else if(window.matchMedia('(prefers-color-scheme: dark)').matches == false && this.theme !== '') {
				this.theme = 'light-mode';
			}

			// watch for browser theme switch
			const $this = this;
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e){
				const newThemeType = e.matches ? 'dark-mode' : 'light-mode';
				$this.theme = newThemeType;
			});

		},
		changeTheme(themeType){
			this.iconStyle = (themeType == 'dark-mode') ? '#icon-sun' : '#icon-moon';
			document.body.setAttribute('data-theme', themeType);
		},
		changeOnClick(){
			const newThemeType = (this.theme == 'dark-mode') ? 'light-mode' : 'dark-mode';
			this.theme = newThemeType;
		}
	}
}