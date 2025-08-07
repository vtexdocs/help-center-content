---
title: "Los skus del vendedor no coinciden con los skus del mercado"
id: 3nMHzPCop8uKOD98GkT3k
status: PUBLISHED
createdAt: 2024-10-03T16:23:17.416Z
updatedAt: 2024-10-03T16:23:18.274Z
publishedAt: 2024-10-03T16:23:18.274Z
firstPublishedAt: 2024-10-03T16:23:18.274Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: los-skus-del-vendedor-no-coinciden-con-los-skus-del-mercado
locale: es
kiStatus: Backlog
internalReference: 1100159
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A pesar de existir un producto idéntico en el catálogo del Marketplace, las SKUs de los vendedores no están siendo emparejadas y aprobadas automáticamente. En su lugar, van a la zona de pendientes o, en el caso de los marketplaces con el indicador de aprobación automática activado, se crean como nuevos en el catálogo.

Esta situación suele ocurrir sólo con SKUs que tienen un gran "Nombre de producto" o que tienen caracteres especiales en ellos, como_ `+` _o_ `&`_._


##

## Simulación



1. Verificar si el mismo producto existe en el catálogo del marketplace y está indexado.
2. Verificar si el vendedor envió un producto con al menos el mismo "Nombre de producto".
3. Verificar si las reglas de Matcher del marketplace están configuradas correctamente.
4. 4. Compruebe que el SKU no coincide como debería.



## Workaround


Apruebe manualmente las SKU con la coincidencia incorrecta.





