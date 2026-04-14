---
title: 'Crear lista de recomendaciones (beta)'
createdAt: 2026-03-17T13:01:10.919Z
updatedAt: 2026-03-17T13:01:10.919Z
publishedAt: 2026-03-17T13:01:10.919Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: creating-recommendation-lists
locale: es
---

> ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres cliente VTEX y deseas adoptar esta funcionalidad en tu negocio, ponte en contacto con nuestro [Soporte comercial](http:///es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el <a [formulario de contacto](https://vtex.com/es-mx/contacto/).

La creación de listas de recomendaciones permite definir diferentes estrategias para mostrar productos relevantes a los consumidores. Cada lista utiliza una estrategia de recomendación y se muestra en una posición específica en la tienda.

Esta guía describe cómo crear una nueva lista de recomendaciones desde el Admin VTEX.

> ⚠️ No recomendamos reutilizar la misma lista en múltiples posiciones en el frontend. Crea una lista para cada posición para hacer seguimiento de las métricas de desempeño de forma separada y con mayor granularidad.

## Requisito

Tener activada la funcionalidad de [Recomendaciones de productos](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta) en la tienda.

## Crear lista de recomendaciones

Para crear una lista de recomendaciones en el Admin VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Recomendaciones** o escribe **Recomendaciones** en la barra de búsqueda en la parte superior de la página.

2. Haz clic en el botón `+ Lista`.

   ![crear-lista-de-recomendaciones-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/crear-lista-de-recomendaciones_1.gif)

3. En el panel lateral, haz clic en la estrategia de tu lista de recomendaciones:

   - **Recomendado para ti:** productos que corresponden al comportamiento y preferencias del comprador.

   - **Productos similares:** alternativas con propósito o atributos similares.

   - **Vistos recientemente:** productos con los que el comprador interactuó recientemente.

   - **Más populares:** productos con el mayor número de vistas de página.

   - **Comprados juntos:** productos que se adquieren frecuentemente junto con el producto que se está viendo.

   - **Colección manual:** Grupo de productos personalizado que define el retailer.

   - **Productos visualmente similares:** productos visualmente parecidos a un producto específico.

   > ℹ️ Para más información sobre las estrategias disponibles, consulta [Recomendaciones de productos (beta)](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta).

4. Llena la información en el formulario de creación de lista:

   - **Estrategia:** estrategia de recomendación seleccionada en el paso anterior. Si es necesario cambiarla, haz clic en el ícono de lápiz.
   - **Nombre:** nombre que deseas dar a la lista de recomendaciones. Este será el título de la lista mostrado en la tienda. Recomendamos que utilices el título que tendrá la lista en el storefront (por ejemplo: "Para ti").
   - **Tags (opcional):** etiquetas internas que agrupan las listas de recomendación para facilitar el análisis de métricas. Recomendamos que incluyas la página donde se utilizará la lista como tag (por ejemplo: Home). Escribe la tag deseada y presiona `Enter` o la tecla `,` (coma) para agregarla. Puedes agregar múltiples tags.

   ![crear-lista-de-recomendaciones-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/crear-lista-de-recomendaciones_2.png)

5. Después de llenar toda la información, haz clic en el botón `Crear` para guardar la lista de recomendaciones.

   Se mostrará el mensaje de confirmación _Lista creada con éxito_. A partir de ese momento, la lista estará disponible para implementar en el storefront.

   ![crear-lista-de-recomendaciones-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/crear-lista-de-recomendaciones_3.png)

## Copiar ID de la lista

Después de crear la lista, necesitarás el ID de la lista para implementarla en el storefront de tu tienda. Para copiar el ID de la lista:

- En la pantalla de confirmación **Lista creada con éxito**, haz clic en el botón `Copiar ID`. El ID se copiará al portapapeles de tu sistema.
- También puedes copiar el ID posteriormente a través del [Dashboard de recomendaciones](https://help.vtex.com/es/docs/tutorials/dashboard-de-recomendaciones):

  1. Accede a **Storefront > Recomendaciones**.
  2. Ubica la lista deseada en la tabla de estanterías de productos.
  3. Haz clic en el menú ⋮ en la fila de la estantería.
  4. Selecciona **Copiar ID**.

## Implementar la lista en el storefront

Utiliza el [ID copiado](#copiar-id-de-la-lista) para agregar la estantería de recomendaciones en las páginas de tu tienda.

- Para Store Framework, consulta la documentación del componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf).
- Para FastStore, consulta la guía [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore).
- Para tiendas headless, consulta la guía [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores).

## Hacer seguimiento del rendimiento

Accede al [Dashboard de recomendaciones](https://help.vtex.com/es/docs/tutorials/dashboard-de-recomendaciones) para analizar métricas de conversión, tasa de clics e ingresos generados por la lista creada.

## Más información

- [Recomendaciones de productos (beta)](https://help.vtex.com/es/docs/tutorials/recomendaciones-de-productos-beta)
- [Dashboard de recomendaciones (beta)](https://help.vtex.com/es/docs/tutorials/dashboard-de-recomendaciones)
- [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
- [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
- [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
