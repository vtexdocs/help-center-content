---
title: 'Aplicar el descuento a los artículos más caros - UI no ahorrar datos.'
id: 6VQuVOAtzbA6OyjDEi2bHh
status: PUBLISHED
createdAt: 2024-04-03T17:29:36.171Z
updatedAt: 2024-04-03T17:29:37.024Z
publishedAt: 2024-04-03T17:29:37.024Z
firstPublishedAt: 2024-04-03T17:29:37.024Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: aplicar-el-descuento-a-los-articulos-mas-caros-ui-no-ahorrar-datos
locale: es
kiStatus: Backlog
internalReference: 1011071
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar la interfaz de usuario de promociones, al intentar guardar manualmente la opción "Aplicar a los artículos más caros" no funcionará y el selector permanecerá en la opción de tipo más barato.

 ![](https://vtexhelp.zendesk.com/attachments/token/ofDGJuHHbNRwvbYDMOSSCznvB/?name=image.png)


##

## Simulación


1 - Ir a la interfaz de usuario de promociones: https://account_name.myvtex.com/admin/promotions

2 - En la interfaz de promociones, seleccione la opción "Aplicar el descuento a los artículos más caros".

3 - Guarde la promoción

4 - Acceda de nuevo a ella, en su lugar se seleccionará la casilla de aplicar a la opción más barata.



## Workaround


Utilice la API de guardar promociones en su lugar https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration





