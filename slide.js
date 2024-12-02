let currentIndex = 0;
	let autoPlayInterval; 

	function showSlide(index) {
		const slides = document.querySelectorAll('.carousel-inner a');
		const indicators = document.querySelectorAll('.carousel-indicators .indicator');

		if (index >= slides.length) {
			currentIndex = 0;
		} else if (index < 0) {
			currentIndex = slides.length - 1;
		} else {
			currentIndex = index;
		}

		const offset = -currentIndex * 100 + '%';
		document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;

		indicators.forEach((indicator, i) => {
			if (i === currentIndex) {
				indicator.classList.add('active');
			} else {
				indicator.classList.remove('active');
			}
		});

		// 清除自动播放定时器，如果用户手动切换幻灯片则停止自动播放
		clearInterval(autoPlayInterval);
		// 重新设置自动播放
		startAutoPlay();
	}

	function prevSlide() {
		showSlide(currentIndex - 1);
	}

	function nextSlide() {
		showSlide(currentIndex + 1);
	}

	function goToSlide(index) {
		showSlide(index);
	}

	function startAutoPlay() {
		autoPlayInterval = setInterval(nextSlide, 3000);
	}

	document.addEventListener('DOMContentLoaded', () => {
		const indicators = document.querySelectorAll('.carousel-indicators .indicator');
		indicators[0].classList.add('active');
		showSlide(0);
		startAutoPlay();
	});