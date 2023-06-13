---
title: Errores de integración de stock con Mercado Libre
id: 3pWA3vRePuGmJ5tquY4fva
status: PUBLISHED
createdAt: 2021-10-04T19:04:23.285Z
updatedAt: 2023-03-29T14:36:13.584Z
publishedAt: 2023-03-29T14:36:13.584Z
firstPublishedAt: 2021-11-01T22:14:56.937Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: errores-de-integracion-de-stock-con-mercado-libre
legacySlug: errores-de-integracion-de-stock-con-mercado-libre
subcategory: 7lxg0kyL3TYIsrlSQlf1zP
---

A veces se producen errores de integración de _stock_ en los _marketplaces_ para los que VTEX ha desarrollado un [conector nativo](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex). Este artículo reúne los errores más frecuentes de integración de _stock_ con Mercado Libre y explica cómo resolverlos.

Hay mensajes que identifican cuáles son los errores. Puedes verlos en el Admin VTEX, en **MARKETPLACE > Conexiones > Stock**, haciendo clic en el mensaje de proceso con error.

Después de resolver un error, debes volver a procesar manualmente la integración del _stock_ del SKU en cuestión. Esto se hace en el mismo lugar donde se muestra el error, haciendo clic en **Acciones > Reprocesar**.

A continuación se muestran los principales mensajes de error de integración de _stock_ con Mercado Libre: 

#### Mensaje de error

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: Validation error. Is not possible to activate an item without stock.`

**Mensaje traducido:** Mensaje de error no mapeado por la integración. Ponte en contacto con VTEX informando de lo sucedido para que se pueda realizar el mapeo. Mensaje en Mercado Libre: Error de validación. No se puede activar un ítem sin stock.

La causa más común del error es la falta de _stock_, y en Mercado Libre no se puede activar un ítem sin _stock_. Por lo tanto, se debe [actualizar la cantidad de los SKU en stock](https://help.vtex.com/es/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo) y volver a procesar el error. Si el error persiste tras volver a procesarlo de forma manual, otra posible causa es que el SKU esté inactivo. Verifica el _status_ del SKU en tu Admin, en **Catálogo > Productos y SKU**. Una tercera posibilidad es que el ítem no esté correctamente marcado en la colección o en la política comercial definida para Mercado Libre. Si es necesario, consulta el artículo [Asociación de SKU a una política comercial](https://help.vtex.com/es/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

___

#### Mensaje de error

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: ProductId not found.`

**Mensaje traducido:** Mensaje de error no mapeado por la integración. Ponte en contacto con VTEX informando de lo sucedido para que se pueda realizar el mapeo. Mensaje en Mercado Libre: ProductId no encontrado.

Para que un ítem se integre a Mercado Libre, al [rellenar los campos de registro de este producto](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) es necesario que las opciones **Mostrar en la tienda** y **Mostrar producto agotado** estén activadas. De lo contrario, los SKU de este producto no se integrarán a Mercado Libre.

____

#### Mensaje de error

`Estoque não atualizado pois o anúncio no Mercado Livre está finalizado.`

**Mensaje traducido:** _Stock_ no actualizado porque el anuncio en Mercado Libre está finalizado.

Hay diferentes razones para que Mercado Libre considere un anuncio como finalizado. Por ejemplo, puede que el periodo de publicación del anuncio haya finalizado, o puede que el anuncio incumpla la política del _marketplace_.

No es posible actualizar el _stock_ de los anuncios finalizados en Mercado Libre. Para saber por qué se ha finalizado un anuncio, ponte en contacto con Mercado Libre. Para más información, consulta la documentación de Mercado Libre sobre [ayuda con los anuncios](https://www.mercadolibre.com.ar/ayuda/Publicaciones_644).

____

#### Mensajes de error

`Não é possível atualizar um anúncio que está sob revisão pelo Mercado Livre. Mensagens no Mercado Livre: Cannot update item XXX [status:under_review, has_bids:false] variations is not modifiable.`

**Mensaje traducido:** No se puede actualizar un anuncio que está en proceso de revisión por parte de Mercado Libre. Mensajes en Mercado Libre: No se puede actualizar el ítem. No es posible modificar las variaciones.

`Não é possível atualizar um anúncio que está sob revisão pelo Mercado Livre. Mensagens no Mercado Livre: Cannot update item XXX [status:under_review, has_bids:false] available quantity is not modifiable.`

**Mensaje traducido:** No se puede actualizar un anuncio que está en proceso de revisión por parte de Mercado Libre. Mensajes en Mercado Libre: No se puede actualizar el ítem. No es posible modificar la cantidad disponible.

«Under review» significa «en revisión», es decir, Mercado Libre está revisando el anuncio porque ha violado las condiciones requeridas. En los mensajes anteriores, por ejemplo, es posible que algunos datos de registro se hayan rellenado incorrectamente. Cuando un anuncio está en revisión en Mercado Libre, no es posible integrar el _stock_. Para solucionar el problema, ponte en contacto con Mercado Libre.

____

#### Mensaje de error

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: The caller is not authorized to access this resource.`

**Mensaje traducido:** Mensaje de error no mapeado por la integración. Ponte en contacto con VTEX informando de lo sucedido para que se pueda realizar el mapeo. Mensaje en Mercado Libre: El autor de la llamada no está autorizado a acceder a este recurso

Este mensaje significa que el usuario está suspendido y, por lo tanto, su autorización para integrar el _stock_ ha sido interrumpida. La suspensión puede ocurrir por varias razones, desde pagos pendientes a Mercado Libre hasta la expiración del _token_ de integración. Solo Mercado Libre puede identificar la causa y resolver el problema, así que debes ponerte en contacto con el _marketplace_.

____

#### Mensaje de error

`La cantidad disponible no es modificable en items con logistica Fulfillment`

Cuando el _seller_ elige el servicio [Mercado Envíos Full](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), Mercado Libre es el responsable del _fulfillment_ del pedido. En otras palabras, la logística de la entrega del producto al consumidor final es responsabilidad del propio _marketplace_. En este caso, Mercado Libre controla el _stock_, y VTEX no puede actualizar el _stock_ para anuncios de este tipo.

____

#### Mensaje de error

`The attributes [GTIN] are required for category. Check the attribute is present in the attributes list or in all variation's attributes_combination or attributes.`

**Mensaje traducido:** Los atributos GTIN son obligatorios para la categoría. Verifica si el atributo está presente en la lista de atributos o en todas las variaciones attributes_combination o attributes.

También llamado EAN en VTEX, el GTIN es el código de identificación único de un SKU. Se trata del código de barras [rellenado en el registro de SKU](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), y el mensaje indica que el GTIN es obligatorio para la categoría a la que pertenece el SKU. Si el código se ha rellenado incorrectamente o no es válido, el SKU no se integrará a Mercado Libre. Proporcionar el GTIN correcto de un producto es responsabilidad de los proveedores y fabricantes. VTEX no genera códigos de barras para suplir este escenario.

____

#### Mensajes de error

`Error validating grant. Your authorization code or refresh token may be expired or it was already used.`

**Mensaje traducido:** Error al validar la concesión. Tu código de autorización o _token_ de actualización puede estar expirado o ya ha sido utilizado.

`Error converting access token.`

**Mensaje traducido:** Error al convertir el _token_ de acceso.

Los mensajes indican que hay un problema con tu _token_. Mercado Libre puede considerar que un _token_ no es válido por diferentes razones, como un periodo de caducidad expirado o una sospecha de amenaza a la seguridad, por ejemplo. Los asuntos relacionados con _tokens_ deben tratarse directamente con Mercado Libre. Una vez resuelto el error, es necesario [volver a autorizar la integración](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak) con Mercado Libre en el Admin VTEX. Si el error persiste, puede que sea necesario volver a [configurar el registro del conector](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi) en el Admin VTEX y luego autorizar la integración otra vez.

____

#### Mensaje de error

`User not active`

**Mensaje traducido:** Usuario inactivo.

Un usuario puede ser desactivado en Mercado Libre por diversos motivos, desde haber rellenado incorrectamente los datos de registro hasta haber sido expulsado de la plataforma por una conducta incompatible con la política del _marketplace_. Para solucionar el problema, ponte en contacto con Mercado Libre.

<br></br>
### Sepa más

- [Integración con Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Control de stock mínimo para integraciones](https://help.vtex.com/es/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar la Alerta de Stock Crítico](https://help.vtex.com/es/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
