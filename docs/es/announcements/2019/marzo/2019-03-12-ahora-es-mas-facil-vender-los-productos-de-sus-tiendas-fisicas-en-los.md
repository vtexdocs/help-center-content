---
title: 'Ahora es más fácil vender los productos de sus tiendas físicas en los marketplaces'
id: 2rOEBV0tOAoZIgow7CODyj
status: PUBLISHED
createdAt: 2019-03-12T21:54:26.822Z
updatedAt: 2021-09-28T10:10:28.471Z
publishedAt: 2021-09-28T10:10:28.471Z
contentType: updates
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slugEN: 2019-03-12-now-its-easier-to-sell-the-products-from-your-physical-stores-in
locale: es
legacySlug: ahora-es-mas-facil-vender-los-productos-de-sus-tiendas-fisicas-en-los
announcementImageID: 'undefined'
announcementSynopsisES: 'Al integrar la cuenta principal a un marketplace, los inventarios de cuentas franquicia se consideran automáticamente.'
---

Usted ya puede ofrecer los productos de toda su red de tiendas físicas en __marketplaces externos__, sin esfuerzo. A través del __Multilevel Omnichannel Inventory__, las [cuentas franquicia](/es/tutorial/que-son-cuenta-franquicia-y-seller-white-label), cuando se crean, ya están completamente integradas a la cuenta principal. Esto significa que cuando la cuenta principal configura una integración con un marketplace externo, el inventario de las cuentas franquicia también se considerará en el proceso, es decir, ya no será necesario administrar cada cuenta franquicia individualmente para integrarla al marketplace.

## Principales ventajas

- Configuración de integración con un marketplace externo en una sola cuenta, la principal.
- Poder del Omnichannel en su negocio, como la posibilidad de utilizar las cuentas franquicia para pickup points, por ejemplo.
- Simplificación de las APIs del Checkout.

## Qué usted necesita hacer

Ninguna acción es necesaria. La única configuración necesaria es la integración de la cuenta principal con el marketplace externo. En el momento en que esto se hace, los inventarios de todas las cuentas franquicia vinculadas a la principal también serán enviadas al marketplace. Esta es una nueva feature de las cuentas franquicia, que ya está activa para facilitar su vida a la hora de integrar su operación con marketplaces.

> ⚠️ **La integración automática del inventario de las cuentas franquicia sólo está disponible por el momento cuando el marketplace no es VTEX**.

## Que ha cambiado

El Multilevel Omnichannel Inventory fue lanzado trayendo un nuevo aliado para operaciones omnichannel. Sin embargo, para que pueda ser utilizado, es necesario que la tienda que será sólo __marketplace__ en el flujo del pedido (el enlace más cercano al cliente), ajuste sus __APIs de Checkout__ de acuerdo con los cambios abajo:

- `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` y `marketplaceServicesEndpoint` son los 4 nuevos campos obligatorios del PlaceOrder del Checkout. El campo `paymentData` ya no es necesario.
- Nueva ruta para el progreso del pedido tras la aprobación del marketplace (Marketplace Order Authorization).
- El Marketplace necesita soportar la nueva ruta para ser notificado de una cancelación del seller (o del agente intermediario) y para recibir la factura del seller (o del agente intermediario).

Para obtener más información acerca del Multilevel Omnichannel Inventory y los cambios en las APIs del Checkout, acceda a [este artículo del Help](/es/docs/tutorials/multilevel-omnichannel-inventory).

> ❗ <body> <li>El término Marketplace Recursivo fue sustituido por **Multilevel Omnichannel Inventory.**</li> <li>Esta funcionalidad no permite [cambiar de seller.](/es/docs/tutorials/change-seller)</li> <li>Esta solución se destina a la integración con marketplaces externos, no con marketplaces que ya tienen una [integración nativa VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex).</li> <li>Lee el artículo [Multilevel Omnichannel Inventory](/es/docs/tutorials/multilevel-omnichannel-inventory) para conocer en detalle las restricciones de uso.</li> </body>
