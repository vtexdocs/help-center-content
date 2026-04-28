---
title: 'Errores de integración de stock con Amazon'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2023-03-29T14:38:55.490Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: amazon-inventory-integration-errors
legacySlug: errores-de-integracion-de-stock-con-amazon
locale: es
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

A veces se producen errores de integración de _stock_ en los _marketplaces_ para los que VTEX ha desarrollado un [conector nativo](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-conector-nativo-vtex). Este artículo reúne los errores más frecuentes de integración de _stock_ con Amazon y explica cómo resolverlos.

Hay mensajes que identifican cuáles son los errores. Puedes verlos en el Admin VTEX, en **MARKETPLACE > Conexiones > Stock**, haciendo clic en el mensaje de proceso con error.

Después de resolver un error, debes volver a procesar manualmente la integración del _stock_ del SKU en cuestión. Esto se hace en el mismo lugar donde se muestra el error, haciendo clic en **Acciones > Reprocesar**.

A continuación se muestran los principales mensajes de error de integración de _stock_ con Amazon: 

#### Mensaje de error

`Invalid seller id`

**Mensaje traducido:** ID de seller inválido

Este error significa que el código de identificación del _seller_ (seller ID) utilizado al configurar la integración con Amazon se considera inválido.  Debes ponerte en contacto con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com) para confirmar el código correcto. A continuación, corrige la configuración del conector de integración. En tu Admin VTEX, accede a **MARKETPLACE > Conexiones > Configuración**. En la tarjeta de Amazon, haz clic en el ícono de engranaje <i class="fas fa-cog"></i> y elige la opción **Editar configuración**. Rellena el campo Amazon Seller Id con el código correcto y haz clic en **Guardar configuración**.

____

#### Mensaje de error

`This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.`

**Mensaje traducido:** Este SKU no está en el catálogo de Amazon. Si recibes este mensaje después de enviar un fichero de inventario de varios marketplaces y el marketplace indicado en este error es diferente del _marketplace_ al que enviaste tu fichero, este error es una indicación de que la página de detalles de este ítem no existe en el marketplace indicado. Amazon está intentando crear la página de detalles para este ítem en tu nombre. Si tiene éxito, tu _listing_ se creará en el marketplace indicado en un plazo de 48 horas.

Este mensaje indica una falla al exportar el SKU al catálogo de Amazon, probablemente porque la plantilla de mapeo no se ha rellenado correctamente para ese SKU. Esto imposibilita la integración del _stock_ con Amazon. Primero tienes que volver a exportar la categoría a la que pertenece el SKU. Para ello, consulta el artículo [Envío de productos a Amazon](/es/docs/tracks/envio-de-productos-a-amazon). A continuación, [actualiza tu stock](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock). Esto se reflejará automáticamente en Amazon, por lo que no es necesario volver a procesar manualmente el error.

____

#### Mensaje de error

`Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

**Mensaje traducido:** Para que puedas publicar productos con tu marca, Amazon tiene que haberla autorizado. Las marcas tienen que registrarse en el Registro de marcas en Amazon, pero si tu marca no reúne los requisitos para hacerlo, puedes obtener una excepción. Para ello, ponte en contacto con Atención al colaborador comercial y menciona el _código de error 5665_. Contacta con Atención al colaborador comercial y facilita la siguiente información: - Nombre de la marca utilizado al crear el _listing_. - Imágenes reales del producto o del embalaje en las que se muestre la marca. En las imágenes se puede mostrar el producto o el embalaje en una mano o colocado sobre una mesa. La marca tiene que estar fijada de forma permanente. - Si utilizas plantillas de ficheros de inventario, proporciona también el número de lote del informe de procesamiento del fichero de carga de inventario. Para más información, consulta nuestra Política de nombres de marcas.

Amazon solo aceptará anunciar un producto después de aprobar su marca, que debe registrarse a través del [Registro de marcas de Amazon](https://brandservices.amazon.es/brandregistry/eligibility). Sin embargo, si tu marca no es elegible para el registro según la [Política de nombres de marcas de Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US), puedes obtener una excepción poniéndote en contacto con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/). El _código de error 5665_ debe comunicarse al equipo de soporte, junto con otros datos que se describen en la Política de marcas de Amazon. 

____

#### Mensaje de error

`We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

**Mensaje traducido:** Es posible que estés haciendo un uso indebido del campo Marca e incumpliendo la Política de nombres de marca. Si crees que cumples nuestra política, ponte en contacto con Atención al colaborador comercial y menciona el _código de error 5661_. Contacta con Atención al colaborador comercial y facilita la siguiente información: - Nombre de la marca utilizado al crear el _listing_. - Imágenes reales del producto o del embalaje en las que se muestre la marca. En las imágenes se puede mostrar el producto o el embalaje en una mano o colocado sobre una mesa. La marca tiene que estar fijada de forma permanente. - Si utilizas plantillas de ficheros de inventario, proporciona también el número de lote del informe de procesamiento del fichero de carga de inventario. Para más información, consulta nuestra Política de nombres de marcas.

Se ha considerado que la marca de tu producto no cumple la [Política de nombres de marcas de Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US). Si después de revisar los requisitos del _marketplace_ no puedes identificar el origen del problema, ponte en contacto con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/). Comunica al equipo de soporte el _código de error 5661_ y los demás datos del error que se indican en la Política de marcas de Amazon.

____

#### Mensaje de error

`The seller does not have an eligible Amazon account to call Amazon MWS. For more information about eligible accounts, see the Amazon MWS documentation.`

**Mensaje traducido:** El vendedor no tiene una cuenta de Amazon elegible para llamar a Amazon MWS. Para más información sobre qué cuentas son elegibles, consulta la documentación de Amazon MWS.

La cuenta de Amazon de un usuario puede considerarse inelegible por diversas razones, como datos de registro incorrectamente rellenados, problemas con el _token_ o violación de la política del _marketplace_. Para resolver el error debes contactar con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/). Puedes encontrar más información en la documentación de Amazon sobre la [gestión de cuentas de AWS](https://docs.aws.amazon.com/es_es/accounts/latest/reference/managing-accounts.html). Para saber más sobre la política de seguridad en las cuentas de _sellers_ de Amazon, consulta el artículo [Seguridad en la Gestión de Cuentas de AWS](https://docs.aws.amazon.com/es_es/accounts/latest/reference/security.html).

____

#### Mensajes de error

`Access to Feeds. SubmitFeed is denied.`<br>
</br>`Feed rejected`

**Mensajes traducidos:** Acceso a Feeds. SubmitFeed denegado. | Feed rechazado

El sistema [_Data feeds_](https://docs.aws.amazon.com/es_es/marketplace/latest/userguide/data-feed.html) de Amazon ofrece a los _sellers_ la posibilidad de recopilar y analizar información sobre sus productos, ventas, etc. Estos errores suelen producirse por dos motivos: problemas con el registro o con el _token_. Puede ser que algún campo del registro esté pendiente o se haya rellenado incorrectamente. O podría ser un problema con el _token_ de la integración, que puede haber caducado o haberse considerado sospechoso en términos de seguridad, por ejemplo. Para resolver los errores, contacta con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/).

____

#### Mensajes de error

`AuthToken is not valid for SellerId and AWSAccountId`<br>
</br>`Access denied`

**Mensajes traducidos:** El AuthToken no es válido para el SellerId y el AWSAccountId | Acceso denegado

Estos errores se deben a problemas con _tokens_. Amazon puede considerar que un _token_ no es válido por diferentes razones, como un periodo de caducidad expirado o una sospecha de amenaza a la seguridad, por ejemplo. Los asuntos relacionados con _tokens_ deben tratarse directamente con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/).

<br></br>
### Sepa más

- [Integración de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [Control de stock mínimo para integraciones](/es/docs/tutorials/control-de-stock-minimo-para-integraciones)
- [Configurar la Alerta de Stock Crítico](/es/docs/tutorials/configurar-la-alerta-de-stock-critico)
