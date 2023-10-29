window.onload = function() {
    document.getElementById("form1").addEventListener("submit", validName);
    removeLabel();
    document.getElementById("tooltip").addEventListener("mouseover", toolTip);
    document.getElementById("tooltip").addEventListener("mouseout", toolTip);
    hideMenu();
}   

function validName(event) {
    var valor = document.getElementById("text").value;
    var valorCorreo = document.getElementById("email").value;
    var check = document.getElementById("ch3");

    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        event.preventDefault();
        alert("El nombre es obligatorio");
    }

    if (valorCorreo == null || valorCorreo.length == 0 || /^\s+$/.test(valorCorreo)) {
        event.preventDefault();
        alert("El correo es obligatorio");
    }

    if (!check.checked) {
        event.preventDefault();
        alert("Debes marcar la casilla obligatoria");
    }
}

function removeLabel() {
    var nombreInput = document.getElementById("text");
    var nombreLabel = document.querySelector('label[for="text"]');
    var emailInput = document.getElementById("email");
    var emailLabel = document.querySelector('label[for="email"]');

    nombreInput.addEventListener("input", () => {
    if (nombreInput.value.trim() !== "") {
        nombreLabel.classList.add("focused");
    } else {
        nombreLabel.classList.remove("focused");
    }
    });

    emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        emailLabel.classList.add("focused");
    } else {
        emailLabel.classList.remove("focused");
    }
    });
}

function toolTip(elEvento) {
    var evento = elEvento || window.event;
    if(evento.type === 'mouseover') {
        return overlib('Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento.');
    } else if (evento.type === 'mouseout') {
        return nd();
    }
}