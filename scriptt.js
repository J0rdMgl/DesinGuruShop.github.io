document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consultaForm');
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.close');

    // Función para cerrar la ventana modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Asegurarse de que el botón de cerrar funcione correctamente
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Añadir evento para cerrar modal al hacer clic fuera de ella
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    consultaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const identificador = document.getElementById('identificador').value.trim();
        const resultado = document.getElementById('resultado');

        // Datos de usuario simulados con cálculo de fecha de expiración
        const datosUsuario = {
            "addlco627@gmail.com": {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-13",
                diasPlan: 183
            },
            "anneawn20@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-17",
                diasPlan: 183
            },
            "zavaletavillanueva062004@gmail.com": {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-28",
                diasPlan: 92
            },
            "oeff2008@gmail.com": {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-08-28",
                diasPlan: 365
            },
            "terronescarranzajasmin@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-08-25",
                diasPlan: 30
            },
            "mjerson.2308@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-08-31",
                diasPlan: 92 
            },
            "jmotinianor@unitru.edu.pe" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-15",
                diasPlan: 122
            },
            "karlavertiz.02@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-2",
                diasPlan: 183
            },
            "ml4710256@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-08-11",
                diasPlan: 183
            },
            "martinalvarezmunoz19@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-08-31",
                diasPlan: 30
            },
            "ruth.tj.viru@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-09-18",
                diasPlan: 365
            },
            "aroninga151@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-07-05",
                diasPlan: 365
            },
            "ronaldoayalaz12@gmail.com" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-10-06",
                diasPlan: 92
            },
            "978796156" : {
                producto: "CANVA PRO EDU",
                fechaInicio: "2024-10-06",
                diasPlan: 183
            },
            "966228431" : {
                producto: "Netflix",
                fechaInicio: "2024-09-23",
                diasPlan: 30 
            },
            "945754548" : {
                producto: "Netflix",
                fechaInicio: "2024-09-19",
                diasPlan: 30
            },
            "+584248296284" : {
                producto: "Chat GPT 4 Plus",
                fechaInicio: "2024-09-30",
                diasPlan: 365
            },
            "917297705" : {
                producto: "Office 365",
                fechaInicio: "2024-09-24",
                diasPlan: 365
            },
            "917297705" : {
                producto: "Ofiice 365",
                fechaInicio: "2024-09-24",
                diasPlan: 365
            },
            "953904785" : {
                producto: "Corel Draw",
                fechaInicio: "2024-01-1",
                diasPlan: 2
            },
            "970300868" : {
                producto: "CSI ETABS",
                fechaInicio: "2024-10-1",
                diasPlan: 366
            }
        };

        if (datosUsuario[identificador]) {
            const usuario = datosUsuario[identificador];
            const fechaInicio = new Date(usuario.fechaInicio);
            const fechaExpiracion = new Date(fechaInicio);
            fechaExpiracion.setDate(fechaInicio.getDate() + usuario.diasPlan);
            const diasRestantes = Math.floor((fechaExpiracion - new Date()) / (1000 * 60 * 60 * 24));

            // Mostrar los detalles en la modal
            document.getElementById('producto').textContent = usuario.producto;
            document.getElementById('fechaInicio').textContent = fechaInicio.toLocaleDateString('es-PE');
            document.getElementById('diasPlan').textContent = usuario.diasPlan;
            document.getElementById('fechaExpiracion').textContent = fechaExpiracion.toLocaleDateString('es-PE');
            document.getElementById('diasRestantes').textContent = diasRestantes;
            modal.style.display = 'block';
        } else {
            resultado.textContent = 'No se encontró ninguna suscripción asociada a este identificador.';
            resultado.style.display = 'block';
        }
    });

    // Deshabilitar clic derecho en la página
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Deshabilitar atajos de teclado específicos
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J')) {
            event.preventDefault();
        }
        if (event.ctrlKey && event.key === 'U') {
            event.preventDefault();
        }
    });
});
