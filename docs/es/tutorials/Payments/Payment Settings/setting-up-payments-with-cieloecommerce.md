---
title: 'Configurar pago con CieloEcommerce'
id: 6zuELBqEo0QzApbU4l7L4
status: PUBLISHED
createdAt: 2023-09-18T14:07:22.540Z
updatedAt: 2024-03-27T17:13:40.793Z
publishedAt: 2024-03-27T17:13:40.793Z
firstPublishedAt: 2023-09-18T15:29:57.321Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-cieloecommerce
locale: es
legacySlug: configurar-pago-con-cieloecommerce
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el CieloEcommerce. Con esta integración, su tienda puede rrealizar ventas a través de tarjetas de credito, debito, private y cobranded labels, boletos, PIX, entre otros. 

Para configurar CieloEcommerce, siga los siguientes pasos:

<blockquote><ui>1. En el Admin VTEX, accede a <b>Configuración de la tienda > Pago > Proveedores</b>, o escribe <b>Proveedores</b> en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón <b>Nuevo proveedor</b>.</ui>

<blockquote><ui>3. Escriba el nombre <b>CieloEcommerce</b> en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En <b>Autorización del proveedor</b>, rellene los campos de registro <b>Clave de aplicación</b> y <b>Token de aplicación</b> con los <b>MerchantID</b> y <b>MerchantKey</b> proporcionados por su cuenta CieloEcommerce.</ui>

<blockquote><ui>5. Si desea modificar el nombre de identificación que se mostrará para el proveedor CieloEcommerce en la pantalla VTEX Admin, ingrese la información en el campo <b>Nombre</b> en <b>Información general</b>.</ui>

<blockquote><ui>6. En <b>Control de pago</b>, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en <b>Activar modo de prueba</b>.</ui>

<blockquote><ui>7. Si desea utilizar <a href="https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx">Split de pagos</a> en su tienda, seleccione la opción <b>Activar split de cobros y enviar destinatarios de pago</b> e indique el <b>Responsable de cargos de procesamiento de pagos</b> y el <b>Responsable de contracargos</b> (marketplace, sellers o marketplace y sellers).</ui>

<blockquote><ui>8. En <b>Integration</b>, seleccione si el conector se utilizará como <b>Adquirencia</b> o <b>Gateway</b>.</ui>

<blockquote><ui>9. En <b>Provider</b>, seleccione el adquiriente que se utilizará con el conector CieloEcommerce.</ui>

<blockquote><ui>10. En <b>IsSplit</b>, elija si la opción de split estará disponible.</ui>

<blockquote><ui>11. En <b>UseMpi</b>, elija si autenticarán las transacciones (3DS 2.0). Este campo es obligatorio para el tipo de pago débito. Si selecciona "True", vaya al Paso 12. Si selecciona "False", vaya al Paso 13.</ui>

<blockquote><ui>12. Rellene los campos <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b> y <b>MpiEstablishmentCode</b> con tus datos de acceso a Mpi.</ui>

<blockquote><ui>13. En <b>SoftDescriptor</b>, indicar la información que se mostrará para identificar la transacción realizada en su tienda.</ui>

<blockquote><ui>14. En <b>AntifraudProvider</b>, seleccione el proveedor antifraude que desea utilizar con CieloEcommerce.</ui>

<blockquote>>⚠️ Consulte con Cielo si las opciones antifraude en CieloEcommerce ya están disponibles para su uso. Si aún está en desarrollo, ambos campos descritos en el paso 15 deben dejarse en blanco. Para obtener más información sobre el uso de opciones antifraude en su tienda, visite [Configurar el antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude).</blockquote>
<br>

<blockquote><ui>15. En <b>Antifraud</b> y <b>AntifraudSequenceCriteria</b>, seleccione las opciones según información de CieloEcommerce antifraude. Consulta con CieloEcommerce si el antifraude ya está disponible para su uso, si aún está en desarrollo debes dejar ambos campos en blanco.</ui>

<blockquote><ui>16. Em <b>Captura</b>, seleccione el período en el que se debe solicitar la captura de pago. El horario estándar se realizará cuatro días después de la autorización.</ui>

<blockquote><ui>17. Seleccione los campos <b>UseVerifyCard</b>, <b>AcceptInternationalCard</b>, <b>AcceptPrePaidCard</b>, <b>SaveCard</b> y <b>CancelRefundType</b> según su configuración en CieloEcommerce.</ui>

<blockquote><ui>18. Haga clic en <b>Guardar</b>.</ui>

Para configurar los métodos de pago a procesar por CieloEcommerce, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, CieloEcommerce puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
