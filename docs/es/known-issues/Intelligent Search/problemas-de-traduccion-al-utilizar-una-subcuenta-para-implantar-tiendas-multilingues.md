---
title: 'Problemas de traducción al utilizar una subcuenta para implantar tiendas multilingües'
id: 5FOCZE7pI4npyfo7TjsFaY
status: PUBLISHED
createdAt: 2023-06-21T20:36:33.483Z
updatedAt: 2024-02-29T15:19:42.862Z
publishedAt: 2024-02-29T15:19:42.862Z
firstPublishedAt: 2023-06-21T20:36:33.922Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: translation-issues-when-using-a-subaccount-to-implement-multilanguage-stores
locale: es
kiStatus: Backlog
internalReference: 848524
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La indexación unificada de catálogos sólo tiene en cuenta las traducciones de los mensajes de la cuenta principal, incluso cuando se utiliza una arquitectura de subcuentas para implementar almacenes transfronterizos.

Esto conduce a una traducción diferente en la página de búsqueda y de producto, ya que el contenido de la página de búsqueda se basa únicamente en las traducciones recuperadas por el Indexador de Catálogo.


##

## Simulación



- Cree una subcuenta e implemente tiendas transfronterizas;
- Traduzca el contenido del catálogo en la subcuenta;
- Comparar la página de búsqueda y la de producto; tendrán traducciones diferentes.



## Workaround


Establezca los idiomas adicionales (enlaces y contenido de Mensajes) en la cuenta principal, replicando las traducciones de la subcuenta también en la cuenta principal.




