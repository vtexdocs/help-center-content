---
title: 'Configurar la asignación de sellers a organizaciones compradoras (B2B)'
id: 3VJtKNbLpVAl71uVdaOqpE
status: PUBLISHED
createdAt: 2023-12-21T18:05:34.497Z
updatedAt: 2024-06-06T16:46:09.065Z
publishedAt: 2024-06-06T16:46:09.065Z
firstPublishedAt: 2023-12-21T18:07:21.012Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: configuring-seller-allocation-for-buying-xky
locale: es
legacySlug: configurar-la-asignacion-de-sellers-a-organizaciones-compradoras-b2b-xky
subcategoryId: 3b0iTwoSQZq9m3Z2ezbWLd
---

Fabricantes y distribuidores desempeñan un papel fundamental en el proceso de compras entre empresas (B2B). En determinados escenarios, como en el ámbito de los marketplace, las características operacionales de estos fabricantes y distribuidores pueden llevar a conflictos en los canales de compra. Aquí tienes algunos ejemplos:

* Fabricantes: tienen un amplio conocimiento de sus productos y de la gestión de su cartera, pero necesitan crear portales de venta para gestionar mejor los procesos de sell in (venta de productos del fabricante al distribuidor) y sell out (venta del distribuidor al consumidor final).
* Distribuidores: se encargan de actuar directamente con las organizaciones compradoras y cuentan con capacidades complementarias, como la concesión de créditos, la capacitación masiva y una amplia red de distribución, pero optan por desarrollar múltiples portales de venta propios.

En este contexto, la organización compradora necesita acceder a diferentes canales y el proceso de compra se fragmenta y se vuelve ineficaz.

En VTEX, las organizaciones compradoras (B2B) pueden crear una regla de asignación que les permita realizar compras de productos de manera selectiva, enfocándose solamente en sellers que atiendan sus necesidades operativas o logísticas.

Para asignar sellers a una determinada organización compradora sigue los pasos a continuación:
<ol>
<li>En el Admin VTEX, accede a <b>Apps > Organizaciones y centros de costos B2B > Organizaciones</b>, o ingresa <b>Organizaciones</b> en la barra de búsqueda de la parte superior de la página.</li>
<li>En la pestaña <b>Organizaciones</b>, haz clic en el nombre de la organización compradora deseada.</li>

![Organizacion](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/B2B/Organization%20details/configurar-la-asignacion-de-sellers-a-organizaciones-compradoras-b2b-xky_1.jpg)

<li>En la pestaña <b>Sellers</b>, en <b>Disponible</b>, selecciona los sellers deseados.</li>

![Detalles Organización](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/B2B/Organization%20details/configurar-la-asignacion-de-sellers-a-organizaciones-compradoras-b2b-xky_2.jpg)

<li>Haz clic en el botón <b>AGREGAR A LA ORG.</b></li>

![Detalles Organización 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/B2B/Organization%20details/configurar-la-asignacion-de-sellers-a-organizaciones-compradoras-b2b-xky_3.jpg)

<li>Haz clic en el botón <b>Guardar</b>.</li>

A partir de ahora, cada vez que la organización realice una búsqueda en la plataforma VTEX, solamente se mostrarán los productos de los sellers que tenga asignados.
</ol>

>⚠️ Las organizaciones compradoras que opten por no crear asignaciones de sellers, podrán acceder igualmente a la información y realizar compras a todos los sellers disponibles en el marketplace.

Para más información sobre cómo integrar un nuevo seller, consulta el artículo [Agregar seller](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392).
