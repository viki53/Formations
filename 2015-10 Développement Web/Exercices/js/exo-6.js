document.addEventListener('DOMContentLoaded', function () {
	var select_gauche = document.getElementById('liste-gauche');
	var select_droite = document.getElementById('liste-droite');

	var boutons = document.querySelectorAll('button[name="bouton_deplacement"]');

	for (var i=0; i<boutons.length; i++) {
		boutons[i].addEventListener('click', function () {
			var direction = this.value;

			switch (direction) {
				case 'droite':
					var from = select_gauche;
					var to = select_droite;
				break;

				case 'gauche':
					var from = select_droite;
					var to = select_gauche;
				break;
			}

			while (from.selectedOptions[0]) {
				var option = from.selectedOptions[0];
				to.appendChild(option);
				option.selected = false;
			}

			showSelectOptionsNumbers();
		}, false);
	}

	showSelectOptionsNumbers();

	function showSelectOptionsNumbers () {
		showSelectOptionsNumber(select_gauche);
		showSelectOptionsNumber(select_droite);
	}
	function showSelectOptionsNumber (select) {
		if (!select.previousElementSibling) {
			select.parentNode.insertBefore(document.createElement('span'), select);
			select.parentNode.insertBefore(document.createElement('br'), select);
		}

		var nb = select.childElementCount;
		var span = select.previousElementSibling.previousElementSibling;

		if (nb === 0) {
			span.classList.add('danger');
		}
		else {
			span.classList.remove('danger');
		}

		span.textContent = nb + ' ' + (nb > 1 ? 'éléments' : 'élément');
	}
});