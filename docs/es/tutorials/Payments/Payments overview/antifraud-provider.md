---
title: 'Cómo funciona el protocolo de integración entre VTEX y empresas de antifraude'
id: 4aZtmdpgFikcsQomWyqAOq
status: ARCHIVED
createdAt: 2018-05-08T20:11:35.705Z
updatedAt: 2023-02-02T21:41:15.348Z
publishedAt: 
firstPublishedAt: 2018-05-15T01:34:18.545Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: antifraud-provider
locale: es
legacySlug: antifraud-provider
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

## ¿Qué es el Antifraud Provider Protocol?

El Antifraud Provider Protocol es el protocolo de integración entre VTEX y empresas que realizan servicios de antifraude.

Por medio de él, VTEX ofrece un contrato público disponible para todos los proveedores que desean integrarse a nuestra plataforma. Así, los proveedores ganan más autonomía en relación a la integración.

El protocolo cuenta con los siguientes recursos:
- Procesamiento del análisis de riesgo síncrono y asíncrono.
- Webhook para la notificación de status.

Usted puede encontrar referencias a la API del protocolo [aquí](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

## Conceptos
__Provider__: sistema de antifraude o proveedor que ofrece este tipo de servicio.

__Antifraud Provider Protocol__: protocolo de integración desarrollado por VTEX.

__Conector__: nombre del proveedor asociado de integración con VTEX.

## Primeros pasos
A continuación, vamos a presentar paso a paso las informaciones referentes a la integración de pagos con VTEX.

### 1. Fase comercial
El primer paso es el contacto comercial con VTEX, que debe ser hecho por [nuestro sitio web](http://partner.vtex.com). Una vez finalizado el acuerdo comercial, el proveedor se registra y recibe un correo electrónico con los datos de acceso al ambiente del proveedor de antifraude, donde podrá realizar las configuraciones y pruebas necesarias.

### 2. Implementación del protocolo
Antes de configurar el ambiente VTEX, el proveedor debe implementar el servicio de back-end necesario para procesar el antifraude (API). Más información acerca de la API del protocolo [aquí](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

### 3. Portal de administración del Antifraud Provider
Después de recibir los datos de acceso e implementar el back-end, el proveedor puede acceder a la herramienta de aprobación a través del Admin de VTEX. Para ello, debe instalar el App del Antifraud Provider en el menú Apps:

![print5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_1.png)

Haga clic en la App instalada o acceda a `https://{{AccountName}}.myvtex.com/admin/antifraud-provider`, sustituyendo `{{AccountName}}` por el nombre de su cuenta en la plataforma. En este ambiente, es posible registrar los datos de configuración de back-end del proveedor y realizar pruebas de integración.

![print6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_2.png)

### 4. Configuración inicial
![print1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_3.png)

Al acceder al ambiente por el enlace descrito arriba, usted verá un formulario. Rellene los campos de acuerdo con las siguientes indicaciones:

- __Connector Name__: rellene el nombre que desea dar a su conector dentro de VTEX. Este campo se puede editar siempre que sea necesario.

- __Service URL__: defina la URL de su proveedor de servicios. Esta dirección URL será la dirección base del protocolo y debe seguir el formato determinado por él. Por ejemplo, si la dirección URL del servicio es *http://10.10.10.10*, la dirección URL completa para el endpoint */transactions* será *http://10.10.10.10/transactions*.

- __Application Key__: introduzca el valor de "X-PROVIDER-API-AppKey" del header del pedido de su proveedor para fines de prueba.

- __Application Token__: introduzca el valor de "X-PROVIDER-API-AppToken" del header del pedido de su proveedor para fines de prueba.

<div class="alert alert warning">
Es importante recordar que toda la comunicación HTTPS debe ser sobre TLS 1.2 exclusivamente.
</div>

<div class="alert alert warning">
Su proveedor debe esperar dos headers: <strong>X-PROVIDER-API-AppKey</strong> y <strong>X-PROVIDER-API-AppToken</strong>. Esta combinación debe identificar un merchant. Todas las configuraciones que necesitan ser hechas por el merchant deben persistir en su proveedor. La única configuración que VTEX guarda con respecto a los merchants es la combinación de credenciales X-PROVIDER-API-AppKey y X-PROVIDER-API-AppToken.
</div>

Después de llenar los campos correctamente, el sistema comprobará las transacciones aprobadas a través de una llamada al endpoint __*/transactions*__ de su proveedor. Consulte la referencia a la API [aquí](https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow).

Las pruebas que se deben realizar en su integración antes de mandarla para la evaluación de VTEX se muestran abajo. Usted puede seleccionar qué pruebas desea ejecutar, pero para que su integración pase por el análisis de nuestro equipo, __todas ellas necesitan ser realizadas__. Por lo tanto, recomendamos que todos ellos permanezcan seleccionados.

![print2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_4.png)

### 5. Pruebas
Al hacer clic en el botón __Execute tests__, el Antifraud Provider aplicará las pruebas en su integración para los diferentes escenarios posibles. Es importante recordar que __todos ellos son obligatorios__ y, para ejecutarlos, su servicio necesita estar en HTTPS. Las pruebas son:

- __Authorize__: esta prueba se realiza en dos etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. A continuación, enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _approved_.

- __Denied__: a ejemplo de la anterior, esta prueba también se realiza en dos etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. A continuación, enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _denied_.

- __AsyncApproved__: esta prueba se divide en tres etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. Entonces enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _undefined_. Por último, después de 10 segundos, enviamos un request de _Get Anti-defraud Status_ (con el mismo Transaction ID generado en el primer paso) a `{{ServiceURL}}/transactions/transactionId`, pero esta vez esperando en la respuesta el status _approved_.

- __AsyncDenied__: a ejemplo de la anterior, esta prueba también se divide en tres etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. Entonces enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _undefined_. Por último, después de 10 segundos, enviamos un request de _Get Anti-defraud Status_ (con el mismo Transaction ID generado en el primer paso) a `{{ServiceURL}}/transactions/transactionId`, pero ahora esperando en la respuesta el status _denied_.

- __HookApproved__: esta prueba se divide en cuatro etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. A continuación, enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _undefined_. Entonces, esperamos 10 segundos que el proveedor del antifraude haga un POST en la URL enviada en el campo _hook_ del primer paso (en el contenido del POST debe estar la respuesta obtenida en ese mismo paso). Por último, enviamos un request de _Get Anti-corrupto Status_ (con el mismo Transaction ID generado en el primer paso) a `{{ServiceURL}}/transactions/transactionId`, esperando en la respuesta el status _approved_.

- __HookDenied__: a ejemplo de la anterior, esta prueba también se divide en cuatro etapas. En primer lugar, necesitamos el status _received_ como respuesta al request de _Send Antifraud Data_ para `{{ServiceURL}}/transaction`. A continuación, enviamos un request de _Get Antifraud Status_ (con el Transaction ID generado en el paso anterior) a `{{ServiceURL}}/transactions/transactionId`, esperando como respuesta el status _undefined_. Entonces, esperamos 10 segundos que el proveedor del antifraude haga un POST en la URL enviada en el campo _hook_ del primer paso (en el contenido del POST debe estar la respuesta obtenida en ese mismo paso). Por último, enviamos otro request de _Get Antifraud Status_ (con el mismo Transaction ID generado en el primer paso) a `{{ServiceURL}}/transactions/transactionId`, esperando en la respuesta el status _denied_.

<div class="alert alert info">
Para cada prueba del Antifraud Provider Protocol, enviamos un final de ID específico para devolver la respuesta esperada. Son ellos:<br>
<strong>Authorize:</strong> ID con final 1<br>
<strong>Denied:</strong> ID con final 2<br>
<strong>AsyncApproved:</strong> ID con final 3<br>
<strong>AsyncDenied:</strong> ID con final 4<br>
<strong>HookApproved:</strong> ID con final 5<br>
<strong>HookDenied:</strong> ID con final 6<br>
</div>

### 6. Resultados
Después de ejecutar las pruebas, el sistema devuelve los resultados, tanto positivos como negativos. El sistema también trae la información de los resultados esperados para cada prueba. Así, usted tiene más visibilidad de lo que debe ser ajustado en caso de error.

![print3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_5.png)

Para visualizar de forma detallada cada acción realizada por la integración (y, así, identificar posibles errores), basta con hacer clic en el enlace __Show logs__. Una lista con la información completa de los eventos que ocurrieron durante la prueba se mostrará por debajo de los resultados.

![print4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_6.png)

Cuando su integración ha pasado todas las pruebas con éxito, sólo tiene que abrir un ticket en el [help de VTEX](/es/support) informando la conclusión. Sin embargo, antes de abrir el ticket, asegúrese de tener la siguiente información:

- __Connector Name__: una descripción del proveedor. Utilice un máximo de 16 caracteres alfanuméricos. Este nombre no se puede cambiar una vez publicado.
- __Partner contact__: correo electrónico del partner en caso de que sea necesario comunicar cambios y novedades de nuestro protocol.
- __Production Service Provider Endpoint__: la ruta base que se utilizará para las llamadas API al proveedor, por ejemplo, _https://vtex.pagadito.com_. Debe responder al menos a una de las siguientes rutas: `{{serviceUrl}}/manifest` or `{{serviceUrl}}/payment-methods`. TEste endpoint debe estar disponible públicamente. 
- __Sandbox Service Provider Endpoint__: la ruta base que se utilizará en el modo de prueba para las llamadas API al proveedor. Por ejemplo: _https://sandboxserviceproviderendpoint.com_. 
- __Owner account__: el nombre de la cuenta VTEX que se utilizará en las solicitudes de devolución de llamada. Esta cuenta debe estar disponible en _{account}.myvtex.com_. 
- __Allowed Accounts__: informar qué cuentas VTEX de este proveedor estarán disponibles (todas las cuentas o cuentas específicas).
- __New Payment methods__: informar si este conector admite un método de pago que aún no está disponible en VTEX Admin. 
- __New Payment method purchase flow__: si se admite un "Nuevo método de pago", indique si funciona con el Redirect o Payment App. Para más información acceda [Purchase Flows](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows).

El SLA requerido para que el equipo de pagos realice la homologación es de 30 días.

## Credenciales VTEX
Al llamar a `CallbackURL`, usted debe especificar los headers de autenticación, que en VTEX son el _X-VTEX-API-AppKey_ y el _X-VTEX-API-AppToken_. Puede encontrar estas credenciales en el módulo License Manager de VTEX. Estas credenciales son usadas por el Antifraud Provider únicamente.

Utilice la URL `https://{{AccountName}}.myvtex.com/admin/license-manager/#/home`, sustituyendo el `{{AccountName}}` por su nombre de cuenta. Entonces, siga las instrucciones de [este tutorial](https://help.vtex.com/es/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) para aprender a crear appKeys y appTokens en nuestra plataforma.

## Configuración en las tiendas VTEX
Una vez que la integración con su antifraude está aprobada, un conector se pondrá a disposición para que las tiendas VTEX lo configuren en sus respectivos sitios web. Para hacer esto, además del contrato con su empresa, la tienda deberá tener en las manos dos claves: "X-PROVIDER-API-AppKey" y "X-PROVIDER-API-AppToken".

Un ejemplo de cómo va a quedar la pantalla de configuración del antifraude para la tienda VTEX:
![print8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/antifraud-provider_7.png)

Estas llaves deben estar disponibles por usted y van a servir para identificar la tienda que ha contratado y está utilizando su servicio de antifraude.

## Configuración del documento del titular de la tarjeta
Durante el proceso de revisión de las transacciones de pago, algunos proveedores antifraude pueden optar por no utilizar información adicional como: la identificación personal del titular de la tarjeta. En estos casos, el administrador de la tienda tiene autonomía para decidir si solicita o no esta información a su cliente durante el proceso de checkout.

>⚠️ La opción de configuración **Campo de documento del titular de la tarjeta** solo estará disponible para el administrador de la tienda, si el provedor antifraude declara el campo del documento del titular de la tarjeta (`cardholderDocument`) como `opcional` em su [manifesto](https://developers.vtex.com/vtex-rest-api/reference/manifest). Mas información en [Cardholder Document Configuration](https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration).

Para configurar la visualización del campo del documento del titular de la tarjeta, siga los siguientes pasos:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __`+`__.
5. Seleccione el proveedor antifraude que desea utilizar.
6. En la pantalla de configuración antifraude, complete la información solicitada.
7. En __Campo de documento del titular de la tarjeta__, seleccione una de las seguientes opciones:

    - __Mostrar como campo obligatorio__: el campo se mostrará al finalizar la compra con la información “obligatorio” y el cliente debe completar la información del titular de la tarjeta para completar el pedido.
    - __Mostrar como campo opcional__: el campo se mostrará al finalizar la compra com la información “opcional” y el cliente decidirá si completa o no el campo. El pedido se puede completar incluso si el campo no se completa.
    - __Ocultar campo__: el campo no se mostrará al finalizar la compra.

<ui>
  8. Haga clic en <b>Guardar.</b>
  </ui>

Después de seguir los pasos indicados, las configuraciones realizadas anteriormente pueden tardar hasta 10 minutos en aparecer en el checkout de su tienda.
