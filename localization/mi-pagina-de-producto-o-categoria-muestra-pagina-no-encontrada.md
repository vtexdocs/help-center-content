---
title: "Mi página de producto o de categoría muestra 'Página no encontrada'"
id: EDU-12986
status: DRAFT
createdAt: 2026-03-13T00:00:00.000Z
updatedAt: 2026-03-13T00:00:00.000Z
publishedAt:
firstPublishedAt:
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: my-product-or-category-page-shows-page-not-found
locale: es
subcategoryId:
tags:
  - Catálogo
  - Storefront
  - Intelligent Search
---

Palabras clave: Error de carga | Problema de sincronización

Mi página de producto, de categoría o subcategoría devuelve el error `404` o se comporta como si la página no existiera (mensaje **PAGE NOT FOUND**). Esto puede suceder después de actualizaciones del catálogo, como cambios en el contenido del producto, imágenes, slugs, jerarquía de categorías o publicación en workspace.

En algunos casos, el problema parece ser un error de renderizado o visibilidad del producto, pero el síntoma en el storefront es el mismo: la ruta no se puede resolver correctamente. Dependiendo de la causa raíz, la solución puede requerir acción de tu parte, de VTEX o de ambos.

Las causas más comunes de este comportamiento son:

- [La URL o slug cambió](#verifica-la-url-y-el-slug)
- [El producto o categoría no está disponible en el storefront](#confirma-la-disponibilidad-en-el-storefront)
- [El producto o categoría no se indexó correctamente](#reindexa-el-item-afectado)
- [La ruta no se actualizó en el rewriter](#actualiza-la-generacion-de-la-ruta)
- [La jerarquía de categorías o las rutas de exploración son incorrectas](#verifica-la-jerarquia-de-categorias-y-las-rutas-de-exploracion)
- [Los cambios en el workspace no se publicaron](#publica-los-cambios-en-el-workspace)

## Soluciones

### Verifica la URL y el slug

1. En el Admin VTEX, accede a **Catálogo**, o ingresa **Catálogo** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en **Productos y SKUs** o **Categorías** para acceder al producto o categoría afectado.
3. Confirma si los slugs actuales de [producto](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-productos#seo) o [categoría](https://help.vtex.com/es/docs/tutorials/registrar-categoria) son correctos.
4. Verifica si la URL del storefront coincide exactamente con el slug actual.
5. Si el slug cambió recientemente, prueba la nueva URL.
6. Si hay links internos o externos que todavía apuntan a la URL antigua, crea una redirección desde la ruta antigua a la actual siguiendo las instrucciones en [Gestión de redirecciones de URL](https://help.vtex.com/es/docs/tutorials/gestion-de-redirecciones-de-url).

Después de completar estas verificaciones, abre de nuevo la URL actual y confirma que la página ya no devuelva el error `404`.

### Confirma la disponibilidad en storefront

1. En el Admin VTEX, accede a **Catálogo**, o ingresa **Catálogo** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Productos y SKUs** o **Categorías** para acceder al producto o categoría afectado.
3. Confirma que el producto o categoría está activo y configurado para mostrarse en la tienda. Para productos, confirma que al menos un SKU esté activo.
4. Verifica que el producto tenga precio y stock válidos para la [política comercial](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work) usada en la tienda.
5. Si tu operación muestra productos no disponibles, confirma que la configuración de exhibición correspondiente esté habilitada según los criterios de [disponibilidad](https://help.vtex.com/es/docs/tutorials/disponibilidad).
6. Confirma que el ítem esté asignado a la marca, categoría y estructura comercial esperadas.

Después de validar estos ajustes, prueba el storefront de nuevo para confirmar que el producto o categoría está disponible y ya no se comporta como página aparentemente inexistente.

### Reindexa el ítem afectado

1. En el Admin VTEX, ejecuta el [reindexado](https://help.vtex.com/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web#informacion-indexada) para el producto o categoría afectada.

> ⚠️ Si están fallando varias páginas relacionadas puede ser necesario realizar un reindexado completo del catálogo.

2. Espera a que el proceso de indexación termine y monitorea el status en el [historial de indexación](https://help.vtex.com/es/docs/tutorials/historial-de-indexacion) o revisa el [log de reindexaciones del catálogo](https://help.vtex.com/es/docs/tutorials/ver-el-log-de-reindexaciones) si es necesario.
3. Prueba nuevamente la URL afectada en una ventana de navegador anónima.

Una vez finalizado el proceso de indexación, prueba nuevamente la URL afectada y confirma que la página volvió a comportarse normalmente.

### Actualiza la generación de la ruta

1. Verifica si la ruta esperada existe en la [configuración del rewriter](https://help.vtex.com/es/troubleshooting/el-producto-no-se-muestra-en-la-busqueda-del-sitio-web#modificar-filtro-de-busqueda-en-rewriter).
2. Confirma que la ruta apunte al producto, categoría o subcategoría correcto.
3. Si la ruta está obsoleta o inconsistente, actualiza la generación de rutas según tu procedimiento interno.
4. Si tu equipo usa versionado de rutas, incrementa la versión de la ruta y espera que el storefront reconstruya las rutas.
5. Prueba nuevamente la URL afectada.

Después de refrescar la ruta, prueba de nuevo la URL para confirmar que el storefront reconstruyó la ruta correctamente.

### Revisa la jerarquía de categorías y la ruta de exploración

1. En el Admin VTEX abre el [árbol de categorías](https://help.vtex.com/es/docs/tutorials/desactivar-y-reorganizar-categorias#editar-el-arbol-de-categorias).
2. Confirma que la subcategoría afectada está vinculada a la categoría padre esperada.
3. Verifica que la ruta de exploración en el storefront coincida con esa jerarquía.
4. Compara la subcategoría afectada con otra subcategoría del mismo padre que funcione correctamente.
5. Si la ruta de exploración apunta a una ruta desactualizada o mal formada, corrige la estructura de categorías y reindexa las categorías afectadas.

Después de corregir la estructura de categorías, prueba nuevamente los links de la ruta de exploración y de subcategoría y confirma que abren páginas válidas.

### Publica los cambios en el workspace

1. Confirma dónde se aplicó el cambio en el [workspace](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace).
2. Valida la ruta corregida en el workspace.
3. Publica o promueve los cambios del workspace según tu proceso de release.
4. Prueba la página en la tienda en producción y confirma que esté usando la ruta actualizada.

Si la página continúa devolviendo el error `404` después de seguir todos los pasos anteriores, ponte en contacto con el Soporte VTEX según se indica en [Abrir tickets para el Soporte VTEX](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).
