---
title: 'Configurar pago con MercadoPagoV2'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2024-08-26T15:35:49.762Z
publishedAt: 2024-08-26T15:35:49.762Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-mercadopagov2-sub-acquirer
legacySlug: configurar-el-subadquirente-mercadopagov2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible integrarse con el proveedor de pagos MercadoPagoV2. A través de él, tu tienda podrá recibir pagos mediante métodos tradicionales, como: boleto, PIX, tarjetas de débito y crédito, así como a través de métodos exclusivos de Mercado Pago, como: MercadoPagoOff, MercadoPagoPro y MercadoPagoWallet.

Para configurar MercadoPagoV2 sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __MercadoPagoV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta MercadoPagoV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor MercadoPagoV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Periodo de vencimiento__ del ticket, elija el número de días (contados desde la creación del boleto) que tendrá su cliente para realizar el pago.
8. En __Nombre de la tienda__, ingrese el nombre de su empresa.Recuerde que esta es la información que se describirá en el campo Beneficiário en el boleto o en la factura de la tarjeta del cliente.
9. En __Cuotas máximas__, escoja la cantidad máxima de cuotas enviadas a  Mercado Pago.
10. En __Soporte 3DS 2.0__, seleccione "Sí" si desea habilitar la validación de seguridad 3DS. Para que este protocolo funcione correctamente, asegúrese de que la __Mercado Pago Payment app__ ya esté instalada en su tienda y que el campo __Binario__ (paso 14) esté seleccionado como __No__.
11. En __Categoría principal de la tienda__, elija la categoría de la industria de su tienda.
12. En __Categoría (tienda o producto) compartida por transacción__, selecciona si deseas compartir datos de tienda o categoría de producto con Mercado Pago en cada transacción.
13. En la opción __Reembolso automático / manual__, elija si se reembolsará al cliente automáticamente o manualmente en caso de cancelación del pedido.
14. En __Modo binario__, indicar si la tienda debe aceptar pagos pendientes. Seleccionar "Sí" indica que el proceso de aprobación del pago se produce instantáneamente y puede aprobarse o rechazarse. Seleccionar "No" define que el pago puede permanecer en estado "pendiente" (si requiere alguna acción por parte del comprador) o "en proceso" (si se requiere revisión manual).
15. En __Métodos de pago excluidos__, describe los métodos de pago que no deseas utilizar a través de MercadoPagoV2 (opcional). Si opta por dejar este campo en blanco, todos los métodos de pago disponibles de MercadoPagoV2 estarán disponibles en su tienda.
16. En __Tipos de pago excluidos__,  describe las banderas específicas de crédito y débito (Visa, Mastercard, etc) que no deseas utilizar a través de MercadoPagoV2 (opcional). Si opta por dejar este campo en blanco, todos los tipos de pago disponibles de MercadoPagoV2 estarán disponibles en su tienda.
17. En __Modo de procesamiento__, escoja cómo quiere usar MercadoPagoV2: como subadquirente o gateway. Para más información, visite [¿Qué es un subadquirente?](/es/tutorial/que-es-un-subadquirente--64aX6PeRQQ66O8uCqo0W4q) y [¿Qué es un gateway de pagos?](/es/tutorial/que-es-un-gateway-de-pagos--2KH9Wdi7F6swOU4amECSOk). 
18. En la opción __Integrator ID__, indique el código identificador del desarrollador o agencia que realiza la configuración de Mercado Pago.
19. En la opción __Moneda__, elija si la moneda utilizada para el pago será "Local" (cada país) o "Dólar estadounidense" (USD).
20. El campo __Merchant Account ID__ identifica la cuenta del merchant. No es necesario llenarlo.
21. En __Plazo de captura de pagos aprobado__, seleccione la fecha límite deseada para la captura de pago.
22. En __Fecha para cancelar compras de un carrito abandonado__, la cantidad de tiempo que se debe esperar hasta que los métodos de pago habilitados ya no estén disponibles para realizar la compra.
23. Haga clic en __Guardar__.

## Configurar condiciones de pago

Para configurar los métodos de pago predeterminados a procesar por MercadoPagoV2, acceda a [Configurar condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456).

## Configurar métodos de pago únicos

Para saber cómo configurar métodos de pago exclusivos de pagamento do Mercado Pago,  acceda a [configurar Mercado Pago Offline y Wallet como métodos de pago](/es/tutorial/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

Para más información sobre la integración con Mercado Pago, acceda al [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/es/guides/plugins/unofficial/vtex/gateway-affiliations).
