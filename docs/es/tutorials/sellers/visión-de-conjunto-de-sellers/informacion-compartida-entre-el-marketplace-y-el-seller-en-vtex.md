---
title: 'Información compartida entre el marketplace y el seller en VTEX'
id: 3o7WGiBtfnKKZ3Ddug26k3
status: PUBLISHED
createdAt: 2022-04-07T13:32:06.199Z
updatedAt: 2023-10-31T19:54:13.803Z
publishedAt: 2023-10-31T19:54:13.803Z
firstPublishedAt: 2022-04-07T14:23:25.578Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: shared-information-between-a-marketplace-and-a-seller-on-vtex
legacySlug: informacion-compartida-entre-el-marketplace-y-el-seller-en-vtex
locale: es
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

La venta en _marketplaces_ es un modelo de comercio colaborativo que brinda ventajas mutuas tanto a _sellers_ como a _marketplaces_. La arquitectura de las tiendas VTEX les permite actuar indistintamente como _sellers_ o _marketplaces_. Obtén más información en [Estrategias de marketplace en VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex).

Un _marketplace_ hospedado en la plataforma VTEX y un _seller_, ya sea un _seller_ VTEX o externo, deben compartir información para colaborar entre sí. En este artículo, verás cuáles son los principales datos que comparten. El artículo se divide en:

- [Conectar marketplace y seller](#conectar-marketplace-y-seller) 
- [Marketplace y seller conectados](#marketplace-y-seller-conectados)
- [Intercambio de emails de clientes](#intercambio-de-emails-de-clientes)

> ℹ️ Si quieres empezar a vender tus productos en otros *marketplaces*, usa [Marketplaces e integraciones](/es/docs/tutorials/marketplaces-e-integraciones). Esta funcionalidad facilita la identificación y el contacto entre *marketplaces* y *sellers* que operan en el ecosistema VTEX.

## Conectar marketplace y seller

Para que un _marketplace_ VTEX se conecte con un _seller_, ya sea un _seller_ VTEX o externo, ambas partes deben acordar en compartir la siguiente información:

- **Cambios y devoluciones:** cuál será la política de cambios y devoluciones que se adoptará en la venta de los productos del _seller_ en el _marketplace_.
- **Política de entrega:** cuál será la política de entrega para la venta de los productos del _seller_ en el _marketplace_.
- **Política de privacidad de seguridad:** cuál será la política de seguridad que se aplicará a la venta de los productos del _seller_ en el _marketplace_.
- **Comisiones:** cuál será el porcentaje de las ventas que se realicen en el _marketplace_ que el _seller_ deberá pagar al _marketplace_. Existen dos tipos de comisiones: la _Comisión sobre los productos_ y la _Comisión sobre el envío_.

Además, para [agregar al seller](/es/tutorial/configurando-seller/) a sus operaciones, el _marketplace_ necesita otra información que dependerá del tipo de _seller_ con el cual se quiera conectar:

- [Conectar un marketplace VTEX con un seller VTEX](#conectar-un-marketplace-vtex-con-un-seller-vtex)
- [Conectar un marketplace VTEX con un seller externo](#conectar-un-marketplace-vtex-con-un-seller-externo)

El _marketplace_ VTEX se puede integrar tanto con un _seller_ VTEX como con un _seller_ externo, ya sea a través del Admin VTEX o de una API. En ambos casos, los datos que compartirán el _marketplace_ y el _seller_ serán los mismos.

> ℹ️ Para obtener más información sobre cómo conectar un marketplace VTEX con un seller VTEX o con un seller externo a través del Admin VTEX, consulta el artículo [Agregar seller](/es/tutorial/configurando-seller). Para realizar la integración a través de una API, usa la llamada [Configure Seller Account](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/seller-register/pvt/sellers). Si se trata de un seller externo, consulta la [guía de integración con un *seller* externo](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide).

### Conectar un marketplace VTEX con un seller VTEX

Para que un _marketplace_ VTEX se conecte con un _seller_ VTEX, es necesario acceder a la siguiente información:

- **ID del _seller_ (Account Name):** el [account name (nombre de cuenta)](/es/docs/tutorials/que-es-account-name) es el código de identificación del _seller_ en VTEX.
- **Email del administrador:** dirección electrónica del administrador responsable del _seller_.
- **Mi ID de afiliado en el _seller_:** código con tres consonantes que identifica al [afiliado](/es/docs/tutorials/que-es-afiliado) creado por el _seller_ en su propio Admin VTEX. 
- **Descripción:** texto de tono comercial que caracteriza al _seller_. El texto puede aparecer en la vitrina del _marketplace_ cuando se [personaliza el CMS](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).
- **Política comercial:** código de identificación de la [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) que el _seller_ desea usar en la venta que se realiza en el _marketplace_.
- **Fulfillment SellerId:** código de identificación del _seller_ responsable del _fullfilment_ del pedido. Este es un dato opcional pero necesario cuando el _seller_ vende SKU de otro _seller_. No se debe completar cuando el _seller_ vende sus propios SKU.
- **Catalog EndPoint:** URL del _endpoint_ del catálogo del _seller_.
- **TaxCode:** número de registro de persona jurídica del _seller_ (CNPJ en Brasil o su equivalente en otros países).

### Conectar un marketplace VTEX con un seller externo

Si el _seller_ es externo, es decir, no está hospedado en el entorno VTEX, se debe informar al _marketplace_ VTEX.

- **Descripción:** texto de tono comercial que caracteriza al _seller_. El texto puede aparecer en la vitrina del _marketplace_ cuando se [personaliza el CMS](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).
- **Email del administrador:** dirección electrónica del administrador responsable de la operación del _seller_.
- **Fulfillment EndPoint:** URL del _endpoint_ para el _fullfilment_ de los pedidos del _seller_, a través de la cual el _marketplace_ se comunicará con el _seller_.
- **TaxCode:** número de registro de persona jurídica del _seller_ (CNPJ en Brasil o su equivalente en otros países).
- **User:** nombre de usuario cuando se usa un _hub_ para la integración con un _seller_ externo.
- **Password:** contraseña cuando se usa un _hub_ para la integración con un _seller_ externo.

## Marketplace y seller conectados

Una vez que el _marketplace_ VTEX y el _seller_ VTEX o el _seller_ externo están conectados,  el _marketplace_ puede acceder a la información guardada sobre el _seller_ a través del Admin VTEX en **MARKETPLACE > Gestión**.

A través de la API, se puede usar la llamada [Get Seller data by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-) para consultar la información que brinda el _seller_, ya sea que se trate de un _seller_ VTEX o externo.

## Intercambio de emails de clientes

El _marketplace_ puede otorgar al _seller_ un acceso parcial a los emails de su base de clientes para que esos emails se utilicen en las consultas sobre las condiciones comerciales de los ítems y en la creación de pedidos. Esta configuración no está predeterminada y la información se administra mediante API, a través del campo `TrustPolicy`, usando las siguientes llamadas:

- [Configure Seller Account](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/seller-register/pvt/sellers): permite configurar la cuenta del _seller_, ya sea un _seller_ VTEX o externo.
- [Update Seller by Seller ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#patch-/seller-register/pvt/sellers/-sellerId-): permite actualizar los datos del _seller_, ya sea un _seller_ VTEX o externo.

> ℹ️ En los pedidos que se realizan a través del *marketplace*, el *seller* no puede ver el email del cliente. El cliente establece una relación con el *marketplace* y, por lo tanto, se necesitaría su consentimiento para compartir sus datos.

### Más información

- [Estrategias de marketplace en VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex)
- [Acciones para la operación de marketplaces VTEX](/es/docs/tutorials/acciones-para-la-operacion-de-marketplaces-vtex)
- [Agregar seller](/es/tutorial/configurando-seller/)
