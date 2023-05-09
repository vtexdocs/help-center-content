---
title: Payment Provider Protocol 
id: RdsT2spdq80MMwwOeEq0m
createdAt: 2018-01-02T15:40:00.920Z
updatedAt: 2023-04-26T17:47:52.492Z
publishedAt: 2023-04-26T17:47:52.492Z
firstPublishedAt: 2018-01-02T17:53:48.934Z
contentType: tutorial
productTeam: Financial
author: 4PrB9ACaQ8S0oO4wOmOuUu
slug: payment-provider-protocol
legacySlug: payment-provider-protocol
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

## ¿Qué es el Payment Provider Protocol?
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

Para implementación, publicación y actualización de un conector de pagos en VTEX se requiere celebrar un contrato de asociación __específico para servicios financieros__ que cubra los detalles del tema y las regulaciones dentro de la plataforma. Si aún no tienes un acuerdo de colaboración, pero estás interesado en convertirte en proveedor de pagos, ponte en contacto con nuestro equipo a través de nuestro [sitio web](https://vtex.com/es-es/partner/).

### Acceso a un entorno VTEX

Para publicar un conector, necesitas disponer de un entorno VTEX,  que solo puedes obtener tras firmar un acuerdo de asociación para servicios financieros. El entorno VTEX es necesario para que puedas publicar, homologar, actualizar y acceder a nuestro soporte para el desarrollo y mantenimiento del conector.

Si el _partner_ es un SI (Service Implementer) que desarrolla integraciones para clientes u otros proveedores de pagos, la cuenta VTEX utilizada debe ser la del proveedor principal del medio de pago y no la de la agencia contratada.

### Requisitos de los medios de pago
#### Proveedores de pagos con tarjetas de crédito, débito y cobranded (soluciones sin redirect) 

Para ser un proveedor VTEX integrado, debes usar una de las siguientes soluciones:

- La infraestructura donde estará el conector debe contar con un certificado PCI-DSS firmado por un asesor de seguridad calificado o QSA (Qualified Security Assessor, por sus siglas en inglés). Más información sobre el [Consejo de normas de seguridad de PCI](https://www.pcisecuritystandards.org/).
- Si no tienes el certificado, puedes implementar al proveedor usando el [Secure Proxy](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-secure-proxy).

Si el proveedor se ha certificado o ha iniciado el proceso de certificación, puede ponerse en contacto con el equipo comercial de VTEX para iniciar la integración.

El proveedor debe enviar el  [AOC](https://www.pcisecuritystandards.org/document_library) (Attestation of Compliance for Onsite Assessments - Service Provider Version) completamente rellenado a VTEX, observando los siguientes puntos:

- __Nombre de la empresa__: el campo “URL” (Parte 1a.) debe ser el mismo que el de la empresa que solicita el procedimiento de integración. Si se completa con otro nombre (ejemplo: empresa adquirida por otra), será necesario enviar documentación adicional que acredite la relación entre las empresas, y que la URL del servicio del proveedor fue evaluada por la PCI DSS.
- __Firma__: documento firmado por el representante de la empresa y por el QSA.
- __Fecha de vencimiento__: la validez del AOC es de 1 año después de la fecha de firma. No debe reenviarse a VTEX, el AOC emitido hace más de 11 meses, es decir, con menos de 30 días para la fecha de vencimiento.

<div class="alert alert-danger">
Los documentos SAQ (Self-Assessment Questionnaire) y AOC (Attestation of Compliance for Onsite Assessments – Merchants Version) no se aceptan en el proceso de integración de VTEX.
</div>
<br>

#### Proveedores de pagos offline o tarjeta private label (o tarjetas en general, pero que implican soluciones con redirect

Para estes tipo de proveedores, VTEX no requiere comprobación de certificación PCI DSS. Sólo tienes que ponerse en contacto con el equipo comercial de VTEX para iniciar la integración.

## Primeros pasos
A continuación, vamos a presentar paso a paso las informaciones referentes a la integración de pagos con VTEX.

### 1. Implementación del protocolo
Antes de configurar el ambiente VTEX, el proveedor debe implementar el servicio de back-end necesario para recibir y procesar los pagos (API). Más información sobre el flujo de pago del protocolo se puede encontrar en la sección [Flujo del protocolo de pago](/es/tutorial/payment-provider-protocol#flujo-del-protocolo-de-pago). Usted puede encontrar referencias a la API del protocolo [aquí](https://developers.vtex.com/docs/guides/payment-provider-protocol-api-overview).

### 2. Casos de uso específicos
Hay casos en que se pueden crear conectores para atender alguna solución específica. A continuación, se presentan las referencias de nuestra documentación que contienen información sobre estos casos:

- [Payment Provider Framework (PPF)](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-framework): es una solución para la implementación de conectores a través de VTEX IO con base en un _boilerplate_. El _boilerplate_ ya viene con una gran parte del trabajo realizado, incluyendo los _endpoints_ del protocolo. La utilización de VTEX IO también acelera el proceso de desarrollo y pruebas de la tienda.

- [Payment Provider Protocol (PPP) aplicado a los pagos con POS](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-ppp-applied-to-pos): es la aplicación del PPP a pagos en tiendas físicas utilizando un terminal de pago (POS). Se puede utilizar con tarjetas de crédito o débito. El flujo del pago se inicia con una compra realizada en [inStore](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf), después de lo cual se establece la comunicación con el POS, donde el cliente inserta la tarjeta.

### 3. Homologación de Payment Provider
Después de recibir los datos de acceso e implementar el back-end, el proveedor debe instalar la aplicación Payment Provider Test Suite para acceder a la herramienta de pruebas. La instalación se hace en [VTEX App Store](https://apps.vtex.com/vtex-payment-provider-test-suite/p "VTEX App Store.").

![print1](//images.ctfassets.net/alneenqid6w5/2sZn44SfDSGcUkgouQ2iyu/d9d72ca9a6fa585f959fa932412930d7/print1.png)

<div class="alert alert-warning">
Toda comunicación con los servidores, tanto durante el proceso de homologación como en producción, debe ocurrir vía HTTPS que por defecto usa el puerto 443. Es importante recordar que toda la comunicación HTTPS debe ser exclusivamente sobre <strong>TLS 1.2</strong>.
</div> 

Después de la instalación, basta con verificar el módulo Otros en el menú lateral de la izquierda del  Admin. Luego, seleccione la opción Payment Provider para configurarla correctamente.

De esta manera, usted verá dos formularios: Service Information y Tests.

Rellene los campos de cada uno de acuerdo con las siguientes indicaciones:

#### Service Information
- __Service URL__: defina la URL de su proveedor de servicios. Esta URL será la dirección base del protocolo y debe seguir el formato determinado por este. Por ejemplo, si la URL del servicio es *http://10.10.10.10*, la URL completa para el endpoint */payments* será *http://10.10.10.10/payments*.
- __Connector Name__: rellene el nombre que desea dar a su conector dentro de VTEX. Señalamos que el nombre apenas puede contener letras minúsculas, números y guión. 
- __X-VTEX-API-AppKey__: introduzca el valor "PROVIDER-API-AppKey" del header del request de su proveedor para fines de prueba.
- __X-VTEX-API-AppToken__: introduzca el valor de "PROVIDER-API-AppToken" del header del request de su proveedor para fines de prueba.

<div class="alert alert-warning">
  Su proveedor debe esperar los headers: <strong>X-VTEX-API-AppKey</strong> y <strong>X-VTEX-API-AppToken</strong>. Estas combinaciones son las credenciales que identifican al administrador de la tienda. El gateway almacena las credenciales de los administradores de las tiendas y otros parámetros que se usan en la configuración de la afiliación, los cuales se enviarán al proveedor en las transacciones.
</div>

![Payment Provider Test Suite 0](//images.ctfassets.net/alneenqid6w5/3V1eMOFEQ8Mg4ygC46G4AY/15d41dae35aaa91f3dd9b55e1bdcee1f/Payment_Provider_Test_Suite_0.jpg)

#### Tests

Después de revisar todos los campos, haga clic en el botón __CHECK URL__.

El sistema verificará los métodos de pago por medio de una llamada al endpoint __/manifest__ de su proveedor. Vea la referencia de la API [aquí](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest).

Tras la llamada, se identificarán los endpoints de las operaciones disponibles en el proveedor y se habilitarán automáticamente las pruebas respectivas de cada operación.

Puedes seleccionar qué pruebas realizar, pero  para que nuestro equipo apruebe el análisis de la integración, __se deben realizar todas las pruebas habilitadas automáticamente__. Por lo tanto, recomendamos que se mantengan seleccionadas todas las pruebas.

![Payment Provider Test Suite 1](//images.ctfassets.net/alneenqid6w5/5LROAprSeFd1O64M2WCisC/af4e2408feb2d1e5dfb9b9bac7067f6d/Payment_Provider_Test_Suite_1.jpg)

### 4. Pruebas
Al hacer clic en el botón __RUN TESTS__, el proveedor de pagos aplicará las pruebas en su integración para los diferentes escenarios posibles. Es importante recordar que, para ejecutarlas, su servicio debe estar en HTTPS. Las pruebas son:

- __Authorize__: esta prueba se divide en tres etapas. En la primera, enviamos un pedido de _Create Payments_ a `{{ServiceURL}}/payments`, esperando como respuesta el status _approved_. En la segunda, un request de _Settle Payment_ se envía a `/payments/{PAYMENT_ID}/settlements` y esperamos una respuesta con el _settleId_ rellenado. Por último, enviamos un request de _Refund Payment_ a `/payments/{PAYMENT_ID}/refunds`, esperando una respuesta con _refundId_ rellenado.

- __Denied__: En esta prueba, enviamos un pedido de _Create Payments_ a `{{SERVICEURL}}/payments`, esperando como respuesta el status _denied_.

- __Cancel__: para esta prueba, primero necesitamos el status _approved_ como respuesta al request de _Create Payments_ a `{{ServiceURL}}/payments`. Luego enviamos un request de _Cancel Payment_ a `/payments/{PAYMENT_ID}/cancellations` y esperamos una respuesta con el status _cancelled_.

- __AsyncApproved__: esta prueba se divide en dos etapas. En la primera, enviamos un pedido de _Create Payments_ a `{{ServiceURL}}/payments`, esperando como respuesta el status _undefined_. Entonces, esperamos recibir en hasta 15 segundos la misma respuesta, pero con status _approved_ en un POST en la URL enviada en el campo _callbackUrl_. Una vez que la integración está en producción, esta última llamada hecha por callbackUrl se autentifica con las claves del ambiente del socio: _vtex-app-key_ y _vtex-app-token_.

- __AsyncDenied__: a ejemplo del anterior, esta prueba también se divide en dos etapas. En la primera, enviamos un pedido de _Create Payments_ a `{{ServiceURL}}/payments`, esperando como respuesta el status _undefined_. Entonces, esperamos recibir en hasta 15 segundos la misma respuesta, pero con status _denied_ en un POST en la URL enviada en el campo _callbackUrl_. Una vez que la integración está en producción, esta última llamada hecha por callbackUrl se autentifica con las claves del ambiente del socio: _vtex-app-key_ y _vtex-app-token_.

- __BankInvoice__: En esta prueba, enviamos un request de _Create Payments_ a `{{SERVICE}}/paid`, esperando que la respuesta venga con el status _undefined_ y el campo `bankIssueInvoiceUrl` venga rellenado con la URL del boleto. Después, esperamos recibir en hasta 15 segundos la misma respuesta, pero con status _approved_ en un POST en la URL enviada en el campo _callbackUrl_. Cuando la integración está en producción, esta última llamada hecha por callbackUrl será autenticada con las claves del ambiente del socio: _vtex-app-key_ y _vtex-app-token_.

- __Redirect__: esta prueba se divide en dos etapas. En la primera, enviamos una petición de _Create Payments_ a `{{ServiceURL}}/payments`, esperando que la respuesta venga con el status _undefined_ y el campo `redirectUrl` sea rellenado con la URL que va a ser usada para redirigir el cliente. Entonces, esperamos recibir en hasta 15 segundos la misma respuesta, pero con status _approved_ en un POST en la URL enviada en el campo _callbackUrl_. Cuando la integración está en producción, esta última llamada hecha por callbackUrl será autenticada con las claves del ambiente del socio: _vtex-app-key_ y _vtex-app-token_. Para el conector que usará Redirect, no es necesario pasar todas las pruebas de Test Suit, solo la Redirect.

<div class="alert alert-warning">
En el caso de las tarjetas de crédito, las pruebas obligatorias son: <strong>Authorize</strong>, <strong>Denied</strong>, <strong>Cancel</strong>, <strong>AsyncApproved</strong> y <strong>AsyncDenied</strong>.
</div>

<div class="alert alert-info">
Para cada prueba con tarjetas de crédito, enviamos un número específico para devolver la respuesta esperada. Son ellos:<br>
<strong>Respuesta con status approved:</strong> tarjeta numero 4444333322221111<br>
<strong>Respuesta con status denied:</strong> tarjeta numero 4444333322221112<br>
<strong>Respuesta con status undefined y retorno en el callbackUrl con status approved:</strong> tarjeta numero 4222222222222224<br>
<strong>Respuesta con status undefined y retorno en callbackUrl con status denied:</strong> tarjeta numero 4222222222222225<br>
</div>

### 5. Resultados
Después de ejecutar las pruebas, el sistema devuelve los resultados, tanto positivos como negativos. El sistema también trae la información de los resultados esperados para cada prueba. Así, usted tiene más visibilidad de lo que debe ser ajustado en caso de error.

![Payment Provider Test Suite 2](//images.ctfassets.net/alneenqid6w5/6o9b9Wz3tSKiU6mwEssEgs/38e5f5d1391d10ca831eba5682c5544b/Payment_Provider_Test_Suite_2.jpg)

Para visualizar de forma detallada cada acción realizada por la integración (y, así, identificar posibles errores), basta con hacer clic en el botón __TRY LOADING AGAIN?__. Una lista con la información completa de los eventos que ocurrieron durante la prueba se mostrará por debajo de los resultados.

![Payment Provider Test Suite Logs](//images.ctfassets.net/alneenqid6w5/3FCFc1FA7L6ILyXB8NSmA3/12a0a237d1c8725b8eeb9bb61eb48fbc/Payment_Provider_Test_Suite_Logs.jpg)

![Payment Provider Test Suite 3](//images.ctfassets.net/alneenqid6w5/7svc9sEJaMiwsYK0ykU0SS/590453ef17cda1dab3b1bb4342f1d9d1/Payment_Provider_Test_Suite_3.jpg)

Cuando su integración ha pasado todas las pruebas con éxito, sólo tiene que abrir un ticket en el [help de VTEX](/es/support "VTEX Help") informando la conclusión. Sin embargo, antes de abrir el ticket, asegúrese de tener la siguiente información:

- __Connector Name__: una descripción del proveedor. Utilice un máximo de 16 caracteres alfanuméricos. Este nombre no se puede cambiar una vez publicado.
- __Partner contact__: correo electrónico del partner en caso de que sea necesario comunicar cambios y novedades de nuestro protocol.
- __Production Service Provider Endpoint__: la ruta base que se utilizará para las llamadas API al proveedor, por ejemplo, _https://vtex.pagseguro.com_. Debe responder a la ruta `{{serviceUrl}}/manifest`. Este endpoint debe estar disponible públicamente. 
- __Sandbox Service Provider Endpoint__: la ruta base que se utilizará en el modo de prueba para las llamadas API al proveedor. Por ejemplo: _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: el nombre de la cuenta VTEX que se utilizará en las solicitudes de devolución de llamada. Esta cuenta debe estar disponible en _{account}.myvtex.com_. 
- __Allowed Accounts__: informar qué cuentas VTEX de este proveedor estarán disponibles (todas las cuentas o cuentas específicas).
- __New Payment methods__: informar si este conector admite un método de pago que aún no está disponible en VTEX Admin. 
- __New Payment method purchase flow__: si se admite un "Nuevo método de pago", indique si funciona con el Redirect o Payment App. Para más información acceda [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

<div class="alert alert-warning">
El SLA requerido para que el equipo de pagos realice la homologación es de 30 días. Este plazo comenzará solo después de la presentación del documento <b>Master Partner Agreement for Financial Services (MPA)</b>. Para las solicitudes de aprobación sin utilizar el MPA, el plazo del SLA puede extenderse debido a la necesidad de un análisis adicional por parte del equipo de pago.
</div>

## Flujo del protocolo de pago
Aquí vamos a explicar el flujo de pago integrado en detalle. La siguiente imagen muestra todo el flujo, mostrando VTEX Payments y las responsabilidades de su proveedor.

Todo comienza con la solicitud de un nuevo pago, después de la creación de un nuevo pedido. VTEX crea una nueva representación del pago y avanza para el procesamiento de los pagos.

![fluxo-atualizado-ppp](//images.ctfassets.net/alneenqid6w5/7lQZhSFEff1iaN7t2UVVNE/2890bc7073210c268d7d429d0162c9b7/FLUXO1.png)

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
