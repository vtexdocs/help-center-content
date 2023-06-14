---
title: Error de mensaje incorrecto al crear/editar SKUs
id: 19tQzBRYyVSI1MW2STZNFf
status: PUBLISHED
createdAt: 2023-03-20T19:50:11.591Z
updatedAt: 2023-03-20T19:50:12.021Z
publishedAt: 2023-03-20T19:50:12.021Z
firstPublishedAt: 2023-03-20T19:50:12.021Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: error-de-mensaje-incorrecto-al-creareditar-skus
kiStatus: Backlog
internalReference: 774518
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para crear o editar una SKU es necesario rellenar los campos obligatorios, como peso del envío, altura, anchura y longitud. Sin embargo, cuando dejamos uno de estos campos sin un valor válido y guardamos la SKU, Admin devuelve un mensaje de error sobre las especificaciones, incluso cuando no hay especificaciones requeridas que rellenar.



##

## Simulación



- Ir al módulo Catálogo
- Añada un nuevo producto y guárdelo para crear una nueva SKU
- Rellene todos los campos, excepto la información de envío, que es obligatoria.
- Guarde la SKU y observe que aparecerán 2 mensajes: "Parámetros no válidos" y "Especificaciones no introducidas Comprobar ficha".



## Workaround


No hay solución




