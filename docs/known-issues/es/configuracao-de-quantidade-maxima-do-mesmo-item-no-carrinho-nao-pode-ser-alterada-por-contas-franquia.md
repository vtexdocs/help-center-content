---
title: 'La configuración de la cantidad máxima de un mismo artículo en la cesta no puede ser modificada por las cuentas gratuitas'
id: 5NqcSpcmPXEJE4KIkp6eZE
status: PUBLISHED
createdAt: 2022-05-12T14:52:33.074Z
updatedAt: 2022-11-25T21:51:53.882Z
publishedAt: 2022-11-25T21:51:53.882Z
firstPublishedAt: 2022-05-12T14:52:33.334Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-configuracion-de-la-cantidad-maxima-de-un-mismo-articulo-en-la-cesta-no-puede-ser-modificada-por-las-cuentas-gratuitas
kiStatus: Backlog
internalReference: 325273
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La configuración de la cantidad máxima de un mismo artículo en el carrito no puede ser modificada por las cuentas de franquicia (vendedor de marca blanca), ya que tiene lugar en una pantalla de catálogo heredada (/admin/Site/ConfigForm.aspx) - módulo que se elimina de las cuentas de franquicia, ya que heredan los productos de la cuenta padre.



## Simulación


 1- Entrar en el entorno de una franquicia o de una cuenta de vendedor de marca blanca

2- Acceder a la pantalla "CMS > Configuración > Pestaña general" desde el administrador, o ir directamente a la página /admin/Site/ConfigForm.aspx

3- Tenga en cuenta que no es posible acceder al contenido de esta área




## Workaround


Solicite la configuración internamente al equipo del PTA a través del ticket del tipo de tarea.

