---
title: 'Registrar un producto para la preventa'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2025-11-06T15:35:57.132Z
publishedAt: 2025-11-06T15:35:57.132Z
firstPublishedAt: 2021-09-14T16:54:57.039Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-a-product-for-presale
legacySlug: registrar-un-producto-para-la-preventa
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

En la plataforma VTEX, los lojistas pueden establecer la fecha prevista de llegada de un producto y ofrecerlo en modo de preventa. La preventa permite a los clientes reservar productos, mediante pago, antes de la fecha de lanzamiento y de que estén disponibles en el mercado.

En este artículo trataremos los siguientes temas:

- [Crear un producto para la preventa](#crear-un-producto-para-la-preventa)
- [Programar precios](#programar-precios)
- [Programar contenido](#programar-contenido)

> ⚠️ Configurar el campo **Fecha de release** para un producto no afecta su visibilidad en el storefront, la cual se determina por la activación o desactivación del campo **Mostrar en el sitio webo**.

## Crear un producto para la preventa

Para que un producto esté disponible en preventa, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `+ Agregar producto`.
3. En la sección **Storefront**, en el campo **Fecha de release**, asigna una fecha para lanzar el producto.

  > ℹ️ Este campo se utiliza para ayudar en la ordenación de los resultados de búsqueda en el sitio web. Puedes utilizar una query string `O=OrderByReleaseDateDESC` para obtener este valor y mostrar el orden de visualización por fecha de release. Además, el valor de este campo influye en la creación de [colecciones automáticas](/es/docs/tutorials/registrar-colecciones-beta) y determina la fecha de [indexación](/es/docs/tutorials/entendiendo-el-funcionamento-de-la-indexacion) del producto.

4. Rellena los campos del formulario de registro de producto, según se describe en [Agregar o editar productos](/es/docs/tutorials/agregar-o-editar-productos).
5. Haz clic en `Guardar`.
6. Haz clic en la pestaña `SKUs`.
7. Haz clic en `+` **> Agregar nuevo SKU**.
8. En la sección **Estrategia comercial**, en el campo **Fecha de preventa**, asigna una fecha de preventa al SKU. La fecha de preventa es la fecha prevista en que el ítem llegará a las tiendas y estará disponible para la venta.

  > ℹ️ Para configurarla, debes tomar en cuenta la fecha de release del ítem y el cálculo de envío a los clientes: `tiempo de entrega final = SLA de entrega + plazo para recibir el lote de suministro`.

9. Rellena los campos del formulario de registro de SKU, según se describe en [Agregar o editar SKUs](/es/docs/tutorials/agregar-o-editar-skus).
10. Haz clic en `Guardar`.

> ⚠️ El pedido del ítem en preventa solo debe facturarse a partir de la fecha de lanzamiento, es decir, cuando haya disponibilidad real de *stock* del producto.

## Programar precios

Para programar los precios fijos de tu tienda para la preventa de un producto, sigue los pasos descritos en el artículo [Programar precios](/es/docs/tutorials/programar-precio). 

## Programar contenido

Para aumentar el éxito en la etapa de preventa y lograr un mayor alcance de clientes, es importante potenciar la difusión del producto que será lanzado. Para eso, vale la pena programar contenido sobre el lanzamiento, tal como se explica en el artículo [Programación de funcionalidades para eventos especiales](/es/docs/tutorials/programacion-de-funcionalidades-para-eventos-especiales#programar-contenido).
