// Archivo JS principal para Habits

// Función para mostrar alertas rápidas (puedes usarla cuando quieras)
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.textContent = message;

    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.className = 'btn-close';
    btnClose.setAttribute('data-bs-dismiss', 'alert');
    btnClose.setAttribute('aria-label', 'Cerrar');

    alertDiv.appendChild(btnClose);

    document.body.prepend(alertDiv);

    setTimeout(() => {
        alertDiv.classList.remove('show');
        alertDiv.classList.add('hide');
        alertDiv.remove();
    }, 3000);
}

// Aquí puedes agregar más funciones JS para futuras funcionalidades

// Cargar el footer automáticamente
fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });
