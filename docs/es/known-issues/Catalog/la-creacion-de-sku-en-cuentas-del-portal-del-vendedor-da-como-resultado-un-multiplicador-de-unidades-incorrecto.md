---
title: "La creación de SKU en cuentas del portal del vendedor da como resultado un multiplicador de unidades incorrecto"
id: 3PqHY1apthTNSxLcSAfQof
status: PUBLISHED
createdAt: 2025-02-26T13:53:02.321Z
updatedAt: 2025-02-26T13:53:03.341Z
publishedAt: 2025-02-26T13:53:03.341Z
firstPublishedAt: 2025-02-26T13:53:03.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-creacion-de-sku-en-cuentas-del-portal-del-vendedor-da-como-resultado-un-multiplicador-de-unidades-incorrecto
locale: es
kiStatus: Backlog
internalReference: 1186329
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se utiliza una cuenta VTEX de tipo "portal del vendedor", cuando un usuario crea una SKU, su multiplicador de unidades siempre se establece en 1, independientemente del valor insertado inicialmente, cuando se utiliza la interfaz de usuario del administrador.


##

## Simulación


1 - Utilizando una cuenta del portal del vendedor, cree una sku
2 - En la configuración del sku, inserta cualquier número, aparte de 1, en el campo multiplicador de unidades
3 - Crea el sku, pulsa guardar
4 - El multiplicador de unidades se habrá sobrescrito a 1



## Workaround


Tras la creación incorrecta, actualice el campo multiplicador de unidades al valor deseado.





