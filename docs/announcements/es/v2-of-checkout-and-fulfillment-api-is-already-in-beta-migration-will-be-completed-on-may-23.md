---
title: 'V2 de la API de Checkout y Fulfillment ya está en beta (migración será finalizada el 23 de mayo)'
id: 2h5VNlwg3OUOSKeWqyac8q
status: PUBLISHED
createdAt: 2018-02-07T12:10:09.771Z
updatedAt: 2019-12-31T15:12:56.320Z
publishedAt: 2019-12-31T15:12:56.320Z
contentType: updates
productTeam: Shopping
author: authors_24
slug: v2-da-api-de-checkout-e-fulfillment-ja-esta-em-beta-migracao-sera
legacySlug: v2-da-api-de-checkout-e-fulfillment-ja-esta-em-beta-migracao-sera
announcementImageID: ''
announcementSynopsisES: 'La V2 trae una serie de mejoras y quita algunos campos y rutas que ya estaban obsoletas.'
---

<div class="alert alert-danger">
La migración para la v2 de la API de Checkout y Fulfillment ya fue finalizada en <strong>23/05/2018</strong>
</div>

<div class="alert alert-warning">
El plazo anterior se modifica de <strong>21/05</strong> a <strong>23/05</strong> (2 días) debido a la necesidad de pruebas adicionales.
</div>

Ya está en beta la versión 2 de la API de Checkout y Fulfillment. Y, a partir de __23 de mayo__, se aplicará a todas las tiendas. La V2 trae una serie de mejoras con respecto a la versión anterior y quita algunos campos y rutas que ya estaban obsoletas.

<div class="alert alert-warning">
<Strong>Atención</strong><br>
Recomendamos que usted haga todas las pruebas para evaluar los impactos y adaptar sus integraciones y personalizaciones antes del plazo final.
Así, cuando realizamos la migración a la nueva versión de la API, su tienda tendrá una transición tranquila.
</div>

Compruebe abajo todo lo que cambia con la nueva versión de la API de Checkout y Fulfillment (y lo que está en beta o en stable):

- Eliminación de los campos __defaultPicker__, __handlerSequence__ y __handling__ del objeto __items__, tanto en la respuesta de las rutas del carrito como en la de los pedidos (BETA). Estos campos se han creado para una funcionalidad que ya no se utiliza y nunca se llenan hoy en día.
- Cambio del campo __checkToSavePersonDataByDefault__ a __saveUserData__, en el objeto __storePreferencesData__ de las respuestas del carrito y del pedido (BETA). __ATENCIÓN:__ durante el período de migración, se recomienda que se mantenga la lectura de los dos campos por cuestiones de compatibilidad, pero siempre dando preferencia al nuevo.
- Eliminación de los objetos __attachmentId__ (o __id__, dependiendo de la ruta) de los grupos de attachment (__shippingData__, __clientProfileData__, __giftRegistryData__ etc.), tanto en la respuesta de las rutas del carrito como en la de los pedidos. Este cambio resuelve problemas de redundancia (BETA).
- Eliminación del campo __templateOptions__ en el objeto __storePreferencesData__ de las respuestas del carrito y del pedido (BETA). La funcionalidad que fue pensada inicialmente con ese campo no fue completamente desarrollada y hoy retorna siempre el mismo valor.
- Eliminación del campo __itemAttachment__ (ya obsoleto) en el objeto __items__, tanto en la creación de los carritos y pedidos como en la obtención de pedidos (BETA). Este campo se está eliminando por redundancia con el __attachments__ (que ya está en STABLE) y se ha mantenido hasta hoy por compatibilidad, ya que su primera versión no era una lista.
- El campo __shippingEstimate__ de los __SLAs__, tanto de la respuesta del carrito como en la del pedido, ahora soporta valores en horas (h) y minutos (m) (BETA).
- La ruta de callback (permiso de finalización del pedido) `{host}/gatewayCallback/{gatewayReferenceId}/{transactionId}/{messageCode}` (GET) se quita y se reemplaza por la ruta `{host}/gatewayCallback/{orderGroup}/{messageCode}` (GET). Este cambio está en BETA, pero la ruta correcta ya está en STABLE.
- Eliminación de los campos __merchantName__, __transactionId__ y __payments__ del objeto __paymentData__ en la respuesta de las rutas `{host}/api/checkout/pub/orders/order-group/{order-group}`, `{host}/api/checkout/pub/orders` (GET) y `{host}/api/checkout/pub/orders/{orderId}`. Este cambio está en BETA y quita campos obsoletos y redundantes en relación a los que ya existen en el campo __transactions__ (que ya está en STABLE con toda la información anterior).
- Eliminación de la ruta `{host}/api/checkout/pvt/orders/order-import` de importación de pedido (BETA).
- Eliminación del campo __products__ de las respuestas y de las requisiciones de las rutas del soporte. Esta funcionalidad nunca se ha implementado completamente y se está descontinuando (BETA).
- Eliminación del soporte de la queryString __product__ en la ruta `{host}/checkout/cart/add`. Esta funcionalidad nunca se ha implementado completamente y se está descontinuando (BETA).
- Eliminación del objeto __expectedOrderFormSections__ en el request de las rutas del carrito. Ahora todos los campos serán devueltos (BETA).
- Eliminación del campo __stockBalance__ del objeto __logisticsInfo__ en la respuesta de la ruta `{host}/api/checkout/pub/orderForms/simulation`. __Importante:__ ese campo todavía estará disponible en la ruta privada `{host} / api / checkout / pvt / orderForms / simulation` (BETA).
- Eliminación de la ruta `{host}/api/checkout/pvt/orders/{orderId}/updateShippingEstimateDate` (BETA).
- Corrección de los casos de error que deberían devolver código __500__, pero estaban presentando el __400__ (BETA).
