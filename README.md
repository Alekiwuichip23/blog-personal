# Blog personal de Alessandra

Sitio estático realizado con Quarto, páginas `.qmd`, configuración YAML y SCSS. No requiere backend, base de datos, React ni Vite. Las referencias originales se conservan en la raíz; no se usan como una captura de la página.

## Instalar Quarto en Windows

Quarto 1.10.18 está instalado y disponible en la terminal. Si necesitas instalarlo en otro equipo, descarga el instalador para Windows desde https://quarto.org/docs/get-started/ y reinicia la terminal de Visual Studio Code.

Comprueba la instalación:

```powershell
quarto --version
```

## Vista previa

Abre una terminal en esta carpeta y ejecuta:

```powershell
quarto preview
```

Quarto abre una vista previa local y actualiza los cambios. Para detenerla usa Ctrl+C. Prueba el menú, la búsqueda y las páginas de detalle. En las herramientas del navegador revisa anchos de 375, 768 y 1440 píxeles y verifica que no haya desplazamiento horizontal. Recorre los enlaces usando Tab.

## Generar el sitio

```powershell
quarto render
```

El resultado se guarda en `_site/`. No edites esos archivos: cambia los originales y vuelve a generar. Este proyecto no está publicado y no incluye configuración de despliegue.

## Agregar una publicación

1. Crea `posts/mi-articulo/index.qmd`.
2. Copia como base uno de los artículos de demostración.
3. Cambia `title`, `description`, `categories`, `image`, `image-alt` y `date` en su encabezado YAML. Usa la fecha real de publicación en formato `AAAA-MM-DD`.
4. Escribe el contenido debajo del encabezado y quita el aviso de demostración cuando sea contenido propio.
5. Ejecuta `quarto render`.

Los listados nativos de Quarto en Inicio y Blog leen las publicaciones automáticamente; no copies el título o resumen a la portada. Inicio muestra una sola publicación, ordenada por fecha descendente. Los tres ejemplos tienen la fecha de creación 2026-10-04; puedes cambiar las fechas al publicar contenido real.

## Cambiar textos, imágenes y contacto

- `index.qmd`: presentación, intereses, tarjetas de proyectos, biografía y contacto.
- `_quarto.yml`: nombre, navegación, búsqueda y pie de página.
- `styles.scss`: colores, espacios, tarjetas y reglas para tablet y teléfono.
- `proyectos/`: páginas de detalle con los datos de los tres proyectos y su listado.
- `assets/images/`: ilustraciones SVG locales, creadas como marcadores reemplazables. Puedes usar archivos JPG, PNG, WebP o SVG propios. Actualiza las rutas y los textos alternativos; conserva proporciones adecuadas.
- Fotografía: reemplaza `assets/images/fotografia.svg` y el texto «pendiente de agregar» en `index.qmd`.
- Logotipo: sustituye `assets/images/ilustracion.svg` por tu imagen y ajusta su texto alternativo.
- Contacto: los enlaces reales de correo, GitHub y LinkedIn están en `index.qmd` y `_quarto.yml` (pie de página). Actualiza ambos archivos si cambian tus datos.
- Proyectos: edita los metadatos y el contenido de las páginas en `proyectos/`. Inicio y el listado de proyectos toman sus datos automáticamente de esas páginas con `templates/projects.ejs.md`; `project-order` controla el orden. Solo Laboratorio de Análisis Verde tiene tecnologías confirmadas. Agrega repositorios únicamente si existen.
- Artículo destacado: `templates/featured.ejs.md` define la tarjeta horizontal; el listado nativo conserva título, resumen, categorías y fecha del artículo original. Las plantillas se ejecutan al generar y no requieren JavaScript personalizado en el navegador.

Los enlaces de la navegación apuntan al inicio o a sus secciones desde cualquier página. Quarto convierte los enlaces `.qmd` en enlaces a los HTML generados. No hay JavaScript personalizado; el menú, la búsqueda y los listados usan las funciones nativas de Quarto.

## Estado de verificación

La actualización se generó correctamente con `quarto render` usando Quarto 1.10.18. Se comprobaron 295 destinos y recursos locales del HTML generado, sin rutas ni anclas rotas, y la existencia del índice de búsqueda nativo.

Se revisaron las nueve páginas en Chrome sin ventana a 1440, 768, 375 y 320 px: sin desplazamiento horizontal, con imágenes cargadas e iconos visibles. Se midieron alturas y anchos iguales y pies alineados en las filas de tarjetas de intereses y proyectos. También se revisaron capturas de la portada en escritorio y teléfono.

Las fotografías e imágenes definitivas siguen pendientes de reemplazar. Las pruebas se realizaron con tamaños de navegador emulados; quedan pendientes pruebas en dispositivos físicos y la apertura de los perfiles externos y del cliente de correo. El sitio no está publicado.
