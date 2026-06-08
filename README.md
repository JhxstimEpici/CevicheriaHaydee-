Cevichería Haydee — Catálogo de platos marinos
=============================================

Descripción
-----------
Este repositorio contiene la página web estática de la Cevichería Haydee. Se agregó una sección de catálogo de ceviches con dos platos iniciales (Ceviche de tollo y Ceviche mixto), imágenes y estilos responsivos. El objetivo es que el cliente entienda rápidamente qué se vende, los precios disponibles y los acompañamientos.

Estructura del proyecto
-----------------------
- `index.html` — Página principal y nueva sección `#catalog` (catálogo de ceviches).
- `assets/css/styles.css` — Estilos principales; contiene las reglas nuevas para tarjetas y catálogo.
- `assets/js/script.js` — JavaScript ligero (menú móvil, formulario de reserva, año en footer).
- `recursos/imagenes/` — Imágenes y logo usadas por la web (subidas al repositorio).

Cómo ver el sitio localmente
---------------------------
1. Abrir una terminal en la raíz del proyecto.
2. Iniciar un servidor estático (ejemplo con Python 3):

```bash
python -m http.server 8000
```

3. Abrir `http://localhost:8000` en el navegador.

Cómo añadir o editar platos en el catálogo
----------------------------------------
- Las tarjetas de plato están en `index.html` dentro de la sección con `id="catalog"`.
- Para añadir un nuevo plato duplica una entrada `<article class="card dish-card">` y actualiza:
  - la imagen en `style="background-image:url('recursos/imagenes/archivo.jpg')"`;
  - el título y la descripción;
  - las listas de precios y acompañamientos.

Recomendaciones de mantenimiento
-------------------------------
- Mantén las imágenes en `recursos/imagenes/` con nombres descriptivos.
- Revisa `:root` en `assets/css/styles.css` para ajustar colores, radios y contenedores globales.
- Evita duplicar estilos: crea clases reutilizables cuando agregues nuevos componentes.

Control de versiones
--------------------
- Ya se realizaron los commits y push con los mensajes:
  - `agregando ceviches`
  - `agregando recursos e imágenes`

Contacto y siguientes pasos
--------------------------
Si quieres que prepare instrucciones para desplegar en GitHub Pages, crear un release o generar plantillas HTML para nuevos platos, indícalo y lo preparo.
