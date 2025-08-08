---
title: 'Payment Provider Protocol '
id: RdsT2spdq80MMwwOeEq0m
status: PUBLISHED
createdAt: 2018-01-02T15:40:00.920Z
updatedAt: 2025-02-19T20:31:05.883Z
publishedAt: 2025-02-19T20:31:05.883Z
firstPublishedAt: 2018-01-02T17:53:48.934Z
contentType: tutorial
productTeam: Financial
author: 4PrB9ACaQ8S0oO4wOmOuUu
slugEN: payment-provider-protocol
legacySlug: payment-provider-protocol
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Payment Provider Protocol es el protocolo de integración entre VTEX y otras empresas que procesan pagos.

Por medio de él, VTEX ofrece un contrato público disponible para todos los proveedores que desean integrarse a nuestra plataforma. Así, los proveedores obtienen mayor autonomía en relación a la integración.

El protocolo cuenta con los siguientes recursos:

- Proceso de homologación online.
- Soporte de pre-autorización (captura de 2 pasos).
- Mecanismo de intento de autorización de pago.
- Soporte para flujo de redireccionamiento de pago (3P).
- Soporte al protocolo OAuth para la autenticación.

Más información sobre el flujo de pago del protocolo se puede encontrar en la sección [Flujo del protocolo de pago](/es/tutorial/payment-provider-protocol#flujo-del-protocolo-de-pago).
Usted puede encontrar referencias a la API del protocolo [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Conceptos
__Provider:__ sistema de pago, gateway o proveedor que procesa pagos.

__Payment Provider Protocol:__ protocolo de integración desarrollado por VTEX.

__Conector:__ nombre del proveedor asociado de integración con VTEX.

__Oauth:__ protocolo de autorización para API web diseñado para permitir que las aplicaciones de cliente tengan acceso a un recurso protegido en nombre de un usuario.

__Adquirente:__ empresa especializada en procesar pagos. Se encarga de transferir a la cuenta de tu tienda los valores cobrados al cliente por el banco emisor.

## Requisitos previos

### Firma de un contrato de asociación comercial para servicios financieros

La implementación, publicación y actualización de un conector de pagos en VTEX requiere la celebración un contrato de asociación específico para servicios financieros que cubra los detalles del tema y las regulaciones dentro de la plataforma. Si aún no tienes un contrato de colaboración, pero estás interesado en convertirte en proveedor de pagos, ponte en contacto con nuestro equipo a través de nuestro [sitio web](https://vtex.com/ar-es/partner).

### Acceso a un entorno VTEX

Para publicar un conector, necesitas disponer de un entorno VTEX,  que solo puedes obtener tras firmar un acuerdo de asociación para servicios financieros. El entorno VTEX es necesario para que puedas publicar, homologar, actualizar y acceder a nuestro soporte para el desarrollo y mantenimiento del conector.

Si el _partner_ es un SI (Service Implementer) que desarrolla integraciones para clientes u otros proveedores de pagos, la cuenta VTEX utilizada debe ser la del proveedor principal del medio de pago y no la de la agencia contratada.

### Requisitos de los medios de pago
#### Proveedores de pagos con tarjetas de crédito, débito y cobranded (soluciones sin redirect) 

Para ser un proveedor VTEX integrado, debes usar una de las siguientes soluciones:

- La infraestructura donde estará el conector debe contar con un certificado PCI-DSS firmado por un asesor de seguridad calificado o QSA (Qualified Security Assessor, por sus siglas en inglés). Más información sobre el [Consejo de normas de seguridad de PCI](https://www.pcisecuritystandards.org/).
- Si no tienes el certificado, puedes implementar al proveedor usando el [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy).

Si el proveedor se ha certificado o ha iniciado el proceso de certificación, puede ponerse en contacto con el equipo comercial de VTEX para iniciar la integración.

El proveedor debe enviar el  [AOC](https://www.pcisecuritystandards.org/document_library) (Attestation of Compliance for Onsite Assessments - Service Provider Version) completamente rellenado a VTEX, observando los siguientes puntos:

- __Nombre de la empresa__: el campo “URL” (Parte 1a.) debe ser el mismo que el de la empresa que solicita el procedimiento de integración. Si se completa con otro nombre (ejemplo: empresa adquirida por otra), será necesario enviar documentación adicional que acredite la relación entre las empresas, y que la URL del servicio del proveedor fue evaluada por la PCI DSS.
- __Firma__: documento firmado por el representante de la empresa y por el QSA.
- __Fecha de vencimiento__: la validez del AOC es de 1 año después de la fecha de firma. No debe reenviarse a VTEX, el AOC emitido hace más de 11 meses, es decir, con menos de 30 días para la fecha de vencimiento.

<div class="alert alert-danger">
Los documentos SAQ (Self-Assessment Questionnaire) y AOC (Attestation of Compliance for Onsite Assessments – Merchants Version) no se aceptan en el proceso de integración de VTEX.
</div>
<br>

#### Proveedores de pagos offline o tarjeta private label (o tarjetas en general), pero que implican soluciones con redirect

Para estes tipo de proveedores, VTEX no requiere comprobación de certificación PCI DSS. Sólo tienes que ponerse en contacto con el equipo comercial de VTEX para iniciar la integración.

## Primeros pasos
A continuación, vamos a presentar paso a paso las informaciones referentes a la integración de pagos con VTEX.

### 1. Implementación del protocolo
Antes de configurar el ambiente VTEX, el proveedor debe implementar el servicio de back-end necesario para recibir y procesar los pagos (API). Más información sobre el flujo de pago del protocolo se puede encontrar en la sección [Flujo del protocolo de pago](/es/tutorial/payment-provider-protocol#flujo-del-protocolo-de-pago). Usted puede encontrar referencias a la API del protocolo [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### 2. Casos de uso específicos
Hay casos en que se pueden crear conectores para atender alguna solución específica. A continuación, se presentan las referencias de nuestra documentación que contienen información sobre estos casos:

- [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework): es una solución para la implementación de conectores a través de VTEX IO con base en un _boilerplate_. El _boilerplate_ ya viene con una gran parte del trabajo realizado, incluyendo los _endpoints_ del protocolo. La utilización de VTEX IO también acelera el proceso de desarrollo y pruebas de la tienda.

- [Payment Provider Protocol (PPP) aplicado a los pagos con POS](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos): es la aplicación del PPP a pagos en tiendas físicas utilizando un terminal de pago (POS). Se puede utilizar con tarjetas de crédito o débito. El flujo del pago se inicia con una compra realizada en [inStore](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf), después de lo cual se establece la comunicación con el POS, donde el cliente inserta la tarjeta.

### 3. Homologación de Payment Provider

Después de recibir los datos de acceso e implementar el backend, el proveedor debe instalar la aplicación Payment Provider Test Suite para acceder a la herramienta de pruebas. La instalación se realiza a través de la VTEX App Store.

![ppp-vtex-store-es](//images.ctfassets.net/alneenqid6w5/2sZn44SfDSGcUkgouQ2iyu/aa2d1e30c83c7d35c7313c112a5b69d1/image.png)

<div class="alert alert-warning">
<p>
Para completar el proceso de homologación, se debe implementar una lógica específica para abordar los requisitos de la prueba. En los requests enviados a Test Suite, utiliza el encabezado adicional <code>X-VTEX-API-Is-TestSuite = true</code> para identificarlos y enmascarar cualquier escenario requerido.<br><br> Toda comunicación con los servidores, ya sea durante el proceso de homologación o en producción, debe llevarse a cabo a través de HTTPS, que utiliza el puerto 443 de forma predeterminada. Es importante recordar que toda comunicación HTTPS debe usar exclusivamente TLS 1.2.
</p>
</div> 

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.518 seconds.

Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Fri Jun 30 2023 14:24:00 GMT-0700 (PDT)
* Source doc: [EDU-8223] Atualizações do Test Suite
* This is a partial selection. Check to make sure intra-doc links work.
----->

Tras la instalación, haz clic en Apps, en el panel lateral izquierdo del Admin. A continuación, selecciona la aplicación Payment Provider Test Suite para configurarla correctamente.

Dependiendo de la versión del Admin utilizada en la cuenta de la tienda, la aplicación estará disponible en la lista de aplicaciones. Para acceder a ella, utiliza la dirección [https://{{accountName}}.myvtex.com/admin/test-suite](about:blank)/payment-provider, sustituyendo {{accountName}} por el nombre de cuenta de tu tienda.

Luego, verás un formulario que tiene tres secciones: Información de servicio, Medio de pago y Casos de prueba. Rellena los campos según las instrucciones a continuación.

#### Información de servicio

* **URL de servicio:** define la URL del servicio de tu proveedor. Esta URL será la dirección base del protocolo y debe seguir el formato determinado por el proveedor. Por ejemplo, si la URL del servicio es [https://example.com/](https://example.com/), la URL completa del endpoint /payments será [https://example.com/payments](https://example.com/payments).
* **Clave de aplicación y token de aplicación:** el botón de alternancia con clave de aplicación y token de aplicación te permite escoger si se configuran estos campos o no, lo que puede facilitar las pruebas durante la etapa de desarrollo. Si no se activa esta opción, las credenciales se enviarán en los encabezados como una string vacía.

<div class="alert alert-info">
  <p>
El gateway almacena las credenciales de las tiendas configuradas en la afiliación y las envía en los encabezados X-VTEX-API-AppKey y X-VTEX-API-AppToken. La excepción son las integraciones desarrolladas con VTEX IO, en cuyo caso, los encabezados se envían como x-provider-api-appKey y x-provider-api-appToken. Si estás desarrollando usando <a href="https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-framework">Payment Provider Framework (IO)</a>, esto lo define la opción usesProviderHeadersName. Consulta los ajustes disponibles <a href="https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-framework#available-configurable-options">aquí</a>.
</p>
  </div>

#### Medio de pago

Después de rellenar URL de servicio, Test Suite validará el  [Endpoint Manifest](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest) y verificará los medios de pago declarados, que aparecerán en este campo. Selecciona los medios de pago en los que deseas ejecutar las pruebas.

#### Casos de prueba

En esta sección, debes seleccionar los casos que deseas probar. Si estás probando un medio de tarjeta de crédito, tu integración debe pasar los casos Aprobado, Denegado, Cancelación, Aprobado asíncrono y Denegado asíncrono. Los medios de pago con [redirección](https://developers.vtex.com/docs/guides/payments-integration-purchase-flows#redirect) solo necesitan el Flujo de redirección.

![ppp-config-es](//images.ctfassets.net/alneenqid6w5/5s70iVRPAnrikX88iv8fn1/f15364fc9a837883d8d1f022fe646014/image.png)

### 4. Pruebas
Cuando haces clic en el botón `Ejecutar prueba`, Test Suite llama la URL de servicio proporcionada y ejecuta los casos de prueba seleccionados. Las pruebas son:

* **Flujo aprobado:** esta prueba se divide en tres etapas. En la primera, se envía un request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera el status aprobado como respuesta. En la segunda, se envía un request [Settle Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/settlements) a {{ServiceURL}}/payments/{paymentId}/settlements y se espera la respuesta con el settleId rellenado. Y en la última, se envía un request [Refund Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/refunds) a {{ServiceURL}}/payments/{paymentId}/refunds y se espera una respuesta con refundId rellenado.
* **Flujo denegado:** en esta prueba, se envía un request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera el status denegado como respuesta.
* **Flujo de cancelación:** para esta prueba, primero se necesita el status approved como respuesta del request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) de {{ServiceURL}}/payments. Luego, se envía un request [Cancel Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments/-paymentId-/cancellations) a {{ServiceURL}}/payments/{paymentId}/cancellations y se espera una respuesta con el status cancelado.
* **Flujo aprobado asíncrono:** esta prueba se divide en dos pasos. Primero, se envía un request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera el status undefined como respuesta. Después de 15 segundos, se espera otra respuesta en el mismo formato mediante un POST de la URL enviada en el campo callbackUrl y con el status approved. Con la integración en producción, esta última llamada realizada por callbackUrl se autentica con las claves de entorno del partner: vtex-app-key y vtex-app-token. Para más información sobre el flujo de callback consulta la sección [Autorización del pago](#autorizacion-de-pago).
* **Flujo denegado asíncrono:** como la anterior, esta prueba se divide en dos pasos. Primero, se envía un request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera el status undefined como respuesta. Después de 15 segundos, se espera otra respuesta en el mismo formato mediante un POST de la URL enviada en el campo callbackUrl y con el status denied. Con la integración producción, esta última llamada realizada por callbackUrl se autentica con las claves de entorno del partner: vtex-app-key y vtex-app-token. Para más información sobre el flujo de callback consulta la sección [Autorización del pago](#autorizacion-de-pago).
* **Flujo de boleto:** en esta prueba, se envía un request[ Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera una respuesta con status undefined y el campo `bankIssueInvoiceUrl` rellenado con la URL del ticket. Después de 15 segundos, se espera otra respuesta en el mismo formato mediante un POST de la URL enviada en el campo callbackUrl y con el status approved. Con la integración en producción, esta última llamada realizada por callbackUrl se autentica con las claves de entorno del partner: vtex-app-key y vtex-app-token. Para más información sobre el flujo de callback consulta la sección [Autorización del pago](#autorizacion-de-pago).
* **Flujo de redirección:** esta prueba se divide en dos pasos. Primero, se envía un request [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) a {{ServiceURL}}/payments y se espera una respuesta con status undefined y el campo redirectUrl rellenado con la URL que se utilizará para redirigir al cliente. Después de 15 segundos, se espera otra respuesta en el mismo formato mediante un POST de la URL enviada en el campo callbackUrl y con el status approved. Con la integración en producción, esta última llamada realizada por callbackUrl se autentica con las claves de entorno del partner: vtex-app-key y vtex-app-token. Para más información sobre el flujo de callback consulta la sección [Autorización del pago](#autorizacion-de-pago). El conector que utilizará redirección no tiene que pasar todas las pruebas de Test Suite, solo la prueba de Redirección.

<div class="alert alert-warning">
  En el caso de las tarjetas de crédito, las pruebas obligatorias son: Autorizar, Denegado, Cancelar, Aprobado asíncrono y Denegado asíncrono.
  </div>

Para identificar cómo responder a cada una de las pruebas con tarjetas de crédito, utiliza los siguientes números específicos:

| Número de tarjeta | Status de la respuesta                     |
| ----------------- | ------------------------------------------ |
| 4444333322221111  | __approved__                                   |
| 4444333322221112  | __denied__                                     |
| 4222222222222224  | __undefined__, `callbackUrl` con status __approved__ |
| 4222222222222225  | __undefined__, `callbackUrl` con status __denied__   |

### 5. Resultados

Después de ejecutar las pruebas, el sistema mostrará el Informe de prueba que presenta los resultados detallados de cada caso de prueba. De este modo, tendrás más visibilidad sobre lo que debes ajustar si se produce un error.

![Payment Provider Test Suite 2_ES](//images.ctfassets.net/alneenqid6w5/6o9b9Wz3tSKiU6mwEssEgs/6d5d097d5f50587f6a69d8932a81f78f/Payment_Provider_Test_Suite_2_ES.JPG)

Para ver los mensajes transmitidos entre Test Suite y la implementación de tu proveedor de pagos, haz clic en el botón Inspeccionar logs. Se abrirá una ventana modal que muestra la lista de mensajes transmitidos y la carga de cada request y respuesta. El botón situado en la esquina superior derecha de la sección de código facilita la copia del código al portapapeles.

![Payment Provider Test Suite Logs_ES](//images.ctfassets.net/alneenqid6w5/3FCFc1FA7L6ILyXB8NSmA3/9f1a6c56c4c53d51a3e403b4665338dc/Payment_Provider_Test_Suite_Logs_ES.JPG)

## Flujo del protocolo de pago
Aquí vamos a explicar el flujo de pago integrado en detalle. La siguiente imagen muestra todo el flujo, mostrando VTEX Payments y las responsabilidades de su proveedor.

Todo comienza con la solicitud de un nuevo pago, después de la creación de un nuevo pedido. VTEX crea una nueva representación del pago y avanza para el procesamiento de los pagos.

![fluxo-atualizado-ppp](//images.ctfassets.net/alneenqid6w5/7lQZhSFEff1iaN7t2UVVNE/2890bc7073210c268d7d429d0162c9b7/FLUXO1.png)

<div class="alert alert-info">
  El período predeterminado de 7 días para reintentos (retries) de pago asíncronos solo se aplica cuando el usuario no especifica un valor en el campo <code>delayToCancel</code> del endpoint <a href="https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments">Create Payment</a> o al enviar la URL de devolución de llamada.</div>

<div class="alert alert-warning">
El valor máximo permitido para el campo <code>delayToCancel</code> es 30 días (2592000 segundos). Sin embargo, en los pagos realizados a través de PIX (medio de pago instantáneo brasileño), los valores deben fijarse entre 15 e 60 minutos (900 y 3600 segundos).</div>    

### Autorización de pago
En este punto, VTEX llama al endpoint __*/payments*__ y envía un payload con los datos de pago para su proveedor. El proveedor debe procesar estos datos y enviar la respuesta, que debe contener uno de los valores de status: __approved__, __denied__ o __undefined__.

El status __undefined__ representa el estado en el que el proveedor no pudo terminar de procesar el pago. Esto puede deberse a una larga ejecución de procesamiento o a algún procesamiento asincrónico.

En cualquiera de los casos, una vez que termine el procesamiento y el proveedor tenga un status final (__approved__ or __denied__), deberá hacer una llamada a nuestro `callbackUrl`. Enviamos el `callbackUrl` en el cuerpo del _request_ __/payments__. Hay dos flujos posibles al usar `callbackUrl` dependiendo de si tu integración está hospedada en la infraestructura del partner o en VTEX IO:

- __Sin VTEX IO:__ El `callbackUrl` contiene un endpoint de callback para que el proveedor notifique al gateway el status actualizado.
- __Con VTEX IO:__ El `callbackUrl` contiene un endpoint de reintento (retry). Cuando el proveedor utiliza este endpoint para llamar al gateway, se produce una nueva solicitud de Create Payment (/payments) del gateway al proveedor, y el gateway recibe el status de pago actualizado en respuesta a esta solicitud.

El flujo completo con status undefined y uso de notificación se puede ver a continuación:

![Payment authorization callback notification flow](//images.ctfassets.net/alneenqid6w5/2jMjUV7EZuzqN5L1OCQgIJ/39a8e76973fe6127741c1a34b9230c82/image1.png)

1. La autorización del pago se inicia cuando el _gateway_ hace una llamada al endpoint Create Payment (__/payment__) para el proveedor. El campo `callbackUrl` se envía dentro del cuerpo del _request_ y contiene la URL para hacer la notificación.
2. El pago se produce de forma asíncrona (no genera el status definitivo cuando se inicia la transacción). A continuación, el _gateway_ recibe la respuesta con status __undefined__ y espera a que se complete el procesamiento del pago. Más adelante, el pago se completará y el _gateway_ recibirá el status definitivo (__approved__ o __denied__).
3. Cuando se procesa el pago, el adquirente activa un _webhook_ al proveedor con el nuevo status.
4. El proveedor, al recibir el pedido por _webhook_, hace una llamada al _endpoint_ de notificación y devuelve el status actualizado al _gateway_.

El flujo completo con status __undefined__ y uso del __retry__ se puede ver a continuación:

![Payment authorization callback retry flow](//images.ctfassets.net/alneenqid6w5/5kGkX4QGLUPNfclwMdibax/b78e54e17e7971aa4385f025b8eca4a4/image2.png)

1. La autorización del pago se inicia cuando el _gateway_ hace una llamada al _endpoint_ Create Payment (__/payment__) para el proveedor. El campo `callbackUrl` se envía dentro del cuerpo del _request_ y contiene la URL del endpoint __retry__.
2. El pago se produce de forma asíncrona (no genera el status definitivo cuando se inicia la transacción). A continuación, el _gateway_ recibe la respuesta con status __undefined__ y espera a que se complete el procesamiento del pago. Más adelante, el pago se completará y el _gateway_ recibirá el status definitivo (__approved__ o __denied__).
3. Cuando se procesa el pago, el adquirente activa un _webhook_ al proveedor con el nuevo status.
4. El proveedor, al recibir el pedido por webhook, hace una llamada al _endpoint_ __retry__ para el _gateway_, indicándo le que llame de nuevo al _endpoint_ __/payment__. El __retry__ no requiere ninguna carga.
5. Después de recibir el __retry__, el _gateway_ llama de nuevo al _endpoint_ __/payment__. Finalmente, el _gateway_ recibe la respuesta del proveedor con el nuevo status (__approved__ o __denied__).

## Callback URL

El campo `callbackUrl` contiene una URL que el proveedor de pagos utiliza para realizar un _callback_ y notificar a nuestro gateway el status final del pago: `aprobado` o `denegado`.

Esta URL tiene algunos parámetros de consulta, incluyendo `X-VTEX signature`. Este parámetro es obligatorio y contiene un _token_ de firma para indicar que el request ha sido generado por VTEX como una medida de seguridad. El token de firma tiene como máximo 32 caracteres. Puedes ver un ejemplo de una URL de _callback_ con el token de firma a continuación:

```
https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R123456789aBcDeFGHij1234567890tk
```

En la [página de Transacciones del Admin](https://help.vtex.com/es/tutorial/como-visualizar-detalle-del-pedido--tutorials_452), el token de firma se muestra enmascarado por razones de seguridad, como en este ejemplo: `X-VTEX-signature=Rj******tk`.

Vea a continuación, um ejemplo de payload enviada junto con la callback URL:

```json
{"paymentId":"8B3BA2F4352545A8B1C5A215F356A01C","status":"approved","authorizationId":"184520","nsu":"21705348","tid":"21705348","acquirer":"pagarme","code":"0000","message":"Transação aprovada com sucesso","delayToAutoSettle":1200, "delayToAutoSettleAfterAntifraud":1200, "delayToCancel":86400,"cardBrand":"Mastercard","firstDigits":"534696","lastDigits":"6921","maxValue":16.6}
```

<div class="alert alert-info">
  Los valores de los parámetros enviados en el payload de callback reemplazan los valores originales informados en la llamada de <a href="https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments">Create Payment</a>.  
</div>

<div class="alert alert-warning">
  Si los parámetros de tiempo de espera (<i>delayToAutoSettle</i> e <i>delayToAutoSettleAfterAntifraud</i>) no se envían con la URL de devolución de llamada, los valores se establecerán automáticamente en 24 horas.
</div>

Al realizar el request de _callback_, recomendamos que los proveedores de pago utilicen la URL de _callback_ exactamente como la recibieron, lo que garantiza que se incluyan todos los parámetros.

Al llamar a CallbackURL, su proveedor debe enviar en el request los headers *X-VTEX-API-AppKey* y *X-VTEX-API-AppToken*. Más información sobre esto en la [sección de credenciales VTEX](/es/tutorial/payment-provider-protocol#credenciales-vtex).

<div class="alert alert-danger">
Además de CallbackURL, si el status es <strong>undefined</strong>, VTEX intentará de nuevo llamar al endpoint de la autorización de pago. Si el status devuelto en estas llamadas permanece como <strong>undefined</strong>, las llamadas continuarán por 7 días. Por lo tanto, <strong>es importante que su proveedor esté preparado para recibir la misma autorización de pago varias veces</strong>.
</div>

Una vez que el pago ha sido procesado por su proveedor, de forma directa o asincrónica, movemos la transacción de pago dentro de VTEX al status *autorizado* o *cancelado*, de acuerdo con el status de la respuesta del procesamiento.

Más referencias a la API de autorización [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Reembolso/Cancelación
Después de la primera llamada a la autorización de pago, la tienda puede Después de la primera llamada para la autorización de pago, la tienda puede cancelar el pedido en cualquier momento. En el momento de la cancelación, pueden ocurrir las siguientes situaciones:

1. __La transacción de pago ya ha sido liquidada__: la solicitud de cancelación resultará en una llamada de reembolso al endpoint del proveedor _/payments/{id}/refunds_, donde _{id}_ representa el ID de pago en VTEX. 
2. __La transacción de pago aún no se ha liquidado__: llamaremos al endpoint del proveedor _/payments/{id}/cancellations_, donde _{id}_ es el ID de pago en VTEX. Si existe alguna dificultad para procesar la cancelación automática, se enviará un correo electrónico al comerciante para que pueda cancelarla manualmente.

El Payment Provider Protocol también permite reembolsos parciales. Por ejemplo, si después de completar una compra por valor de USD 1,000, es necesario reembolsar al cliente por valor de USD 300, son posibles dos escenarios:

1. __El pago ya ha sido liquidado__: se realizará un reembolso parcial de USD 300 al cliente. El valor restante (USD 700) queda a disposición del comerciante.
2. __El pago aún no ha sido liquidado__: se hará al comerciante una cancelación de captura por el valor de USD 300 y una aprobación de liquidación parcial por el valor de USD 700. 

Más información acerca de la API de cancelación y reembolso [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### Liquidación
Si la transacción de pago está autorizada en VTEX Payments, puede recibir solicitudes de liquidación. Cuando recibimos una solicitud de liquidación, llamamos al endpoint __/payments/{id}/settlements__ del proveedor, donde *{id}* es el ID de pago en VTEX.

Cuando el proveedor recibe una solicitud de liquidación, debe liquidar el pago y responder con información de liquidación. Si esta llamada falla, hacemos algunas retentaciones, por hasta 1 día.

<div class="alert alert-danger">
Su proveedor debe estar preparado para recibir la misma llamada de liquidación varias veces.
</div>

Si la llamada de liquidación funciona bien, movemos la transacción de pago al estado *Finalizado*, y el flujo termina con éxito.

Más información acerca de la API de liquidación [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

## Credenciales VTEX
Al llamar a CallbackURL, usted debe especificar los headers de autenticación, que en VTEX son _X-VTEX-API-AppKey_ y _X-VTEX-API-AppToken_. Puede encontrar estas credenciales (que son únicas para su cuenta) en el módulo License Manager de VTEX.

Utilice la URL `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home`, sustituyendo el `{{AccountName}}` por su nombre de cuenta. Entonces, siga las instrucciones de [este tutorial](https://developers.vtex.com/docs/guides/authentication-overview) para aprender a crear appKeys y appTokens.
