document.addEventListener("DOMContentLoaded", function () {

	/*============= menu toggle ===============*/
	const menuToggle = document.querySelector('.menu-toggle');
	const mobileMenu = document.querySelector('#header-menu');
	const bodyEl = document.body;

	menuToggle.addEventListener('click', function (e) {
		e.stopPropagation();

		if (this.classList.contains('active')) {

			this.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');


		} else {
			this.classList.add('active');
			mobileMenu.classList.add('active');
			bodyEl.classList.add('lock');


		}
	});

});