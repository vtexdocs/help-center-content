---
title: 'Error al aplicar filtro en el módulo Catalog'
id: 1cCgcFEnte0kguQIi6ESo4
status: PUBLISHED
createdAt: 2017-04-03T19:09:52.412Z
updatedAt: 2020-01-17T18:59:22.295Z
publishedAt: 2020-01-17T18:59:22.295Z
firstPublishedAt: 2017-04-03T19:27:01.329Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: error-al-aplicar-filtro-en-el-modulo-catalog
kiStatus: Fixed
internalReference: 
---

## Sumario

En el módulo Catalog, al aplicarse un filtro utilizando el carácter “comillas simples” (y otros caracteres) en un campo de texto, el sistema podrá retornar un error. Como el sistema memoriza el último filtro aplicado por el usuario, el problema no se resolverá al actualizar la página.

## Simulación

__Importante__: Como ese problema es irreversible, no intente reproducirlo.

1. Acceder, en el admin, al módulo Catalog.
2. En el módulo E-Commerce, acceder, por ejemplo, a la página de productos y SKUs (Registro de Productos > Productos y SKUs > Registro de Productos y SKUs).
3. En el filtro “Nombre del Producto”, buscar alguna palabra que contenga el carácter comilla simple.

## Workaround

Abrir un ticket con el aliado de atención indicando el email del usuario que tiene el problema.

