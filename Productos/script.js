document.addEventListener("DOMContentLoaded", () => {
    let productosData = [];
    
    // Mostrar la ventana emergente
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    
    popup.style.display = 'flex'; // Mostrar el popup al cargar la página
    
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Cerrar el popup al hacer clic en el botón
    });

    // Cargar los productos desde el archivo JSON
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        productosData = data; // Guardar datos en variable global
        renderProducts(1, productosData); // Mostrar productos en la primera carga
        renderPagination(productosData);
    });

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredProducts = productosData.filter(producto => 
            producto.nombre.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm)
        );
        renderProducts(1, filteredProducts); // Mostrar productos filtrados
        renderPagination(filteredProducts);
    });

    function renderProducts(page, productos) {
        const container = document.getElementById('productos-container');
        const noResults = document.getElementById('no-results');
        container.innerHTML = '';
        noResults.style.display = 'none'; // Ocultar mensaje de no resultados por defecto

        if (productos.length === 0) {
            noResults.style.display = 'block'; // Mostrar mensaje si no hay productos
            return;
        }

        let itemsPerPage = 20; // Número de productos por página
        let start = (page - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        let paginatedItems = productos.slice(start, end);

        paginatedItems.forEach(producto => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('producto');
            productDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <a href="${producto.whatsapp}" target="_blank" class="btn-whatsapp">Adquirir Producto</a>
            `;
            container.appendChild(productDiv);
        });
    }

    function renderPagination(productos) {
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = ''; // Limpiar contenedor de paginación
        let totalPages = Math.ceil(productos.length / 20);
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.addEventListener('click', () => {
                renderProducts(i, productos);
            });
            paginationContainer.appendChild(pageButton);
        }
    }
});
