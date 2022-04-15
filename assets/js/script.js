// APEXCHART
var options = {
	series: [{
	name: 'series1',
	data: [31, 40, 28, 51, 42, 109, 100]
}, {
	name: 'series2',
	data: [11, 32, 45, 32, 34, 52, 41]
}],
	chart: {
	height: 350,
	type: 'area'
},
	dataLabels: {
	enabled: false
},
	stroke: {
	curve: 'smooth'
},
	xaxis: {
	type: 'datetime',
	categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



// datatable
$(document).ready(function() {
	$("#data-table").DataTable();
});



// alert
let alert_close_icons = document.querySelectorAll('.alert>.close');
if(alert_close_icons)
{
	alert_close_icons.forEach((alert_close_icon)=>{
		alert_close_icon.addEventListener('click', function()
		{
		this.closest('.alert').classList.add('close');
		
		this.closest('.alert').addEventListener('transitionend', function(event){
			if(event.propertyName=='transform')
			{
			this.remove();
			}
		});
		});
	});
}



// notif dropdown
const notif = document.querySelector('nav .notif');
const navlink = notif.querySelector('i');
const notifLink = notif.querySelector('.notif-link');

navlink.addEventListener('click', function () {
	notifLink.classList.toggle('show');
})

// menu card dropdown
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})



window.addEventListener('click', function (e) {
	if(e.target !== navlink) {
		if(e.target !== notifLink) {
			if(notifLink.classList.contains('show')) {
				notifLink.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})




// modal popup
const modalBtns = document.querySelectorAll(".modal-open");

	modalBtns.forEach(function(btn){
	btn.onclick = function(){
		let modal = btn.getAttribute('data-modal');
		document.getElementById(modal).style.display = 'block';
	}
});

const closeBtns = document.querySelectorAll(".modal-close");

	closeBtns.forEach(function(btn){
	btn.onclick = function(){
		let modal = (btn.closest('.modal').style.display = 'none');
	}
});





// change theme light/dark
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})

const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})


// navbar
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			// searchButtonIcon.classList.replace('bx-search', 'bx-x');
			searchButtonIcon.classList.replace('bx-search');
		} else {
			// searchButtonIcon.classList.replace('bx-x', 'bx-search');
			searchButtonIcon.classList.replace('bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	// searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchButtonIcon.classList.replace('bx-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		// searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchButtonIcon.classList.replace('bx-search');
		searchForm.classList.remove('show');
	}
})



