---
title: 'Tablas de Precio - Definición de Concepto'
id: 1wAm5m3IUfIj6maBdaRJt8
status: PUBLISHED
createdAt: 2019-07-04T13:52:10.820Z
updatedAt: 2024-12-04T18:04:10.370Z
publishedAt: 2024-12-04T18:04:10.370Z
firstPublishedAt: 2019-07-17T19:40:46.639Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: tabelas-de-preco-definicao-de-conceito
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
---

## Definiciones

Una tabla de precios es un conjunto de precios de SKUs que se aplican a un contexto específico. Esta tabla almacena la información de los precios, haciéndolos visibles en la tienda.

Podemos considerar una tabla de precios como una entidad que proporciona los [precios calculados](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado) de los SKUs.

## Relación entre Tablas de Precios y Políticas Comerciales

Las tablas de precios y las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) tienen finalidades distintas. Las tablas de precios contienen los precios específicos de los SKUs y determinan cuánto cuesta cada ítem en un contexto. Las políticas comerciales definen el contexto de venta, indicando quién verá el precio y dónde se mostrará.

Cuando no están vinculadas a políticas comerciales, estas tablas pueden aplicarse en contextos como [promociones](https://help.vtex.com/es/tutorial/criar-promocoes--tutorials_320) y [clúster de clientes](https://help.vtex.com/es/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342). Sin embargo, si se crean para atender una política comercial, deben asociarse exclusivamente a la política correspondiente. 

> ℹ️ Una tabla vinculada a una política comercial define el precio de los SKUs para ese contexto de venta específico y no puede utilizarse en otros contextos.

## Ejemplo

Considera un caso en el que, para un mismo SKU, necesitas fijar precios diferentes, puesto que hay tres contextos distintos: una promoción específica, un clúster de clientes y una política comercial.

Para hacerlo, tienes que crear tres tablas de precios:  

- Tabla para aplicar el precio promocional.
- Tabla para el precio del clúster de clientes.
- Tabla asociada a la política comercial, que define el precio específico para ese contexto de venta.

Las dos primeras tablas de precios son genéricas y pueden utilizarse para distintas promociones o clústeres. La tercera tabla es exclusiva de la política comercial en cuestión y solo puede utilizarse en ese contexto específico.
