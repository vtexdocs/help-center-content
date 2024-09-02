---
title: 'Cupones promocionales: tipos y grupos'
id: 1aAEN3ADpz19ss5JCIEBdL
status: PUBLISHED
createdAt: 2022-04-28T20:08:46.916Z
updatedAt: 2024-08-15T11:27:28.984Z
publishedAt: 2024-08-15T11:27:28.984Z
firstPublishedAt: 2022-04-28T20:24:24.046Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: cupones-beta
locale: es
legacySlug: cupones-beta
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

Un cupón es un código promocional formado por una secuencia de letras y números. Puedes proporcionar cupones para que los clientes apliquen promociones sobre el valor del carrito. De esta manera, al informar el código de un cupón válido al momento de la compra, tus clientes pueden obtener descuentos sobre el valor del pedido.

## Cómo crear cupones

Puedes crear y editar cupones en el Admin VTEX, a través de **Promociones** > [Cupones](https://help.vtex.com/es/tutorial/lista-de-cupones-beta--5z5ya3IonsC2W4B5h4JrsZ) o de la [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/promotions-taxes-api-v2).

<div class="alert alert-warning">
<p>El cupón debe estar vinculado, al menos, a una promoción para poderse utilizar. Un cupón se puede asociar a cualquier tipo de promoción, excepto a una <a href="https://help.vtex.com/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume">Promoción de campaña</a>. Obtén más información en <a href="https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU">Crear cupón (Beta)</a>.</p>
</div>

## Tipos de cupones

En VTEX, existen cupones sencillos y lotes de cupones. A continuación, encontrarás la descripción y el uso de cada tipo de cupón.

### Cupones sencillos

Los cupones sencillos son aquellos que proporcionan un solo código promocional.

El cupón sencillo no se limita obligatoriamente a un solo uso. Que sea «sencillo» significa que proporciona un solo código promocional. Al crear el cupón, podrás configurar el número de veces que el cupón se podrá usar en **Restricciones**.

El cupón sencillo es útil en casos como los que se indican a continuación:

* Promociones relacionadas con fechas conmemorativas en las que varios clientes pueden usar un mismo código promocional, con o sin restricciones de uso. Por ejemplo: `NAVIDAD22`.
* Promociones que se aplican a la primera compra de un cliente en la tienda. Varios clientes pueden usar un mismo código promocional, con la restricción de que cada cliente solo podrá usarlo una vez. Por ejemplo: `BIENVENIDA10`.

### Lotes de cupones

Los lotes de cupones están compuestos por un grupo de códigos, es decir, proporcionan más de un código promocional con el mismo efecto.

El lote de cupones es útil en casos como los que se indican a continuación:

* Promociones con influenciadores digitales en los que cada influenciador puede compartir un código diferente pero vinculado al mismo cupón con su red de seguidores. 
* Programas de fidelidad que ponen a disposición de cada cliente participante varios códigos vinculados a un mismo cupón.
* Divulgación masiva de códigos de cupón que se pueden configurar para ser usados una sola vez.

La plataforma genera códigos automáticamente a partir del número de prefijo, agrega un guion y un código aleatorio de 15 caracteres que incluye letras y números. Por ejemplo: al crear un lote de cupones con el código `PROMO`, la plataforma generará códigos con el formato `PROMO-99m0xjzfum1o6tk`.

Puedes generar hasta 1000 códigos asociados a un lote. Para generar más de un código vinculado a un cupón, debes activar la opción **Generando cupones en lote** al crear el cupón e informar la cantidad deseada de cupones. Para obtener más información sobre esta configuración, consulta [Crear cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU).

Al crear el lote de cupones, podrás configurar el número de veces que se puede utilizar cada código en **Restricciones**.

## Más información

* [Lista de cupones](https://help.vtex.com/es/tutorial/lista-de-cupones-beta--5z5ya3IonsC2W4B5h4JrsZ)
* [Crear cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU)
