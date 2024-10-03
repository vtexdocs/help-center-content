---
title: 'Configurar la integración de Amazon'
id: 5J9CWPIbYQdAegJJWGsxan
status: PUBLISHED
createdAt: 2019-02-28T23:11:28.346Z
updatedAt: 2023-09-22T20:17:01.064Z
publishedAt: 2023-09-22T20:17:01.064Z
firstPublishedAt: 2019-02-28T23:12:37.347Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-amazon-integration
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugES: integracion-de-amazon
---

Una vez que haya completado los pasos para configurar su tienda en VTEX y Amazon, debe configurar la integración entre las dos. La configuración de la integración se realiza en el Admin de VTEX. Para configurarla, siga las instrucciones a continuación.

1. Vaya al Admin VTEX.
2. En el módulo *MARKETPLACE*, haga clic en **Integraciones**.
3. Seleccione la opción **Configuración**.
4. En la tarjeta de Amazon, haga clic en `Integrar`.
5. Rellene los campos según se describen a continuación y haga clic en `Guardar configuración`. Los campos marcados con el símbolo * son obligatorios.

- **Afiliate Id*:** código de identificación para crear un [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado) que aún no está registrado en tu sistema. El código debe estar compuesto por tres consonantes, repetidas o no. No se aceptan vocales. Sugerencia: MZN. La configuración del conector crea el afiliado automáticamente.
- **Afiliate Email*:** ingrese un email para el afiliado que se está creando.
- **Sales channel*:** es la [política comercial](https://help.vtex.com/es/tracks/amazon-integration-setup--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definir-la-politica-comercial-en-amazon) que definirá el surtido del catálogo y los valores de los ítems que se enviarán a Amazon. 
- **Amazon Seller Id*:** ingrese el **ID del vendedor** proporcionado por Amazon en la etapa de [autorización de VTEX en el panel de Amazon](https://help.vtex.com/es/tracks/configurar-la-integracion-de-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf). 
- **Amazon Auth Token*:** ingrese el **Token de autorización de MWS** proporcionado por Amazon en la etapa de [autorización de VTEX en el panel de Amazon](https://help.vtex.com/es/tracks/configurar-la-integracion-de-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf). 
- **Minimum inventory*:** es la cantidad mínima de stock de seguridad. Si la cantidad de ítems de un producto en stock está por debajo de la cantidad introducida, su anuncio se pone en pausa para evitar que se realicen ventas sin stock durante el tiempo de actualización de Amazon por parte de VTEX. La cantidad mínima de stock se aplica a todos los productos, por lo que debe verificar si algún producto podría dejar de anunciarse debido a su stock inicial.
- **Name for the type of freight:** nombre del tipo de entrega registrado en la plataforma de Amazon. Este nombre de tipo de entrega se encuentra en `Configuración de envíos` en la sección **Modelo de envío**, debajo de *Modelo estándar de Amazon*.
- **Default Zip Code:** Rellene este campo con un código postal de su elección para activar la funcionalidad. Se utilizará para garantizar la reserva de stock y los SLA de los pedidos pendientes. Esta funcionalidad permite que los pedidos de Amazon con status `Pendiente` reserven su stock en VTEX para evitar la falta de stock cuando se apruebe el pedido en Amazon. Si el pedido se cancela en Amazon, la reserva de stock existente en VTEX para este pedido se cancelará.
- **Don’t send the variations of SKUs:** Actualmente, no es posible enviar los SKU consolidados a Amazon. Esta opción solo debe utilizarse para las tiendas del sector de Papelería y Materiales de Oficina. Si su tienda pertenece a este sector, le recomendamos que seleccione la opción *ON*. 
- **Don’t send price to Amazon:** Amazon le ofrece la posibilidad de utilizar su sistema para parametrizar los precios de los productos. Para utilizar este servicio, marque la opción *ON* para que la integración no envíe los precios de VTEX. Si los precios se envían a través de la integración, sobrescribirán los precios en el sistema de Amazon.
- **Send KIT*:** si selecciona *No*, los SKU [registrados como kit](https://help.vtex.com/es/tutorial/cadastrando-kit--tutorials_215) no se envían a Amazon. Si selecciona Sí, todos los ítems de su política comercial se enviarán al marketplace, incluso los SKU registrados como kit. Se pueden realizar cambios en la configuración del conector en cualquier momento, sin afectar a los SKU que ya han sido enviados. Por ejemplo, si cambiara la configuración de *Sí* a *No*, los SKU enviados anteriormente a Amazon no se eliminarían ni modificarían.

>ℹ️ Si se activa la opción <i>No</i>, los intentos de enviar SKU registrados como kit a Amazon resultarán en la siguiente advertencia: «El conector está configurado para no enviar SKU del tipo Kit». Este mensaje se puede ver en el Admin VTEX, en el módulo **MARKETPLACE > Integraciones > Productos**, haciendo clic en el SKU.

- **Notify by email if an error occurs in an order:** ingrese el email del responsable técnico. Si se produce algún error al integrar el pedido, se enviará un mensaje a la dirección de email registrada. 

<div class="alert-info">
Si la configuración tiene éxito, el código del SKU integrado aparecerá en el Admin de VTEX con la letra «p» al final.  Ejemplo: SKU 13737p.
Esto se produce por defecto. La letra «p» funciona como el identificador de envío de un producto. El SKU solo se integra si el producto también se integra. Se trata de un comportamiento esperado en el proceso de integración con Amazon.
</div>

