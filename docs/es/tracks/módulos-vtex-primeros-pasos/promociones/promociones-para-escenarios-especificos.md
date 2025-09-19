---
title: 'Promociones para escenarios específicos'
id: jOu9b69mKbrTDfSJYAawy
status: PUBLISHED
createdAt: 2020-01-22T13:55:51.326Z
updatedAt: 2023-10-23T17:08:04.859Z
publishedAt: 2023-10-23T17:08:04.859Z
firstPublishedAt: 2020-01-22T15:01:20.187Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: promotions-for-specific-scenarios
locale: es
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promociones
order: 5
---

Como se explicó en el tópico anterior, la Promoción Regular es el tipo más genérico de promoción en VTEX.

Sin embargo, a veces su tienda puede necesitar crear promociones para escenarios más específicos.

Es para atender a estos escenarios que ofrecemos los tipos de promociones que se explican a continuación:

- Comprar juntos
- Más por menos
- Descuento progresivo
- Compre y gane
- Límite de ítems con promoción en el carrito 

> ℹ️ Las pantallas de configuración de todas las promociones tienen las mismas secciones principales explicadas en el artículo sobre Promoción Regular. Las opciones presentes en estas secciones se repiten en todas las promociones, con excepción de algunas configuraciones específicas de condiciones para aplicar la promoción. Por lo tanto, en este artículo nos enfocamos en estas configuraciones específicas.

### Comprar Juntos

La promoción Comprar Juntos se utiliza para conceder un descuento a dos o más productos cuando se colocan al mismo tiempo en el carrito.

La pantalla de configuración de la promoción ofrece dos listas de SKUs, que pueden añadirse manualmente o por plantilla.

Puede, entonces, definir un valor de descuento para cada una de estas listas. Si, por ejemplo, la lista 1 tiene un 10% de descuento y la lista 2 un 5% de descuento, cuando el carrito tenga al menos un producto de cada una de estas listas, se concederá un descuento total del 10% sobre el valor de los ítems de la lista 1 y un descuento del 5% sobre el valor de los ítems de la lista 2.

![Compre Junto - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_1.png)

Dos ejemplos de este tipo de promoción serían "Compre un pantalón y gane 10% de descuento en la compra de un cinturón" y "Compre un par de zapatos + un par de calcetines y gane 15% de descuento".

Para entender la promoción Comprar Juntos con más detalle, consulte el artículo [Crear la promoción Comprar Juntos](/es/tutorial/comprar-juntos--tutorials_323).

### Más por Menos

La promoción Más por Menos se utiliza para otorgar un descuento cuando el cliente agrega varias unidades del mismo producto al carrito. Un ejemplo clásico de esta promoción sería "Lleve 4 y pague 3".

En la configuración de la promoción Más por Menos, la tienda debe definir a qué colecciones o SKUs se aplicará. Luego, elija el número de ítems en el carrito para que funcione y el número de ítems con descuento.

![Más por menos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_2.png)

Por ejemplo:

- Por cada `3` productos, el cliente llevará `1` producto `gratis`.
- Por cada `5` productos, el cliente llevará `2` productos `con descuento` del `30%`.

Para comprender la promoción Más por Menos con más detalle, consulte el artículo [Crear promoción Más por Menos](/es/tutorial/crear-promocion-mas-por-menos--tutorials_325).

### Descuento Progresivo

La promoción de Descuento Progresivo se utiliza cuando la tienda desea ofrecer un porcentaje de descuento para una cierta cantidad de productos ingresados en el carrito.

Un ejemplo sería: “Al comprar 5 kg de alimento para mascotas, reciba 5% de descuento. Agregue 5 kg más y reciba 10% más”.

Al configurar la promoción de Descuento Progresivo, la tienda debe definir a qué colecciones o SKUs se aplicará. Luego, elija la primera cantidad y el primer descuento aplicado. Por ejemplo: para los primeros `3` ítems, el cliente recibirá un descuento del `5%`.

Para continuar la progresión del descuento, haga clic en el botón "+". Se agregará una nueva línea y, entonces, podrá agregar un nuevo descuento. Por ejemplo: para los siguientes 2 productos, el cliente recibirá un descuento adicional del 5%. Y así sucesivamente.

![Desconto progressivo - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_3.png)

Para entender la promoción del Descuento Progresivo con más detalle, vea el artículo [Cómo el Descuento Progresivo funciona](/es/tutorial/descuento-progresivo--tutorials_324).

### Compre y Gane

La promoción Compre y Gane se utiliza para ofrecer flete gratis o un regalo si se compra un determinado producto. Por ejemplo, "compre un televisor y no pague el envío" o "compre un videojuego y gane un juego".

El descuento aplicado (flete gratis o regalo) debe definirse en los datos generales de la promoción. Luego, la tienda debe elegir las colecciones o SKUs a los que se aplicará. Finalmente, debe definir la cantidad mínima de ítems en el carrito para que la promoción funcione.

![Compre e Ganhe - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_4.png)

Para entender la promoción Compre y Gane con más detalle, vea el artículo  [Cómo funciona la promoción Compre y Gane](/es/tutorial/compre-y-gane--tutorials_322).

### Límite de ítems con promoción en el carrito  

Esta configuración define cuántos ítems del carrito serán objeto de la promoción.

> ⚠️ Es importante señalar que esta posibilidad es **válida apenas para una promoción regular con descuento porcentual.**

Después de rellenar todos [los campos de una promoción regular](/es/tutorial/regular-promotion--tutorials_327) con descuento porcentual, puede seleccionar la opción __Definir la cantidad máxima de ítems afectados por carrito__ en la sección __Restricciones y limitaciones de uso__.

![Limite itens - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_5.png)

Por defecto, la opción __ilimitado__ está activa, aplicando la promoción a todos los ítems del carrito, como se ilustra en el siguiente diagrama:

![Caso ilimitado ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_6.png)

Para restringir el número de ítems del carrito que recibirán el descuento, puede elegir una de las siguientes opciones:

- __Ítems por carrito__: esta configuración limita la aplicación de la promoción a un número de ítems del carrito. Una vez alcanzado el límite, la promoción no se aplicará al resto del carrito. El sistema utiliza el precio como criterio de elección, por lo que los ítems con el precio más bajo serán los primeros en ser afectados.

![Caso por itens ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_7.png)

- __Ítems por producto__: esta configuración limita la promoción a un número de unidades de cada producto. Como en el siguiente ejemplo, apenas dos unidades por producto serán elegibles para la promoción. El precio más bajo define qué ítems de cada producto son elegibles para la promoción.

![Caso por produto ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_8.png)

- __Ítems por SKU__: esta configuración limita la promoción a un número de unidades por cada SKU en el carrito. Como en el siguiente ejemplo, apenas dos unidades de cada SKU serán elegibles para la promoción. Como en el caso anterior, será el precio más bajo el que defina los ítems elegibles para la promoción.

![Caso por SKU ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/promociones/promociones-para-escenarios-especificos_9.png)
