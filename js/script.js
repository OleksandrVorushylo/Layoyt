/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
window.addEventListener('DOMContentLoaded', () => {

	const menu = () => {
		const menuBtn = document.querySelector('.menu-button'),
			link = document.querySelectorAll('.header-nav__link'),
			nav = document.querySelector('.header-nav'),
			navBg = document.querySelector('.header-nav-bg');


		menuBtn.addEventListener('click', event => {
			event.preventDefault();
			if (menuBtn.classList.contains('menu-active')) {
				menuBtn.classList.remove('menu-active');
				nav.classList.remove('header-nav--active');
				navBg.classList.remove('header-nav-bg--active');
			} else {
				menuBtn.classList.add('menu-active');
				nav.classList.add('header-nav--active');
				navBg.classList.add('header-nav-bg--active');
			}
		});
		navBg.addEventListener('click', event => {
			event.preventDefault();
			menuBtn.classList.remove('menu-active');
			nav.classList.remove('header-nav--active');
			navBg.classList.remove('header-nav-bg--active');
		});
		link.forEach(item => {
			item.addEventListener('click', () => {
				menuBtn.classList.remove('menu-active');
				nav.classList.remove('header-nav--active');
				navBg.classList.remove('header-nav-bg--active');
			});
		});
	};
	menu();

	const favorite = () => {
		const favorite = document.querySelectorAll('.favorite');
		favorite.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.toggle('favorite--selected');
			});
		});
	};
	favorite();

	const search = () => {
		const inputSearch = document.getElementById('search'),
			searchSection = document.querySelector('.header__center'),
			searchButton = document.querySelector('.header__search-button'),
			searchBlock = document.querySelector('.header__search'),
			dropdown = document.querySelector('.header__dropdown-content');

		document.addEventListener('click', e => {
			const border = e.composedPath().includes(searchSection);
			if (!border) {
				dropdown.classList.remove('header__dropdown-content--search');
			}
		});

		function filterFunction() {
			const input = document.getElementById('search');
			const filter = input.value.toUpperCase();
			const div = document.querySelector('.header__dropdown-content');
			const a = div.getElementsByTagName('a');
			for (i = 0; i < a.length; i++) {
				txtValue = a[i].textContent || a[i].innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					a[i].style.display = '';
				} else {
					a[i].style.display = 'none';
				}
			}
		}

		inputSearch.addEventListener('input', () => {
			filterFunction();
			dropdown.classList.add('header__dropdown-content--search');
		});

		const myHilitor2 = new Hilitor("searchSection");
		myHilitor2.setMatchType("left");
		document.getElementById("search").addEventListener("keyup", function(e) {
			myHilitor2.apply(this.value);
		}, false);

		searchButton.addEventListener('click', event => {
			event.preventDefault();
			searchBlock.classList.toggle('header__search--active');
		});
	};
	search();

	const message = () => {
		const btn = document.querySelector('.header__message'),
			btnNav = document.querySelector('.header-nav__link--messages'),
			header = document.querySelector('.header'),
			messages = document.querySelector('.header__dropdown-message');

		document.addEventListener('click', e => {
			const border = e.composedPath().includes(header);
			if (!border) {
				messages.classList.remove('header__dropdown-message--active');
			}
		});

		btn.addEventListener('click', event => {
			event.preventDefault();
			messages.classList.toggle('header__dropdown-message--active');
		});
		btnNav.addEventListener('click', event => {
			event.preventDefault();
			messages.classList.toggle('header__dropdown-message--active');
		});
	};
	message();

	const menuDots = () => {
		const btn = document.querySelector('.header__menu-dots'),
			header = document.querySelector('.header'),
			menu = document.querySelector('.header__dropdown-dots');

		document.addEventListener('click', e => {
			const border = e.composedPath().includes(header);
			if (!border) {
				menu.classList.remove('header__dropdown-dots--active');
			}
		});

		btn.addEventListener('click', event => {
			event.preventDefault();
			menu.classList.toggle('header__dropdown-dots--active');
		});
	};
	menuDots();

	const menuLanguage = () => {
		const btn = document.querySelector('.header__language'),
			header = document.querySelector('.header'),
			menu = document.querySelector('.header__dropdown-language');

		document.addEventListener('click', e => {
			const border = e.composedPath().includes(header);
			if (!border) {
				menu.classList.remove('header__dropdown-language--active');
			}
		});

		btn.addEventListener('click', event => {
			event.preventDefault();
			menu.classList.toggle('header__dropdown-language--active');
		});
	};
	menuLanguage();

	function setProgress(index) {
		const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

		$progressBar
			.css('background-size', `${calc + 36}% 100%`)
			.attr('value', calc);
	}

	const $slider = $('.slider-bottom');
	const $sliderTop = $('.slider-top');
	const $progressBar = $('.sliders__progress');

	$slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
		setProgress(nextSlide);
	});

	$slider.slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 400,
		asNavFor: ".slider-top",
		responsive: [
    		{
      		breakpoint: 992,
      			settings: {
  						slidesToShow: 3,
  						slidesToScroll: 1,
      			}
    			},
    		{
      		breakpoint: 768,
      			settings: {
  						slidesToShow: 2,
  						slidesToScroll: 1,
      			}
    			},
    		{
      		breakpoint: 528,
      			settings: {
        			slidesToShow: 1,
  						slidesToScroll: 1,
				}
			},
		]
	});
	$sliderTop.slick({
		arrows: false,
		// fade: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
		asNavFor: ".slider-bottom",
		easing: "ease",
	});

	setProgress(0);

	$('.slider-top__text').mCustomScrollbar();

	// $(function () {
	//   	$('.slider-bottom').slick({
	// 			infinite: false,
	// 			slidesToShow: 4,
	// 			slidesToScroll: 1,
	// // 			responsive: [
	// //   		{
	// //     		breakpoint: 768,
	// //     			settings: {
	// // 						slidesToShow: 2,
	// // 						slidesToScroll: 1,
	// //     			}
	// //   			},
	// //   		{
	// //     		breakpoint: 448,
	// //     			settings: {
	// //       			slidesToShow: 1,
	// // 						slidesToScroll: 1,
	// //     }
	// //   }
	// // ]
	// 		});
	// });
	// (function($) {
	//   $(window).on('load', function() {
	//       $('.slider-top__text').mCustomScrollbar();
	//   });
	// })(jQuery);


});
