---
title: 'Módulos de VTEX II'
id: 3MYcZaojb5HSUg6ufm6GxQ
status: CHANGED
createdAt: 2024-02-07T13:20:33.477Z
updatedAt: 2024-02-22T17:08:09.649Z
publishedAt: 2024-02-22T14:07:12.569Z
firstPublishedAt: 2024-02-22T14:07:12.569Z
contentType: trackArticle
productTeam: Others
slugEN: vtex-modules-ii
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: serie-de-la-tienda-vtex
---

Además de los módulos abordados en el artículo anterior, como [Catálogo](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Precios](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precios), [Promociones](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#promociones) y [Logística](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica), la plataforma VTEX cuenta con otros módulos necesarios para el funcionamiento de la tienda. Este artículo presenta una visión general y las principales configuraciones de los siguientes módulos:

- [Pagos](#pagos)
- [Pedidos](#pedidos)
- [Checkout](#checkout)

## Pagos

El módulo [Pagos](https://help.vtex.com/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB) de VTEX se encarga de coordinar todas las operaciones financieras que se realizan en una tienda. Configurándolo, puedes especificar qué proveedores, medios y condiciones de pago se ofrecerán a los clientes en el checkout, además de revisar la información sobre las transacciones de pago realizadas para cada pedido.

### Antes de comenzar en Pagos

Para procesar y recibir los pagos de las compras realizadas en una tienda VTEX, es necesario contratar los servicios de uno o más proveedores de pago. Este contrato se realiza directamente entre el retailer y el proveedor respectivo, sin intervención ni participación de VTEX. Accede a la [Lista de proveedores de pago](https://help.vtex.com/es/tutorial/lista-de-proveedores-de-pago-por-pais--2im3BEGXxSAcRuxEaIHPvp) para consultar la disponibilidad de proveedores en VTEX en cada país.

<div class="alert alert-warning">
Recomendamos integrar más de un proveedor de pago en tu tienda para proporcionar una experiencia óptima al cliente al ofrecer diversos medios y condiciones de pago. Esto permite operar con diferentes tarifas y costos, mejorando el desempeño del negocio.
</div>

Los ajustes de pago descritos en esta serie pueden realizarse en cualquier momento durante el proceso de onboarding. No obstante, para que la tienda pueda realizar cualquier tipo de transacción relacionada con pagos, es necesario que previamente se hayan configurado los módulos [Catálogo](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Precios](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precios) y [Logística](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica).

### Cómo funciona Pagos

La siguiente tabla muestra los principales agentes y términos utilizados en el contexto de este módulo:

| **Término** | **Descripción** |
| :---: | :--- |
| **Gateway** | Sistema responsable de procesar la información de pago de una compra en el checkout. |
| **Adquirente** | Empresa que procesa pagos con tarjeta de crédito y débito. |
| **Subadquirente** | Empresa que procesa pagos y actúa como intermediaria entre adquirentes, proveedores antifraude y retailers. |
| **Red de la tarjeta** | Empresa responsable de definir las reglas de negocio aplicadas a las tarjetas de crédito y débito. |
| **Emisor de la tarjeta** | Institución financiera responsable de autorizar un medio de pago, como tarjeta de crédito o débito. |
| **Proveedor de pago** | Empresa que ofrece soporte para transacciones electrónicas en distintos medios de pago. |
| **Proveedor de antifraude** | Empresa responsable de realizar análisis de riesgos en las operaciones con tarjetas de crédito y débito. |
| **Payment Provider Protocol** | Protocolo de comunicación de un proveedor de pago empleado para la transmisión de datos relacionados con el pago. Para más información sobre la integración de proveedores de pago en VTEX, consulta [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). |
| **Medios de pago** | Métodos utilizados por el cliente para pagar una compra, como tarjetas de crédito, débito o carteras digitales. |
| **Condiciones de pago** | Reglas establecidas para un determinado medio de pago, por ejemplo, número máximo de cuotas permitidas e intereses aplicados. |

### Flujos de pago y transacciones

Cuando se finaliza una compra en VTEX, se crea una nueva transacción y se inicia el flujo de pago. El siguiente ejemplo muestra el flujo de pago para una compra realizada con tarjeta de crédito:

![payments-es](//images.ctfassets.net/alneenqid6w5/5QPFkvZhpZzRWuq15zlMoz/1a6dd2fc04096a775c1208ff0e20088a/payments_image1_ES.JPG)

A medida que la información se transmite entre los agentes encargados de procesar los datos, el status de la transacción del pago se actualiza para indicar en qué etapa del flujo se encuentran los recursos. Para ilustrar el flujo de pago con tarjeta de crédito, tenemos el siguiente ejemplo de status de la transacción:

![payments-flow-es](//images.ctfassets.net/alneenqid6w5/6fsbJZ07a18ea8I1pk7UFo/4d17ee553dfe4fadfdc59a502339159e/payments_image2_ALL.JPG)

Consulta más información sobre cada paso en el artículo [Flujo de la transacción en Pagos](https://help.vtex.com/es/tutorial/flujo-de-la-transaccion-en-pagos--Er2oWmqPIWWyeIy4IoEoQ). Para acceder a más información sobre transacciones en el Admin VTEX, consulta el artículo [Ver detalles de la transacción](https://help.vtex.com/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy).

### Configurar pagos en la tienda

Tras establecer el contrato con un proveedor de pago, debes configurarlo y definir los medios y condiciones de pago que estarán disponibles en el checkout de la tienda.

#### Activar un proveedor de pago

Es necesario activar los proveedores de pago en la tienda a fin de permitir la transmisión y recepción de la información esencial para completar las transacciones de pago. Para activar cada proveedor deben seguirse los pasos a continuación:

1. Accede a la [Lista de proveedores de pago por país](https://help.vtex.com/es/tutorial/lista-de-proveedores-de-pago-por-pais--2im3BEGXxSAcRuxEaIHPvp).
2. Selecciona el proveedor deseado haciendo clic en el respectivo link en la tabla.
3. En el Admin VTEX, configura el proveedor según las instrucciones descritas en el artículo de configuración.

<div class = "alert alert-info">
También se puede acceder a los artículos de configuración de proveedores escribiendo el nombre del proveedor deseado en la barra de búsqueda del <a href="https://help.vtex.com/es/">Help Center</a>.
</div>

#### Definir medios y condiciones de pago

Tras habilitar el proveedor de pago, debes configurar los medios y condiciones de pago que dicho proveedor procesará. Sigue los pasos a continuación para realizar este procedimiento:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pagos > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haz clic en el botón **+**.
3. Haz clic en el nombre del medio de pago que desees.
4. Si lo deseas, puedes cambiar el nombre del medio de pago en el campo **Nombre de la condición**.
5. Activa la opción **Status**.
6. En **Procesar con proveedor** selecciona el nombre del proveedor de pago.
7. Si deseas utilizar un sistema antifraude, selecciona la opción **Utilizar antifraude**. Más información en [Configurar un proveedor antifraude (opcional)](#configurar-proveedor-antifraude).
8. Si el medio de pago elegido permite definir pagos en cuotas, selecciona la opción **En cuotas** en **¿Al contado o en cuotas?**, e ingresa la información deseada. Más información en [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455).
9. Si lo deseas, también puedes configurar condiciones de pago especiales. Más información en [Agregar condiciones especiales de pago](#agregar-condiciones-especiales-de-pago).
10. Haz clic en `Guardar`.

### Ajustes opcionales en Pagos

También puedes realizar los siguientes ajustes de pago opcionales según el perfil operacional de la tienda:

- [Agregar condiciones especiales de pago](#agregar-condiciones-especiales-de-pago)
- [Configurar medios de pago personalizados](#configurar-medios-de-pago-personalizados)
- [Configurar proveedor antifraude](#configurar-proveedor-antifraude)
- [Crear tarjetas de regalo](#crear-tarjetas-de-regalo)           
- [Activar carteras digitales](#activar-carteras-digitales)
- [Customer Credit.](#customer-credit)

#### Agregar condiciones especiales de pago

Las condiciones especiales de pago permiten definir reglas específicas para un determinado medio de pago, como fecha de vencimiento, emisor de la tarjeta, política comercial, condición comercial y el nombre de la cuenta. 

Para obtener más detalles sobre cada tipo de condición especial de pago, consulta el artículo [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).

#### Configurar medios de pago personalizados

En VTEX se pueden configurar los siguientes medios de pago personalizados:

- **Pagarés**: compromiso de pago entre el retailer y el cliente sobre el valor de una compra. Para autorizar la transacción de compra se requiere la aprobación manual del retailer. Más información en [Configurar pagos con pagarés](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

- **Tarjetas de tienda (red propia)**: tarjeta de crédito o débito emitida en asociación entre una empresa y una red de tarjetas (Visa, Mastercard, entre otras). Solo puede utilizarse para compras en establecimientos que formen parte de la red del emisor de la tarjeta. Más información en [Configurar pagos con private label (red propia)](https://help.vtex.com/es/tutorial/configurar-pagos-con-private-label--428FgVdSGQUeAOoogkaIw4).

- **Tarjetas de tienda (cobranded)**: tarjeta de crédito o débito de marca propia, emitida para uso exclusivo en compras realizadas en la empresa emisora de la tarjeta. Más información en [Configurar pagos con tarjeta de tienda (cobranded)](https://help.vtex.com/es/tutorial/configurar-pagos-con-tarjeta-de-tienda-cobranded--jrkLK41IjuquUmyKUi86Q).

#### Configurar proveedor antifraude

También pueden configurarse proveedores antifraude en la tienda para analizar los pagos con tarjeta de crédito y débito, siempre que exista un contrato entre el retailer y el proveedor. Su uso es recomendable, pero opcional.

Para consultar los proveedores antifraude actualmente integrados en VTEX, escribe el nombre del proveedor deseado en la barra de búsqueda del [Help Center](https://help.vtex.com/es/) o accede al Admin VTEX, tal y como se describe en el artículo [Configurar el antifraude](https://help.vtex.com/es/tutorial/como-configurar-antifraude--tutorials_446).

#### Crear tarjetas de regalo

Las tarjetas de regalo, también conocidas como gift cards o vouchers, pueden utilizarse en las tiendas VTEX como medio de pago o programa de fidelidad.

VTEX cuenta con su propio proveedor de tarjetas de regalo, lo que posibilita la creación y gestión de estas tarjetas mediante el Admin VTEX o la API de Gift Card. Consulta más información sobre las características de creación de los dos métodos en [GiftCard API](https://developers.vtex.com/docs/api-reference/giftcard-api).

Además, también es posible ofrecer tarjetas de regalo de proveedores externos a través de la [API de GiftCard Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api). Para utilizar un proveedor externo de tarjetas de regalo es necesario contar con un contrato establecido con dicho proveedor y verificar que ya esté integrado en VTEX. Más información en los artículos [Configurar tarjeta de regalo](https://help.vtex.com/es/tutorial/gift-card--tutorials_995) y [Gift Card system architecture](https://developers.vtex.com/docs/guides/gift-card-integration-guide-system-architecture).

#### Activar carteras digitales

Las carteras digitales proporcionan entornos seguros para almacenar de manera encriptada los datos bancarios y de tarjetas de crédito, a los cuales los clientes pueden acceder al realizar una compra. La seguridad de este medio de pago reside en la eliminación de la necesidad de completar todos los datos en el checkout en cada compra. Solo se requiere la autenticación en el propio entorno de la cartera digital.

En VTEX, se pueden ofrecer carteras digitales nativas, como [Google Pay](https://help.vtex.com/es/tracks/cartera-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT), o integradas, como [Apple Pay](https://help.vtex.com/es/tracks/cartera-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/STKWiXJSR9ImPt5EEC2aL), [Samsung Pay](https://help.vtex.com/es/tutorial/configurar-samsung-pay-como-meio-de-pagamento--5Yj9rgzOCVYuGmAumQlfpP) y [PayPal](https://help.vtex.com/es/tutorial/configurar-paypal--4p3sD9u1moq2Aya2oc684w). Más información en [Cartera digital (ewallet)](https://help.vtex.com/es/tracks/cartera-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/7jLbdfch9Oe2yYbQa9zwE1).

#### Customer Credit

Customer Credit es la solución de VTEX que posibilita la oferta de crédito a clientes específicos, brindándoles la opción de pagar sus compras en un periodo de tiempo más extenso. Esta aplicación proporciona acceso a la gestión de clientes, la configuración de plazos y cuotas, definición de crédito y seguimiento del status de las facturas emitidas, entre otras funcionalidades.

Para más información, consulta [Customer Credit - Visión general](https://help.vtex.com/es/tutorial/customer-credit-vision-general--1uIqTjWxIIIEW0COMg4uE0) y [Customer Credit - Cómo empezar](https://help.vtex.com/es/tracks/customer-credit-como-empezar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).

## Pedidos

Cuando el cliente finaliza la compra se genera un [pedido](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE) en VTEX. Los pedidos pueden gestionarse a través del Admin VTEX, en **Pedidos > [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-los-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**, accediendo a una [página de detalles](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl) de la compra, o a través de API. En la guía [Orders](https://developers.vtex.com/docs/guides/orders-overview) los desarrolladores pueden consultar una visión general de contenido sobre [Orders API](https://developers.vtex.com/docs/api-reference/orders-api#overview).

### Antes de comenzar en Pedidos

Para que la tienda pueda gestionar los pedidos recibidos la plataforma VTEX no requiere configuraciones obligatorias, y ofrece varias [configuraciones opcionales](#ajustes-opcionales-en-pedidos) que pueden resultar estratégicas para diferentes modelos de negocio.

Sin embargo, para que el cliente pueda realizar una compra y generar un pedido, la tienda necesita tener productos registrados y con precio, ofrecer [medios de pago](https://help.vtex.com/es/tutorial/diferencia-entre-medios-de-pago-y-condiciones-de-pago--3azJenhGFyUy2gsocms42Q) y garantizar el envío del pedido. Esto implica que deben realizarse ajustes en los siguientes módulos:

- [Catálogo](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo)
- [Precios](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precios)
- [Logística](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica)
- [Pagos](#pagos)

### Integración de pedidos

Es habitual que las tiendas deseen [integrar sus pedidos](https://developers.vtex.com/docs/guides/erp-integration-guide) a sistemas como ERP (Enterprise Resource Planning) y WMS (Warehouse Management System). La [implementación del backend](https://help.vtex.com/en/tracks/serie-general-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) permite a la tienda automatizar algunas acciones en el procesamiento de pedidos, como:

- Recibir notificaciones del progreso de los pedidos y su status en el [flujo de pedidos](https://help.vtex.com/es/tutorial/flujo-y-status-de-pedidos--tutorials_196).
- Obtener información sobre los pedidos que deben ser alistados y empacados.
- Enviar la [factura](https://help.vtex.com/es/tutorial/como-facturar-manualmente-un-pedido--7p1h852V5t54KyscpgxE2v) a la plataforma VTEX, que la remitirá al cliente.
- Realizar [cambios de ítems](https://help.vtex.com/es/tutorial/cambiar-items-de-un-pedido-finalizado--tutorials_190) en el pedido.

Existen dos formas diferentes de monitorear los cambios de status de los pedidos, el [feed](https://developers.vtex.com/docs/guides/orders-feed) o el [hook](https://developers.vtex.com/docs/guides/orders-feed#hook). Consulta más información sobre integración de pedidos en el artículo [Integraciones de backend](https://help.vtex.com/en/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

### Gestionar pedidos

En el Admin VTEX, en **Pedidos > [Todos los pedidos](https://help.vtex.com/es/tutorial/todos-los-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**, pueden realizarse las siguientes acciones:

- Ver una lista de todos los pedidos de la tienda.
- Acceder a la información de compra en la [página de detalles](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl) haciendo clic en el pedido.

En la página de detalles del pedido, también puede monitorearse la información del [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196). La imagen siguiente ilustra un ejemplo del flujo cuando la tienda actúa simultáneamente como marketplace y seller:

![order-flow-es](//images.ctfassets.net/alneenqid6w5/5ObTRbhlsYxoaW0Lzw7RmS/7cb86712ed404f7ae9a8d804820ae673/pedido_fluxo_completo_es.png)

Para ubicar el registro de una compra en el Admin VTEX, además de poder [filtrar pedidos](https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192) en la página **Todos los pedidos**, existe la opción de buscar a través de la barra de búsqueda global, presente en todas las páginas del Admin VTEX. Para realizar la búsqueda solo hay que seleccionar la opción `Pedidos` en la esquina derecha de la barra de búsqueda y utilizar cualquiera de los siguientes valores:

- ID del pedido
- Nombre del cliente
- Email del cliente
- Documento del cliente

<div class="alert alert-warning">
Solo se puede acceder a la información de los pedidos creados en los dos últimos años. Este mismo periodo es aplicable para que los clientes accedan a sus pedidos a través de <a href="">Mi cuenta</a>.
</div>

VTEX proporciona dos funcionalidades importantes para que los clientes de la tienda puedan hacer un seguimiento de sus pedidos: [emails transaccionales](#emails-transaccionales) y el espacio de los clientes denominado [Mi Cuenta](#funcionalidad-mi-cuenta).

#### Emails transaccionales

VTEX ofrece de forma nativa el envío de [emails transaccionales](https://help.vtex.com/es/tutorial/understanding-the-message-center--tutorials_84), para que la tienda pueda enviar emails automáticos al cliente informándole de las actualizaciones del pedido. En resumen, a medida que el pedido avanza en el flujo de procesamiento, el cliente puede recibir notificaciones por email, lo que le permite realizar un seguimiento de eventos como la aprobación del pago y el envío del pedido.

La plataforma ofrece una serie de [plantillas de emails transaccionales](https://help.vtex.com/es/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my), pero también se puede personalizar la comunicación. La siguiente lista ofrece la información principal sobre estas configuraciones opcionales, que son independientes entre sí:

- **Alias:** email alternativo generado automáticamente por la plataforma VTEX para [enmascarar](https://help.vtex.com/es/tutorial/configuracoes-gerais--tutorials_194#tipo-de-mascara-de-conversa) el email del cliente en los emails transaccionales de la tienda. Este [tipo de máscara de la conversación](https://help.vtex.com/es/tutorial/configuracoes-gerais--tutorials_194#tipo-de-mascara-de-conversa) representa una mayor protección para los datos del cliente, ya que el email alternativo se crea de forma que no sea legible por sistemas externos.
- **Availability Notify o Avísame**: configuración del botón [Avísame](https://help.vtex.com/es/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) en la página de producto visto por el cliente en el sitio web de la tienda. El botón se hace visible cuando un producto no está disponible, permitiendo al cliente ingresar su email en el campo correspondiente para recibir una notificación cuando el producto vuelva a estar disponible para su compra.

#### Funcionalidad Mi cuenta

[Mi cuenta](https://help.vtex.com/es/tutorial/como-funciona-mi-cuenta--2BQ3GiqhqGJTXsWVuio3Xh) es la solución que garantiza a los clientes de la tienda autonomía en el seguimiento de sus pedidos y en la actualización de sus datos personales. Es un entorno exclusivo para cada cliente, al que se accede mediante nombre de usuario y contraseña.

Una de las ventajas de **Mi cuenta** es que la funcionalidad hace que la comunicación entre el cliente y la tienda sea más directa, además de permitir al cliente realizar acciones como pedir nuevamente o cancelar el pedido. Una comunicación más eficaz tiende a reducir la necesidad de atención al cliente, lo que a su vez supone un ahorro de costos para la tienda.

### Ajustes opcionales en Pedidos

La siguiente tabla muestra algunos ajustes adicionales para el módulo Pedidos:

| **Funcionalidad** | **Descripción** |
| :---: | :--- |
| Suscripciones | [Suscripciones](https://help.vtex.com/es/tutorial/como-funciona-suscripciones--frequentlyAskedQuestions_4453) es un programador automático de pedidos para facilitar a los clientes de la tienda la realización de compras recurrentes. El cliente indica los ítems que desea comprar y la frecuencia con que deben realizarse pedidos automáticos.<br><br>[Configurar Suscripciones](https://help.vtex.com/es/tutorial/como-configurar-suscripciones--1FA9dfE7vJqxBna9Nft5Sj) es especialmente interesante para modelos de negocio como supermercados y tiendas de productos para mascotas, donde los clientes consumen los mismos productos de forma habitual. |
| Televentas | La solución de [televentas](https://help.vtex.com/es/tutorial/funcionalidades-de-televentas--UqhiccIRIK2KD0OqkzJaS) permite al equipo de atención al cliente de la tienda una mayor autonomía para prestar servicio a los clientes. Al [configurar las funcionalidades de televentas](https://help.vtex.com/es/tutorial/como-configurar-las-funcionalidades-de-televentas--76FNgQP2Glc4umMJ5Yr50R) se habilita a los operadores de la tienda para realizar tareas como:<br><br>- Comprar en nombre de un cliente.<br>- Ajustar manualmente el precio de los ítems de un carrito.<br>- Modificar pedidos existentes.<br>- Gestionar la información del perfil de un cliente en [Mi cuenta](#funcionalidad-mi-cuenta). |
| Divergencia de precios | En las [estrategias de marketplace](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-en-vtex--tutorials_402) de la tienda en el ecosistema VTEX, puede darse el caso de que el precio fijado por el seller sea diferente del precio ofrecido por el marketplace. Las promociones existentes en el marketplace, por ejemplo, pueden tener un impacto en el precio que el seller fijó para la venta de su producto.<br><br>Para evitar errores en el procesamiento de los pedidos, el seller VTEX puede [configurar reglas de divergencia de precios](https://help.vtex.com/es/tutorial/configuracion-de-regla-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) y establecer parámetros para autorizar automáticamente los pedidos con esta diferencia de precio entre seller y marketplace. Al crear reglas automáticas para aprobar o rechazar pedidos con divergencias de precios, la tienda evita tener que procesar manualmente cada ítem, logrando así una operación más eficiente. |

Más información en [Configuraciones generales de los pedidos](https://help.vtex.com/es/tutorial/configuraciones-generales--tutorials_194).

## Checkout

El checkout es la etapa final en el proceso de compras online y contribuye de manera significativa para una buena tasa de conversión de ventas. En el contexto de la plataforma VTEX, el módulo [Checkout](https://help.vtex.com/es/tutorial/checkout-vtex-vista-general--7wcprkM7yZUflOqbzAN5SI) desempeña algunas funciones esenciales:

* Informar sobre el precio y la disponibilidad de los productos en la vitrina.
* Agregar ítems y procesar el carrito.
* Completar el proceso de finalización de compra. 

### Antes de comenzar en Checkout

Para garantizar el correcto funcionamiento del checkout, los siguientes módulos deben ser debidamente configurados en la tienda: [Catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR), [Logística](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx), [Precios](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Pagos](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#) y [Pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE).

![checkout-es](//images.ctfassets.net/alneenqid6w5/57AJQIGKk5fuwN8SRMenM0/2c7ccff2d662fb9bff20c549819f1576/checkout_image_ES.jpg)

Este intercambio de información permite procesar datos sobre disponibilidad, precios, promociones aplicables, métodos de envío y medios de pago.

### Personalizar el checkout de la tienda

Las personalizaciones que se describen a continuación son opcionales y tienen por objeto mejorar el desempeño del checkout. Antes de proceder con la configuración, se sugiere realizar un análisis para identificar los módulos aplicables al perfil operacional de la tienda.

- [Optimización de opciones de entrega en el checkout](#optimizacion-de-opciones-de-entrega-en-el-checkout)
- [Carrito abandonado](#carrito-abandonado)
- [Modificar el precio de un ítem en el carrito](#modificar-el-precio-de-un-item-en-el-carrito)
- [Valor mínimo por pedido y cantidad máxima de ítems por SKU](#valor-minimo-por-pedido-y-cantidad-maxima-de-items-por-sku)
- [Geolocalización en el checkout](#geolocalizacion-en-el-checkout )
- [Checkout UI Custom app](#checkout-ui-custom-app)

### Optimización de opciones de entrega en el checkout

Una solución que permite activar una combinación de información registrada para mostrar al cliente la opción más rápida y barata del envío de los productos seleccionados en el carrito. Las opciones alternativas (aquellas de mayor costo o con un tiempo de envío más prolongado) no se visualizan en el checkout, proporcionando así una mejor experiencia para el cliente.

Más información en [Optimización de opciones de entrega en el checkout](https://help.vtex.com/es/tutorial/optimizacion-de-opciones-de-entrega-en-checkout--6DeGO9eBSFWe4XkoS0SxAB).

### Carrito abandonado 

Funcionalidad que permite enviar emails a los clientes como recordatorio de un carrito que crearon previamente, pero no se completó la compra.

<div class="alert alert-warning">
Configurar el carrito abandonado durante el onboarding permite que todos los carritos que se creen se envíen nuevamente al cliente, brindándole la oportunidad de evaluarlos y completar la compra.
</div>

Más información en [Configurar carrito abandonado](https://help.vtex.com/es/tutorial/configurar-carrito-abandonado--tutorials_740).

### Modificar el precio de un ítem en el carrito

En la plataforma VTEX, las tiendas tienen la opción de ajustar manualmente el precio de un ítem (SKU) en el carrito de checkout. Esta funcionalidad puede utilizarse para aplicar descuentos especiales, corregir errores de precios, crear ofertas personalizadas, resolver reclamaciones relacionadas con precios o ajustar el costo de envío.

<div class="alert alert-warning">
Solo usuarios con <a href="https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">roles</a> y permisos debidamente registrados en el VTEX Admin pueden realizar este cambio.
</div>

Más información en [Cambiar el precio de un ítem en el carrito de compras](https://help.vtex.com/es/tutorial/cambiar-el-precio-de-un-item-en-el-carrito-de-compras--7Cd37aCAmtL1qmoZJJvjNf).

### Valor mínimo por pedido y cantidad máxima de ítems por SKU

En las operaciones de ecommerce, los costos logísticos asociados al envío de los productos desempeñan un papel importante en el mantenimiento de la competitividad. Estos costes se ven afectados por el valor total del carrito y la cantidad de unidades del mismo SKU que dicho carrito contiene.

La implementación de un valor mínimo del pedido puede mejorar la eficiencia de los sellers que realizan entregas por lotes, evitando pedidos de poco valor o con pocos ítems, que pueden resultar económicamente inviables.

Más información en [Cómo configurar el valor mínimo por pedido y la cantidad máxima de ítems por SKU](https://help.vtex.com/es/tutorial/como-configurar-el-valor-minimo-por-pedido-y-la-cantidad-maxima-de-items-por--7JqipPUBxtKz0m4OlAyKs9).

### Geolocalización en el checkout 

La solución de geolocalización permite a los clientes utilizar Google Maps en la pantalla del checkout de la tienda para definir una ubicación de entrega, en lugar de utilizar el código postal de la dirección. Una vez indicado el punto de entrega, se mostrará el valor del envío del pedido según el valor introducido por el retailer para entregas en la región seleccionada en el mapa (polígonos de coordenadas).

Además de calcular automáticamente el costo del envío, si la tienda ofrece la opción de recogida en tienda, la geolocalización puede ayudar a los clientes a encontrar la tienda más cercana en función de su ubicación actual.

Más información en [Configurar geolocalización en el checkout](https://help.vtex.com/es/tutorial/geolocalizacion-en-el-checkout--tutorials_4345).

### Checkout UI Custom app

Esta aplicación permite aplicar diferentes personalizaciones visuales a la pantalla del checkout de la tienda. 

Más información en [Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom).
