---
title: 'Configurar afiliado'
id: tutorials_187
status: PUBLISHED
createdAt: 2017-04-27T22:15:31.422Z
updatedAt: 2024-01-08T18:13:15.897Z
publishedAt: 2024-01-08T18:13:15.897Z
firstPublishedAt: 2017-04-27T23:00:46.992Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: como-configurar-afiliado
locale: es
legacySlug: como-configurar-afiliado
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

En VTEX, el [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) es un código que identifica el marketplace para el seller. El [seller VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-seller-vtex) necesita configurar un código de afiliado para poder integrarse con un [marketplace VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex), y esta configuración solo es necesaria cuando el mercado integrado y el vendedor son ambos tiendas VTEX.

Cuando el marketplace no es una tienda VTEX (como en las [integraciones externas](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-externo)), o cuando la tienda se integra con un [marketplace certificado](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado) (como Amazon o Mercado Livre), la plataforma crea automáticamente el código de afiliado.

## Cómo configurar

Para crear un nuevo ID del afiliado, realice los siguientes pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*.
3. En la pestaña **Afiliados**, haz clic en `+ Nuevo afiliado`.
5. Complete los campos de la pantalla, descritos abajo, y luego haz clic en `Guardar`.
    - **Nome:** nombre del nuevo afiliado.
    - **ID:** código de identificación del afiliado. Debe estar compuesto por tres consonantes, repetidas o no. No se aceptan vocales.
    - **Política comercial:** número de la política comercial que definirá el surtido del catálogo, el precio y la estrategia de envío de los ítems utilizados en la integración con el marketplace.
    - **Email para notificaciones:** dirección de correo electrónico que recibirá las notificaciones sobre la integración.
    - **Endpoint de busca:** URL de la aplicación que recibirá las notificaciones de productos, precio, stock, entre otros. El Search Endpoint se puede llenar con el respectivo valor: 

`http://productnotification.vtexcommerce.com.br/api/notification/{NombreDelMarketplace}/{IdDelSeller}`

> Fijate que el valor **{NombreDelMarketplace}** debe ser cambiado por el nombre de la cuenta del marketplace y el valor **{IdDelSeller}** debe ser cambiado por el ID del seller registrado por el marketplace.

> >❗ El valor **{IdDelSeller}** es *case sensitive*. Así, debe escribirse en la URL exactamente de la misma manera que esté registrado en el marketplace.

> En el caso de [marketplaces externos a VTEX](https://help.vtex.com/es/tutorial/marketplace-strategies-at-vtex--tutorials_402#integrado-con-un-marketplace-externo), llene el campo con el valor: `https://{endpointDoAfiliado}/api/notification/`.   

> Obtenga más información en nuestro artículo en el Developer Portal, [How to confugure the affiliate endpoint](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-price-update#how-to-configure-the-affiliate-endpoint).

- **Versión del endpoint de busca:** solo existe la opción por defecto 1.x.x.
- **Utilizar mi medio de pago:** Split de pago dirigido para que el pago sea transaccionado por el seller. Esto es, el Marketplace cierra el Pedido, pero envía el pago para que el dueño del producto realice. Recomendado utilizar sólo en integraciones de VTEX con VTEX por compatibilidad de medios de pago.

No es necesario para que el vendedor utilice los mismos métodos de pago utilizados por el marketplace.
