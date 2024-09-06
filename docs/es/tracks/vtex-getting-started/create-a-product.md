---
title: 'Crear un producto'
id: NgqTfNOte6KMsmWgasMIo
status: ARCHIVED
createdAt: 2018-05-02T20:51:24.416Z
updatedAt: 2020-05-21T23:48:43.076Z
publishedAt: 
firstPublishedAt: 2018-05-02T20:51:51.794Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: crear-un-producto
locale: es
trackId: 7sORw9I7QIka24MCQaIO2g
trackSlugES: vtex-getting-started
---

En primer lugar, es importante entender la diferencia entre SKU y producto - esta diferencia se refiere a la plataforma VTEX, pero también al tratamiento dado a estos conceptos por la mayoría de las operaciones de e-commerce.

>ℹ️ </strong>SKU:</strong> la unidad más pequeña posible de los artículos vendidos en la tienda. Stock y precio, por ejemplo, son propiedades del SKU.

>ℹ️ **Producto:** agregador de SKUs.

Vea los ejemplos siguientes:

| Producto | SKU 1 | SKU 2 | SKU 3 |
| ---------- | ---------- | ---------- | ---------- |
| __Pantalones__ | Pantalones P | Pantalones M | Pantalones G |
| __Jugo de naranja__ | Jugo de naranja 300ml | Jugo de naranja 600ml | Jugo de naranja 1L |

En la vitrina de la tienda, el cliente verá sólo el producto __Pantalones__, y no tres productos separados: "Pantalones P", "Pantalones M" y "Pantalones G".

La gestión de su inventario visualiza por separado cada uno de los SKUs que componen ese producto. Así que usted puede saber, por ejemplo, que tiene 50 pantalones M en stock, pero sólo 2 pantalones G.

>ℹ️ **Atención**: Cada vez que crea un SKU, usted necesita antes crear el producto.

Vamos a ver cómo crear el producto.

---

En el módulo __Catalog__, siga estos pasos:

1. Pase el ratón en la pestaña __Regitro de Productos__.
2. Vaya a la opción __Productos y SKUs__ y haga clic en __Registro de Productos y SKUs__.![Produto1](https://images.contentful.com/alneenqid6w5/4X1QYKrHz2ysAEAAW6gK6/85b81671add3f7573a9c4531b215ba82/Produto1.png)
3. Haga clic en el botón __Agregar producto__.![Produto2](https://images.contentful.com/alneenqid6w5/2HhkAREgQMMAkIMm8GaGgQ/7038413048c0611edb9079acd73020ba/Produto2.png)

Se le llevará a la pantalla de registro de producto.

- Rellene el campo __Nombre__ con el nombre que quiera para el producto.
- Rellene __Palabras sustitutas__ con nombres que pueden ser usados por error por clientes en búsquedas internas o en sitios de búsqueda, o palabras que usted desea que apunten a ese producto. Por ejemplo: el nombre del producto puede ser "Heladera", pero usted puede querer que búsquedas por el término "Refrigerador" también apunten hacia ese producto.
- Rellene __textLink__ con el texto que formará la URL del producto en el sitio. No se permiten espacios ni acentuación.
- Complete el __Título de la página (Metatag Title)__ con el título que aparecerá en la pestaña del navegador cuando el usuario esté en la página del producto.
- En el campo __Marca__, escriba el nombre de la marca de ese producto (posiblemente la que haya creado en el [paso anterior](/es/getting-started/crear-una-marca) o haga clic en __Busca avanzada__ para recogerla.
- En __Categoría__, haga __Mostrar en la tienda__ para que la visualización del producto en la tienda quede activa.

Para ver la lista completa de campos disponibles en esta pantalla, lea el artículo sobre los [campos de registro de producto](/es/tutorial/campos-de-registro-de-producto).

Después de llenar los campos, usted encontrará dos opciones de salvamento:
- __Guardar__: el registro del producto queda guardado, pero todavía no se mostrará en el sitio, porque no hay ningún SKU asignado a él.
- __Guardar y crear SKU:__ el registro del producto termina, y usted es llevado a la pantalla de [configuración de SKU](/es/getting-started/crear-un-sku) para crear un SKU que será asignado al producto que acabó de crear.
