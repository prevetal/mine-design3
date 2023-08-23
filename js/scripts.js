// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {

	$(".wpcf7").addClass("form");

	if($(".js_form").length>0)
	{
		$("input[name='text-975']").val($("title").text());
	}

	$('.home .scrollto').on('click', function() {

	    let href = $(this).data('content');

	    $('html, body').stop().animate({ scrollTop: $(href).offset().top }, 1000)

	    return false;
	});

	$('.home header .menu_item:last-child > a').on('click', function() {

	    let href = "#contact";

	    $('html, body').stop().animate({ scrollTop: $(href).offset().top }, 1000)

	    return false;
	});

	var locationHash = window.location.hash

	if (locationHash) {
		$('html, body').stop().animate({ scrollTop: $(locationHash).offset().top }, 1000)
	}


	// Смена слов в первом блоке
	let firstSection = document.querySelector('.first_section .title .swiper')

	if (firstSection) {
		const firstSectionSlider = new Swiper('.first_section .title .swiper', {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			slidesPerView: 1,
			direction: 'vertical',
			allowTouchMove: false,
			autoplay: {
				delay: 1750,
				disableOnInteraction: false
			}
		})

		setTimeout(() => {
			firstSectionSlider.autoplay.stop()
		}, 6750)
	}


	// Our services
	const ourServicesSliders = [],
		ourServices = document.querySelectorAll('.our_services .images .swiper')

	ourServices.forEach(function (el, i) {
		el.classList.add('our_services_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		}

		ourServicesSliders.push(new Swiper('.our_services_s' + i, options))
	})


	// Карусель проектов
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach(function (el, i) {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Карусель отзывов
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .cont > .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					loop: true,
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					centeredSlides: true,
					loop: true,
					spaceBetween: 30,
					slidesPerView: 'auto'
				},
				1280: {
					loop: false,
					spaceBetween: 30,
					slidesPerView: 3
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Карусель клиентов
	const clientsSliders = [],
		clients = document.querySelectorAll('.clients .swiper')

	clients.forEach(function (el, i) {
		el.classList.add('clients_s' + i)

		let options = {
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					loop: true,
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					loop: true,
					spaceBetween: 30,
					slidesPerView: 2
				},
				1024: {
					loop: true,
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					loop: false,
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
		}

		clientsSliders.push(new Swiper('.clients_s' + i, options))
	})


	if($('.gallery .swiper').length > 0){
		// Карусель изображений
		const gallerySliders = [],
			gallery = document.querySelectorAll('.gallery .swiper')

		gallery.forEach(function (el, i) {
			el.classList.add('gallery_s' + i)

			let options = {
				speed: 6000,
				autoplay: {
					delay: 1,
					reverseDirection: el.classList.contains('reverse') ? true : false
				},
				loop: true,
				slidesPerView:'auto',
				allowTouchMove: false,
				disableOnInteraction: true,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				breakpoints: {
					0: {
						spaceBetween: 16,
						slidesPerView: 'auto'
					},
					480: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					}
				}
			}

			gallerySliders.push(new Swiper('.gallery_s' + i, options))
		})

		setTimeout(() => {
			gallerySliders.forEach(el => {
				el.autoplay.stop()
			})
		}, 100)
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}


	$(".text_block img").parent().addClass("fancy_img");

	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	const mobMenuBtn = document.querySelector('header .mob_menu_btn'),
		mobMenu = document.querySelector('header .menu')

	if (mobMenuBtn) {
		mobMenuBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
		})
	}


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Анимация чисел
	let time = 1,
		cc = 1

	$('.counter').each(function() {
		var i = 1,
			num = $(this).data('num'),
			step = 1000 * time / num,
			that = $(this),
			int = setInterval(() => {
				if (i <= num) {
					that.html(i)
				} else {
					cc = cc + 2
					clearInterval(int)
				}

			i++
		}, step)
	})


	// Отправка формы "Have questions?"
	$('.feedback form').submit(function(e) {
		e.preventDefault()

		// Показываем сообщение об успехе
		$('.feedback .success').addClass('show')
	})


	// Анимация в первом блоке
	setTimeout(() => $('.first_section .image img').addClass('reset'), 1000)
})



window.addEventListener('load', function () {
	// Статьи
	initArticlesSliders()
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Статьи
		initArticlesSliders()


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Статьи
articlesSliders = []

function initArticlesSliders() {
	if ($(window).width() < 1247) {
		if ($('.articles .list').length) {
			$('.articles .list > *').addClass('swiper-slide')
			$('.articles .list').addClass('swiper-wrapper').removeClass('list')

			$('.articles .swiper').each(function (i) {
				$(this).addClass('articles_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					on: {
						init: swiper => {
							setHeight(swiper.el.querySelectorAll('.article'))
						},
						resize: swiper => {
							let article = swiper.el.querySelectorAll('.article')

							article.forEach(el => el.style.height = 'auto')

							setHeight(article)
						}
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 16
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20
						}
					}
				}

				articlesSliders.push(new Swiper('.articles_s' + i, options))
			})
		}
	} else {
		articlesSliders.forEach(element => element.destroy(true, true))

		articlesSliders = []

		$('.articles .swiper-wrapper').addClass('list').removeClass('swiper-wrapper')
		$('.articles .list > *').removeClass('swiper-slide')
	}
}