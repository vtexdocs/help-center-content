---
title: "OrderByBestDiscount devuelve el orden incorrecto"
id: 4w9qSs9jUTty4e77iD1bIT
status: PUBLISHED
createdAt: 2021-08-24T16:33:08.218Z
updatedAt: 2022-12-22T20:41:14.306Z
publishedAt: 2022-12-22T20:41:14.306Z
firstPublishedAt: 2021-09-03T14:53:03.469Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: orderbybestdiscount-devuelve-el-orden-incorrecto
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La ordenación `OrderByBestDiscount` se ve afectada por el [precio de lista](https://help.vtex.com/es/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) y el [precio base](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) más bajos entre todas las políticas comerciales disponibles. 

Para más errores relacionados con la ordenación, vea [esta documentación](https://help.vtex.com/es/known-issues/problema-ordenacao-produtos-vitrine--7JlXcIcicgQwkOkCuce4Ow#).

## Simulación

1. Configure al menos dos [políticas comerciales registradas](https://help.vtex.com/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) en su tienda.
2. Cree un [precio base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) para un SKU.
3. Cree un [precio de lista](https://help.vtex.com/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) para el mismo SKU.
4. Configure el control `<vtex.cmc:searchResult/>` en la página del producto.

## Workaround

No hay ningún <i>*workaround*</i> en el Portal. Sin embargo, puede añadir [VTEX Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) a su tienda.

