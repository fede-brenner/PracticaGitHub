(function () {
    'use strict'

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (form.checkValidity()) {
                    event.preventDefault();
                    getData();
                }
                form.classList.add('was-validated')
            }, false)
        })

    })()
    function getData() {
        var data = "";
        for (var i=1; i<=10; i++) {
            data += findLableForControl(document.getElementById("validationCustom0"+i)).innerHTML + ": " + document.getElementById("validationCustom0"+i).value + "\n";
        }
        window.alert(data);
    }
    function findLableForControl(c) {
        var idVal = c.id;
        var labels = document.getElementsByTagName('label');
        for( var i = 0; i < labels.length; i++ ) {
            if (labels[i].htmlFor == idVal)
                return labels[i];
        }
    }