---
title: 'Resolución de errores de divergencia de precio en pedidos de marketplace'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2023-03-29T21:22:43.831Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
locale: es
legacySlug: resolucion-de-errores-de-divergencia-de-precio-en-pedidos-de-marketplace
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

En el Admin VTEX, en **Marketplace > Conexiones > Pedidos**, el mensaje de error de divergencia de precio es el siguiente:

> `El precio del pedido en el marketplace es diferente del valor determinado en VTEX. Para integrar automáticamente los pedidos con divergencia de valores en el OMS, accede a Pedidos > Gestión de pedidos > Autorización de pedidos y configura una regla de Divergencia de precios.`

Cuando el precio establecido por un seller es diferente del precio ofrecido por los marketplaces, es posible que los pedidos realizados en los marketplaces no se procesen correctamente. En VTEX, el flujo de Autorización de pedidos permite el control y aprobación automática de estos pedidos, en base a la configuración que hace el seller de una [regla de Divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

Para activar el flujo de autorización de pedidos para conectores nativos, debe [configurar una regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Solo los usuarios con el rol de acceso OMS Full o Admin Super (Owner) pueden hacer esto.

>ℹ️ Una vez que haya [configurado la regla de Divergencia de precios](https://help.vtex.com/es/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), se aplicará a todos los mercados en los que sea seller.

Para los VTEX marketplaces, los marketplaces externos y los conectores certificados (partners), siempre que no se haya creado la regla de Divergencia de precios, los pedidos con error de divergencia de valores se aprueban automáticamente.

Para los [conectores nativos](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex), aunque el seller no configura la regla de Divergencia de precios, se retienen los pedidos con divergencia de valores. Puede consultarlos en su VTEX Admin, en **Marketplace > Conexiones > Pedidos**.

### Sepa más

- [¿Por qué el pedido fue cerrado con el precio incorrecto?](https://help.vtex.com/es/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado--frequentlyAskedQuestions_708)
- [Errores de falta de stock en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Errores de SLA en la integración de pedidos de marketplace](https://help.vtex.com/es/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
