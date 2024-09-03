---
title: 'Configurando marketplace entre tiendas VTEX'
id: tutorials_6520
status: CHANGED
createdAt: 2017-04-27T21:48:44.692Z
updatedAt: 2022-09-12T20:11:02.084Z
publishedAt: 2022-03-14T15:57:05.056Z
firstPublishedAt: 2017-04-27T23:11:18.934Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: configurando-marketplace-entre-tiendas-vtex
locale: es
legacySlug: configurando-marketplace-entre-tiendas-vtex
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

Toda tienda VTEX se encuentra apta para ser tanto marketplace como seller de otras tiendas VTEX o de [nuestros marketplaces integrados](/es/tutorial/integrando-con-marketplace/). Esto se realiza a través de configuraciones simples y sin la necesidad de desarrollar una integración.

La integración entre tiendas VTEX es la mas simple de todas y reemplaza algunos pasos necesarios de las demás integraciones. Siguen a continuación las instrucciones para cada configuración:

## Para las tiendas que quieren actuar como marketplace: cómo configurar un seller VTEX
Ser un marketplace significa que su website recibirá (y vendrá) productos de otra tienda (que funcionará como seller). Para hacer esto, usted necesita seguir las [instrucciones para la creación de un seller](/es/tutorial/configuracion-de-seller/).

## Para las tiendas que quieren actuar como sellers: cómo configurar un marketplace VTEX
Ser un seller significa que su tienda va a enviar y vender productos a través de otro website (que funcionará como marketplace). Para hacer esto, usted necesita registrar esta tienda como un marketplace en su admin. Sólo tienes que seguir los siguientes pasos:

1. Configure la [política comercial](/es/tutorial/configurar-politica-comercial-para-marketplace/)
2. Configure la [logística](/es/tutorial/como-configurar-logistica-para-politica-comercial/) para esta política comercial
3. Configure al [afiliado](/es/tutorial/como-configurar-afiliado/).

##### Sobre la integración

Después de las configuraciones, es necesario realizar la indexación de todos los productos de la base, para que la integración ocurra.

1. Con el [usuario titular](https://help.vtex.com/es/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA), acceda al link `{nombredelatienda}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`.
2. Haga clic en el botón __Reindexar Base__.

[![ReindexarBase](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png)](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png "![ReindexarBase](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png)")

Tenga en cuenta que, en la URL, debe cambiar el término `{nombredelatienda}` por el nombre de su tienda.

Despúes de esas configuraciones, los productos comenzarán a ser enviados para el marketplace. Luego, el marketplace deberá realizar el [mapeo de categorías, marcas y especificaciones](https://help.vtex.com/es/tutorial/mapeando-categorias-e-marcas-para-marketplace), además de aceptar los productos enviados.
