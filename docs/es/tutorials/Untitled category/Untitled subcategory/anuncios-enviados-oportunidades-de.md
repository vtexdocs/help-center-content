---
title: 'Gestión de anuncios: oportunidades de Catálogo MeLi'
id: 1hO9eI1th47EGxQoTzGewC
status: DRAFT
createdAt: 2021-07-29T19:59:30.988Z
updatedAt: 2024-06-20T21:42:56.304Z
publishedAt: 
firstPublishedAt: 2021-07-29T20:20:39.780Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: sent-offers-buybox-opportunities
locale: es
legacySlug: anuncios-enviados-oportunidades-de
subcategoryId: unknown-subcategory
---

>ℹ️ Para evolucionar su experiencia al sincronizar y actualizar anuncios, el equipo de VTEX está desarrollando una nueva funcionalidad que sustituirá el módulo de **Gestión de anuncios**.
> Por este motivo, Gestión de anuncios no recibirá más actualizaciones ni mantenimiento.
> Para conectores y marketplaces que ya se integraron con el módulo, comuníquese con nuestro equipo de desarrollo por email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para los conectores interesados en comenzar la integración, les pedimos que esperen el lanzamiento del nuevo módulo, tan pronto como esté disponible, notificaremos a todos los clientes a través del [Developer Portal](https://developers.vtex.com/updates/release-notes) y el [VTEX Help Center](https://help.vtex.com/pt/en/announcements).  

Un Anuncio es un SKU cuyo precio y stock fueron configurados por un seller y que fue enviado a diferentes canales de venta. El módulo [Gestión de anuncios](https://help.vtex.com/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) del Admin VTEX permite a los sellers supervisar el envío y la sincronización de sus productos a los marketplaces y también brinda oportunidades para obtener más ventas con sus anuncios. 

La funcionalidad llamada *Oportunidades* identifica los anuncios del seller que pueden tener mayor éxito en los canales en los que se venden y dirige acciones para que las oportunidades se realicen. 

Un ejemplo de oportunidad es la función de Catálogo MeLi de Mercado Libre. Lo Catálogo MeLi es un recurso del checkout de Mercado Libre que selecciona anuncios de sellers diferentes como opciones de compra para un mismo producto. El módulo **Gestión de anuncios** evalúa los anuncios compatibles con productos que ya están presentes en Mercado Libre para añadirlos a su Catálogo MeLi.

Las *Oportunidades* acompañan la presencia de un anuncio en las diferentes páginas del módulo **Gestión de anuncios**, como se muestra en las imágenes de la sección siguiente.

>ℹ️ **Gestión de anuncios** permite hacer un seguimiento de los anuncios con [Mercado Libre Classic](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), [Mercado Libre Premium](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) y [marketplaces VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex). Para los conectores que desean integrarse a través de API, existe la [Guía de integración de Gestión de anuncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Lista de anuncios

En la página [Gestión de anuncios](https://help.vtex.com/es/tutorial/offers-listing--7MRb9S78aBdZjFGpbuffpE), los anuncios con oportunidades de __Catálogo MeLi__ abiertas tendrán un ícono de rayo <i class="fas fa-bolt"></i> en el título. Al hacer clic en una `Oportunidad`, será redirigido a la siguiente página.

## Detalles del anuncio

![ES Oportunidades Offer details](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled category/Untitled subcategory/anuncios-enviados-oportunidades-de_1.jpg)

La página [Detalles del anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) presenta una tarjeta de `Oportunidad` en la parte superior de la página. Al hacer clic en `Ver oportunidad`, será redirigido a la siguiente página.

## Oportunidades del anuncio

![ES Oportunidades oportunidades do anúncio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled category/Untitled subcategory/anuncios-enviados-oportunidades-de_2.jpg)

La página **Oportunidades del anuncio** presenta el anuncio elegible para la Catálogo MeLi al lado del anuncio que está presente en el marketplace. La página le permite comparar los datos de los dos anuncios, incluida la información de la marca, especificaciones y dimensiones.

Además de la oportunidad de agregar anuncios, existe __Auto Optin (creación automática de anuncios de Catálogo MeLi)__, en esta opción el Mercado Livre evaluará las publicaciones de los vendedores, si cumple con todos los requisitos para convertirse en un anuncio de Catálogo MeLi, será hecho automáticamente y el vendedor verá el siguiente mensaje.

![Auto Optin MELI](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled category/Untitled subcategory/anuncios-enviados-oportunidades-de_3.png)

## Añadir anuncios a la Catálogo MeLi

Siga los pasos a continuación para añadir su anuncio a la Catálogo MeLi:

1. En el Admin VTEX, ingresa en **Marketplace > Interaciones**.
> Si su tienda utiliza el [Nuevo Admin VTEX](https://content.vtex.com/join-new-admin-beta-program-es/), acceda a **Marketplace > Conexiones**.
2. Seleccione el anuncio deseado que tenga el ícono de rayo <i class="fas fa-bolt"></i>.
3. En la página **Detalles del anuncio**, haga clic en `Ver oportunidad`.
4. En la página **Oportunidad del anuncio**, evalúe si su anuncio es compatible con el anuncio que ya está en el *marketplace*. Si son compatibles, haga clic en `Agregar a lo Catálogo MeLi`. 
5. Haga clic en `Agregar`. 

>⚠️ Esta acción no se puede deshacer, así que debe asegurarse de que los anuncios sean compatibles. Si un anuncio no es compatible con el producto que ya está presente en el marketplace, no lo añada a lo Catálogo MeLi. Añadir anuncios que no son parte del producto puede perjudicar su reputación como seller en el marketplace.

Para que su anuncio esté bien posicionado en lo Catálogo MeLi, finalice los ajustes indicados en la sección de este artículo [Ganando y perdiendo en la Buybox](#ganando-y-perdiendo-en-la-buybox).

## Ganando y perdiendo en lo Catálogo MeLi
Después de añadir el anuncio a lo Catálogo MeLi, su anuncio se activará en la Buybox de ese producto, pero no necesariamente será el primer artículo que aparecerá para comprar en el marketplace. Los anuncios pueden tener uno de los status a continuación:

- **Ganando:** después de activar la oportunidad, su anuncio está en el primer lugar de lo Catálogo MeLi. 
- **Perdiendo:** activó la oportunidad, pero no completó la configuración necesaria para hacer que el anuncio sea lo suficientemente atractivo para estar en primer lugar.

Para que su anuncio tenga el status ganando, siga las instrucciones a continuación:

1. En la página **Oportunidad del anuncio**, haga clic en `Ver detalles del anuncio`. 
2. Acceda a la sección **Oportunidades activas**. 
3. Siga las instrucciones que aparecen en la sección para completar la configuración del anuncio y activarlo en lo Catálogo MeLi.

La sección *Oportunidades activas* de la página [Detalles del anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) contiene:   
- **Datos de lo Catálogo MeLi:** información sobre lo Catálogo MeLi en los que se ha añadido el anuncio.  
- **Status de la oportunidad:** incluye `Ganando` o `Perdiendo`.  
- **Lista de configuraciones:** acciones necesarias para que el anuncio esté ganando en lo Catálogo MeLi. Algunas de las instrucciones que aparecen son cambiar el precio, promover envío gratis, entrega rápida u ofrecer pago con cuotas sin intereses. Cada ítem de la lista muestra una sugerencia de configuración que hará el anuncio más atractivo y lo posicionará en el primer lugar de lo Catálogo MeLi.   
