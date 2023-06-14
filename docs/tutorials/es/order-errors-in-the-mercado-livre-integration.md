---
title: Errores de integración de pedidos de Mercado Libre
id: 4w4jAIWUy3OELgu3HFmGgh
status: PUBLISHED
createdAt: 2021-08-30T18:04:27.780Z
updatedAt: 2023-03-29T23:44:08.721Z
publishedAt: 2023-03-29T23:44:08.721Z
firstPublishedAt: 2021-08-30T18:37:05.901Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: errores-de-integracion-de-pedidos-de-mercado-libre
legacySlug: errores-de-integracion-de-pedidos-de-mercado-libre
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

Hay varias razones por las que un pedido entre un _marketplace_ y una tienda VTEX no se integra, y para cada una de ellas hay una notificación que indica la naturaleza del error. Puede encontrar el mensaje de error en el Admin VTEX, en el módulo **Marketplace > Conexiones > Pedidos**. Para visualizar el mensaje, simplemente haga clic en el pedido.

En Mercado Libre, hay errores de integración de pedidos que se producen con más frecuencia que otros. Este artículo reúne los más comunes e indica cómo resolverlos.

#### Mensaje de error

`Pedido no importado pues el SLA de entrega seleccionado no está disponible`

Los errores de SLA significan que algún factor está impidiendo la entrega del pedido al consumidor final. Para identificar el origen del error y corregirlo, consulte el artículo [Errores de SLA en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensaje de error

`El campo documento del cliente es inválido`

La información de registro del número de identificación fiscal no fue enviada a Mercado Libre, o se rellenó incorrectamente. Sin el reconocimiento de este dato por parte de VTEX, el pedido no se integra. Debe ponerse en contacto con el marketplace y ajustar la información.

____

#### Mensaje de error

`Seller.unable_to_list (information)`

Estos errores indican que falta algún dato de registro o que se ha rellenado fuera de los estándares aceptados por Mercado Libre. El tipo de información a corregir aparece en el propio mensaje. Por ejemplo, _seller.unable_to_list phone_pending_ indica que es necesario actualizar el número de teléfono. Póngase en contacto con Mercado Libre para ajustar sus datos de registro.

____

#### Mensaje de error

`Order with SKU out of stock`

Los errores relacionados con la falta o insuficiencia de stock pueden tener varias causas. Para identificar el origen del error y corregirlo, consulte el artículo [Errores de falta de stock en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensaje de error

`Order with SKU inactive or out of sales channel`

Solo se integran los pedidos de SKU activos, por lo que debe comprobar el status del ítem en el Admin VTEX, en el módulo **Catálogo > Productos y SKUs**. Puede activar el SKU [rellenando los campos del SKU](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) o [activar los SKU en masa](https://help.vtex.com/es/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

Si los SKU del pedido están activos, significa que el problema es que los SKU no están vinculados a la política comercial utilizada en Mercado Libre. En este caso, es necesario [asociar el SKU a la política comercial](https://help.vtex.com/es/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Mensaje de error

`Taxes are different from store desired values`

Si el precio de un producto en Mercado Libre es diferente al configurado en la plataforma VTEX, el pedido no se integrará. Para identificar el origen del error y corregirlo, consulte el artículo [Resolución de errores de divergencia de precios en pedidos de marketplace](https://help.vtex.com/es/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8).

____

#### Mensaje de error

`Error validating grant. Your authorization code or refresh token may be expired or it was already used`

Este mensaje indica que el _token_ utilizado en la integración está expirado o desactivado. La solución es ponerse en contacto con Mercado Libre y rehacer el proceso de autorización de la integración.

<br></br>
### Sepa más

- [Integración con Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Mercado Libre: FAQ](https://help.vtex.com/es/tutorial/mercado-livre-faq--3w4IgSgKZOocGee8cgSWW0)
- [Errores de falta de stock en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Errores de SLA en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolución de errores de divergencia de precio en pedidos de marketplace](https://help.vtex.com/es/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
