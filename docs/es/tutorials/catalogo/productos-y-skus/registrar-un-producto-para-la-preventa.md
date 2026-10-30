---
title: 'Registrar un producto para preventa'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2026-10-08T15:00:00.000Z
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

En VTEX, los retailers pueden vender un producto en preventa antes de que llegue al almacén. En la preventa el cliente compra y paga el ítem por adelantado, y el plazo de entrega se calcula a partir de la fecha prevista de llegada al almacén.

En este artículo trataremos los siguientes temas:

- [Crear un producto para preventa](#crear-un-producto-para-preventa)
- [Ordenar productos por fecha de lanzamiento](#ordenar-productos-por-fecha-de-lanzamiento)
- [Validar la configuración](#validar-la-configuracion)
- [Programar precios](#programar-precios)
- [Programar contenido](#programar-contenido)

> ℹ️ Lo que activa la preventa es el campo **Fecha de preventa**, configurado en el SKU. El campo **Fecha de lanzamiento**, configurado en el producto, no interfiere en la preventa ni en la visibilidad del producto en el storefront, que se determina con el campo **Mostrar en el sitio web**.

## Crear un producto para preventa

Para ofrecer un producto en preventa sigue los pasos a continuación:

1. En el Admin VTEX accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `+ Agregar producto`.
3. (Opcional) En la sección **Storefront**, en el campo **Fecha de lanzamiento** selecciona la fecha en la que lanzarás el producto.

> ℹ️ Este campo no activa la preventa ni cambia el plazo de entrega. Se utiliza para ordenar los resultados de búsqueda del sitio web, como se explica en [Ordenar productos por fecha de lanzamiento](#ordenar-productos-por-fecha-de-lanzamiento). El valor de este campo también se tiene en cuenta al crear colecciones automáticas y en la fecha de indexación del producto. Más información en [Registrar colecciones (beta)](/es/docs/tutorials/registrar-colecciones-beta) y en [Entendiendo cómo funciona la indexación](/es/docs/tutorials/entendiendo-el-funcionamento-de-la-indexacion).

4. Completa los demás campos para crear el producto. Más información en [Agregar o editar productos](/es/docs/tutorials/agregar-o-editar-productos).
5. Haz clic en `Guardar`.
6. Haz clic en la pestaña `SKUs`.
7. Haz clic en el signo `+` **> Agregar nuevo SKU**.
8. En la sección **Estrategia comercial**, en el campo **Fecha de preventa** selecciona la fecha prevista de llegada del ítem al almacén, es decir, la fecha en que estará disponible para el envío. El SKU puede venderse antes de esta fecha y la entrega se calcula a partir de la misma.

> ℹ️ La fecha estimada de entrega que se muestra al cliente se calcula sumando el SLA de entrega a la fecha de preventa: `fecha estimada de entrega = fecha de preventa + SLA de entrega`. Más información en [Cómo funciona el cálculo del envío](/es/docs/tutorials/como-funciona-el-calculo-del-envio).

9. Completa los demás campos para crear el SKU. Más información en [Agregar o editar SKUs](/es/docs/tutorials/agregar-o-editar-skus).
10. Haz clic en `Guardar`.
11. Registra la cantidad disponible del SKU en el almacén. Más información en [Actualización de la cantidad de ítems en stock](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock).

> ⚠️ La **Fecha de preventa** por sí sola no basta para que el ítem se pueda vender. El cliente solo puede comprar el SKU en preventa si hay cantidad disponible en stock.

> ℹ️ El pedido del ítem en preventa solo debe facturarse a partir de la fecha de preventa, es decir, cuando el ítem esté disponible en stock para el envío.

## Ordenar productos por fecha de lanzamiento

La **Fecha de lanzamiento** permite mostrar los productos del lanzamiento más reciente al más antiguo en las páginas de lista de productos. Agrega al final de la URL de la página la query string correspondiente a la tecnología de [frontend](/es/docs/tracks/frontend) y al buscador de la tienda:

| Frontend                                                                                 | Buscador                                                                                                                                                                    | Query string                    |
| :--------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| [Store Framework (VTEX IO)](/es/docs/tracks/frontend#store-framework) | [Intelligent Search](/es/docs/tutorials/intelligent-search-vision-general)                                                                             | `?order=OrderByReleaseDateDESC` |
| [FastStore](/es/docs/tracks/frontend#faststore)                                          | [Intelligent Search](/es/docs/tutorials/intelligent-search-vision-general)                                                                                                  | `?sort=release_desc`            |
| [CMS Portal (Legado)](/es/docs/tracks/frontend#cms-portal-legado)     | [Intelligent Search](/es/docs/tutorials/intelligent-search-vision-general) o [VTEX Search (Legado)](/es/docs/tutorials/como-funciona-vtex-search-legado) | `?O=OrderByReleaseDateDESC`     |

Ejemplo en una tienda Store Framework: `https://www.{nombredelatienda}.com.mx/{departamento}/{categoria}?order=OrderByReleaseDateDESC`.

Cuando no se aplica la query string, el orden de los resultados depende del buscador:

- **[Intelligent Search](/es/docs/tutorials/intelligent-search-vision-general):** los resultados siguen la relevancia, en la que la fecha de lanzamiento es un criterio configurable que pierde valor a lo largo de 90 días. Más información en [Reglas de relevancia](/es/docs/tutorials/reglas-de-relevancia).
- **[VTEX Search (Legado)](/es/docs/tutorials/como-funciona-vtex-search-legado):** los resultados siguen la puntuación (score) que el indexador calcula para el término buscado.

## Validar la configuración

Para confirmar que el plazo de entrega del SKU se calcula a partir de la fecha de preventa sin hacer un pedido real, simula la compra de una de estas formas:

- **En el storefront:** agrega el SKU al carrito, avanza hasta el checkout e ingresa un código postal de entrega. Comprueba que el plazo de entrega que se muestra se cuenta a partir de la fecha de preventa. No es necesario finalizar la compra.
- **Vía API:** envía una solicitud al endpoint [Cart simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) de Checkout API con el SKU y el código postal deseados. Comprueba el plazo de entrega devuelto en el objeto `logisticsInfo` de la respuesta.

> ⚠️ El [Simulador de envío](/es/docs/tutorials/simulador-de-envio) del Admin VTEX calcula el plazo de entrega sin tener en cuenta la **Fecha de preventa**. Por eso utiliza una de las opciones anteriores para validar la configuración.

## Programar precios

Para programar los precios fijos de tu tienda para la preventa de un producto, sigue los pasos descritos en [Programación de precios](/es/docs/tutorials/programar-precio).

## Programar contenido

Para aumentar el éxito en la etapa de preventa y llegar a más clientes, es importante potenciar la difusión del producto que se va a lanzar. Una manera de potenciar esa difusión es programar contenido sobre el lanzamiento, como se explica en el artículo [Programación de funcionalidades para eventos especiales](/es/docs/tutorials/programacion-de-funcionalidades-para-eventos-especiales#programar-contenido).
