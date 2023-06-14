---
title: 'Crear cupones de descuento'
id: 6RU676Ot6K15ZT1aJA8NRW
status: CHANGED
createdAt: 2020-01-13T21:02:16.828Z
updatedAt: 2020-11-27T19:40:30.513Z
publishedAt: 2020-02-13T16:36:15.347Z
firstPublishedAt: 2020-01-14T13:10:26.077Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: crear-cupones-de-descuento
locale: es
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugES: promociones
---

El cupón es un código informado por el cliente en el carrito, que otorga un descuento en el valor de la compra.

Todo cupón es creado por la propia tienda en el módulo Tasas y Promociones.

Hay dos formas de crear un cupón:
- Por medio de la sección Cupones.
- Directamente al crear una Promoción Regular.

Aquí veremos el primer escenario.

### Crear cupón por medio de la sección Cupones

Para crear un cupón de descuento, siga los pasos a continuación:

1. Acceda al módulo Tasas y Promociones.
2. Haga clic en la opción **Cupones**.
3. Haga clic en **Nuevo cupón**.
4. Cree un código para el cupón (por ejemplo: `NAVIDAD2020`).
5. Cree un utm_source (para el rastreo del origen) y/o un utm_campaign (para el rastreo de la campaña).
6. Haga clic en **Restricciones y limitaciones de uso** y defina la cantidad de productos que se pueden comprar con este cupón, independientemente de cuántas compras se realicen para alcanzar ese número.
7. Haga clic en el botón **Guardar**.

<div class="alert alert-info">
No es necesario crear un <code>utm_source</code> y un <code>utm_campaign</code>. Pero es necesario crear <b>por lo menos uno </b> de estos.<br>
Consulte el artículo <a href="https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium">Qué son utm_source, utm_campaign y utm_medium</a> para entender mejor lo que son estos UTMs.
</div>

Al momento de crear una promoción regular, debe seleccionar el flag  `utm_source` y/o `utm_campaign`e ingresar los UTM informados durante la creación del cupón en los campos correspondientes.
