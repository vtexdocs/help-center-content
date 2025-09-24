---
title: 'Forzar búsquedas con términos bloqueados a devolver resultados'
id: 6OcM3za1tmUIuiua8y40I2
status: PUBLISHED
createdAt: 2018-01-23T19:44:20.011Z
updatedAt: 2025-06-12T20:28:40.485Z
publishedAt: 2025-06-12T20:28:40.485Z
firstPublishedAt: 2018-01-23T20:35:50.068Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: forcing-searches-with-blocked-terms-to-return-results
legacySlug: forzar-busquedas-con-terminos-bloqueados-a-devolver-resultados
locale: es
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

> ⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

Para hacer las búsquedas de los clientes más precisas, el buscador de VTEX ignora algunos términos que son muy comunes. Ejemplos incluyen las palabras "com" y "todo", del portugués, "that" y "with", del Inglés, y "hace" y "uno", del español. [Aquí tienes la lista completa de términos bloqueados](/es/tutorial/por-que-el-buscador-de-vtex-ignora-algunos-terminos-buscados).

Sin embargo, esto a veces genera dificultades para la tienda.

Digamos, por ejemplo, que uno de los productos de su tienda es el juego "Uno".

La palabra "Uno" es bloqueada por la búsqueda. Entonces, si un usuario escribe sólo "Uno" en el campo de búsqueda de la tienda, no verá ningún resultado, incluso si el producto está disponible.

Para evitar este escenario, usted puede elegir una de las dos acciones siguientes.

## Crear una carpeta en el CMS con el nombre del término buscado

El buscador de VTEX devuelve varios tipos de resultado, siguiendo el orden de prioridad abajo:
- Landing page (título de la carpeta en CMS).
- Marca.
- Departamento.
- Palabra clave.

Cuando el cliente busca el título de un producto, el caso es el de palabra clave, que - aunque sea el más común - es el de menor prioridad.

Siguiendo el ejemplo anterior, si el usuario busca sólo "Uno", el sitio no traerá ningún resultado.

Pero si usted __crea una carpeta en CMS__ con el título "Uno", cuando ese término es buscado, antes de buscar una palabra clave el sistema buscará y encontrará la carpeta que usted creó.

Con eso, el usuario será llevado a esa carpeta. Después sólo hay que apuntarla hacia el producto deseado.

## Redirigir URLs de búsqueda a la página del producto

Otra alternativa para forzar que las búsquedas con términos bloqueados devuelvan resultados relevantes es a través del __redirect__.

De nuevo siguiendo nuestro ejemplo, usted puede crear un redirect 301 de la URL `{AccountName}.com.br/Uno` para la página del producto.

Siempre que alguien haga una búsqueda por "Uno", la URL montada será ésta arriba, y el usuario será automáticamente llevado a la página del producto.
