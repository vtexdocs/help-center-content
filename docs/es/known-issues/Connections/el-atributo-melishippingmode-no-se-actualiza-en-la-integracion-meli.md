---
title: "El atributo meli_shipping_mode no se actualiza en la integración MELI"
id: 7DMsCqv2AsOEsL3LGLhxWq
status: PUBLISHED
createdAt: 2023-08-03T10:19:05.524Z
updatedAt: 2024-06-10T13:38:07.225Z
publishedAt: 2024-06-10T13:38:07.225Z
firstPublishedAt: 2023-08-03T10:19:06.574Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: el-atributo-melishippingmode-no-se-actualiza-en-la-integracion-meli
locale: es
kiStatus: Fixed
internalReference: 873993
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema con el atributo del producto llamado "meli_shipping_mode" que no se está actualizando en la integración MELI


##

## Simulación



Dentro de la especificación del producto, el vendedor puede utilizar el atributo "meli_shipping_mode" y establecer ME1 o ME2 para definir la estrategia de envío en MELI.

Pero actualmente sólo podemos enviar este valor al crear el SKU en MELI, y no estamos actualizando con el valor correcto.




## Workaround


n/a





