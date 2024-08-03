---
title: 'La configuración de la cantidad máxima del mismo artículo en el carro no puede ser modificada por las cuentas de franquicia'
id: 5NqcSpcmPXEJE4KIkp6eZE
status: PUBLISHED
createdAt: 2022-05-12T14:52:33.074Z
updatedAt: 2023-10-18T14:34:56.570Z
publishedAt: 2023-10-18T14:34:56.570Z
firstPublishedAt: 2022-05-12T14:52:33.334Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-configuracion-de-la-cantidad-maxima-del-mismo-articulo-en-el-carro-no-puede-ser-modificada-por-las-cuentas-de-franquicia
locale: es
kiStatus: Backlog
internalReference: 325273
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La configuración de la cantidad máxima de un mismo artículo en el carrito no puede ser modificada por las cuentas franquiciadas (vendedor whitelabel), ya que tiene lugar en una pantalla heredada del catálogo (/admin/Site/ConfigForm.aspx) - módulo que se elimina de las cuentas franquiciadas, ya que heredan los productos de la cuenta padre.


##

## Simulación



- Entrar en un entorno de cuenta de franquicia o vendedor de marca blanca
- Acceda a la pantalla "CMS > Configuración > pestaña General" desde el admin, o vaya directamente a la página /admin/Site/ConfigForm.aspx
- Tenga en cuenta que no es posible acceder al contenido de esta área



## Workaround


Solicite la configuración vía ticket a VTEX.




