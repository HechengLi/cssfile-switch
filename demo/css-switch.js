(function() {
	Array.prototype.map.call(document.querySelectorAll('link'), (link) => {
		if (link.id) {
			let stored = localStorage.getItem(link.id)
			link.href = stored === null ? link.href : stored;
		}
	})
	document.addEventListener('DOMContentLoaded', function(event) {
		let switchers = document.querySelectorAll('[switch-type="switcher"]');
		switchers.forEach(node => {
			node.addEventListener('click', (e) => {
				let id = e.currentTarget.getAttribute('switch-id');
				let target = e.currentTarget.getAttribute('switch-target');
				document.querySelector(`#${id}`).href = target;
				localStorage.setItem(id, target);
			})
		})
	})
})()
