---
title: 'Configurar logística para Mercado Libre'
id: 4551ZlEQI8qmiSWieigoKy
status: PUBLISHED
createdAt: 2018-08-13T12:53:57.008Z
updatedAt: 2024-08-19T17:36:50.573Z
publishedAt: 2024-08-19T17:36:50.573Z
firstPublishedAt: 2018-08-13T14:27:58.483Z
contentType: trackArticle
productTeam: Channels
slugEN: setting-up-the-logistics-for-mercado-livre
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

La configuración de la logística para atender los pedidos realizados en Mercado Libre tiene algunas particularidades, principalmente porque es Mercado Libre quien determina el tipo de envío que su tienda debe configurar.

Esta elección se produce en función del acuerdo comercial que su tienda tiene con Mercado Libre y de su ubicación y experiencia como seller. Por lo tanto, debe consultar a Mercado Libre para saber qué tipo de modalidad de envío debe configurar en su tienda

Las modalidades de envío son dos:

- [Mercado Envíos 1 (ME1)](#mercado-envios-1-me1)
- [Mercado Envíos (ME2)](#mercado-envios-2-me2)

<div class="alert alert-warning">
Debes tener un SLA configurado en VTEX independientemente de la modalidad de envío que utilizas en tu tienda. Si no se configura la modalidad, los pedidos realizados en Mercado Libre no se integrará a la plataforma VTEX.
</div>

## Mercado Envíos 1 (ME1)

La modalidad de envío ME1 está pensada para productos que pesen más de 30 kg o midan más de 200 cm en total, sumando altura, anchura y longitud, o cuando uno de los lados del producto supere los 70 cm.

Los *sellers* que deseen utilizar este formato, deben ponerse en contacto con su consultor de Mercado Libre, que analizará si el *seller* cumple los criterios necesarios para la activación de esta modalidad.

En Mercado Envíos (ME1), el sellar se encarga de todo el ciclo de envío del producto al cliente. No es necesario enviar una factura a Mercado Libre, pero si desea enviarla, puede configurarla en el facturador de Mercado Libre. De este modo, se emitirá una factura cada vez que se facture su producto en la plataforma. 

En esta modalidad de envío, sus anuncios no tendrán tanta relevancia en las búsquedas de Mercado Libre.  

En ME1, la cotización del flete puede hacerse de dos maneras: 
- [Plantilla de flete](#plantilla-de-flete)
- [Flete dinámico](#flete-dinamico)

### Plantilla de Flete

El seller es responsable de enviar una [plantilla de flete](/es/tutorial/planilha-de-frete--tutorials_127) en formato Excel a su consultor comercial de Mercado Libre. 

### Flete Dinámico

En VTEX, los sellers configuran las opciones y los valores de flete a través de las [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140). El flete dinámico es una configuración de Mercado Envíos 1 (ME1) que tiene la función de verificar en tiempo real los mejores precios y condiciones de envío para los usuarios, a partir de la información registrada en las políticas de envío en VTEX.    

Mercado Libre realiza simulaciones de flete en tiempo real en el momento del cierre de  la compra, y casi simultáneamente, VTEX proporciona una URL donde Mercado Libre hace un *request* para obtener la información de flete que se mostrará en la plataforma en el momento de la compra.

#### Configuración de flete dinámico

Para activar la configuración de flete dinámico, es necesario enviar la siguiente URL a su representante comercial de Mercado Libre solicitando la liberación de esta funcionalidad, para que se pueda realizar la configuración.

`https://portal.vtexcommercestable.com.br/api/meliintegration/freight`

## Mercado Envíos 2 (ME2)

En la modalidad de envío ME2, la entrega del pedido es responsabilidad de Mercado Libre. Mercado Libre prepara la etiqueta de envío, y el seller es responsable de imprimir la etiqueta y enviar el paquete.

El rastreo es realizado íntegramente por Mercado Libre, a través de una transportadora predefinida para cada lugar, por lo que el seller no tendrá que preocuparse de elegir la transportadora y gestionar el rastreo.

Algunos tipos de logística tienen la obligación de enviar una factura o configuración del facturador. En ME2, hay 5 tipos de logística, y están determinados por su acuerdo comercial, su ubicación y su experiencia como seller en Mercado Libre. Estos son:

- [Drop Off](#drop-off)
- [Crossdocking (Coleta)](#crossdocking-colectas)
- [Places](#places)
- [Flex](#flex)
- [Mercado Envíos Full](#mercado-envios-full)

<div class="alert alert-info">
Para segmentar qué tipo de envío utiliza la tienda, es necesario crear un <a href="https://help.vtex.com/es/tutorial/campos-customizaveis-de-produto--6tJOSJ2o9phVIb8XXG6QSk"><i>atributo de producto</i></a> con el nombre <code>meli_shipping_mode</code>, donde estará completado si es ME1 o ME2.
</div>

### Drop Off

Siempre que usted se inicia como vendedor en Mercado Libre, comienza con el *Drop Off*, este tipo de logística es utilizado por todos los clientes que están comenzando a vender en Mercado Libre.

Cuando se cierra el pedido en Mercado Libre, se envía una etiqueta al seller, que contendrá la dirección de entrega del pedido. El seller tiene que imprimir esta etiqueta, pegarla en el paquete del pedido y enviarlo a una oficina de correos. 

El envío del código de rastreo al cliente, las actualizaciones de status y cualquier problema que pueda ocurrir son responsabilidad de Mercado Libre.

Todos los ajustes se realizan dentro de la plataforma de Mercado Libre.

### Crossdocking (Colectas)

El *Crossdocking o Colecta*, es el tipo de envío en el que un camión de recolección de Mercado Libre pasa por las [tiendas físicas vinculadas](https://envios.mercadolibre.com.ar/agenciesList/showAgenciesMap) a Mercado Libre todos los días a una hora programada y recoge los pedidos de los clientes.

Cuando el pedido se cierra en Mercado Libre, se envía una etiqueta al seller. El seller tiene que imprimir esa etiqueta, pegarla en el paquete del pedido y esperar a que el camión lo recoja.

Tras la recolección, los pedidos se envían a un Centro de Distribución de Mercado Libre donde se procesan y se elige la mejor transportadora para enviar el pedido.

Todos los ajustes se realizan dentro de la plataforma de Mercado Libre.

### Places

En el tipo de envío *Places*, el seller envía el pedido etiquetado a la agencia de Mercado Libre más cercana, el camión de recolección recoge los pedidos en la agencia diariamente y los envía a un centro de distribución de Mercado Libre.

En el centro de distribución se procesa el pedido y se elige la mejor transportadora para enviar el pedido.

Todos los ajustes se realizan dentro de la plataforma de Mercado Libre.

### Flex

En el tipo *[Flex](https://envios.mercadolibre.com.ar/mercado-envios-flex)*, el seller se encarga de etiquetar y enviar el producto a un entregador. La contratación del servicio de entregas es responsabilidad del seller y es necesario que el entregador utilice la aplicación de Mercado Libre para que se pueda hacer un seguimiento del pedido.

Todos los ajustes se realizan dentro de la plataforma de Mercado Libre.

<div class="alert alert-info">Esta modalidad solo está disponible para los pedidos realizados en la misma ciudad que el seller.</div>

### Mercado Envios Full

[Mercado Envíos Full](https://envios.mercadolibre.com.ar/mercado-envios-full) es un servicio ofrecido por Mercado Libre en el que el almacenaje y el envío de los productos al consumidor final está bajo la responsabilidad del Mercado Libre. Cada vez que se completa una venta, los productos comprados se separan, embalan y envían en un plazo de 24 horas.

Puede integrar este servicio a su tienda a través del [registro de un stock](/es/tutorial/gerenciar-estoque) destinado exclusivamente para Mercado Envíos Full. Esa integración permite hacer seguimiento al nivel del stock, ya que la cantidad de productos se actualiza automáticamente a medida que se realizan las ventas mediante Mercado Libre Full.

<div class="alert alert-danger">
Si el vendedor elige el modelo logístico <b>Mercado Envíos Full</b>, es necesario seguir el siguiente orden de configuración: <p><ol><a href="#configurando-el-modelo-de-envio">Configurar modelo de envío</a> <br><a href="#configurar-mercado-envios-full">Configurar Mercado Envíos Full</a></br></ol></p>
</div>

#### Configurando Mercado Envíos Full

Para configurar, realice los siguientes pasos: 

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío > Almacenes**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página, y haz clic en *Almacenes*.  
2. [Registra](/es/tutorial/gerenciar-estoque) un stock.   
3. Seleccione la pestaña **Almacenes** y copie el ID del stock que desea utilizar.  
4. Accede en **Marketplace > Marketplace e Integraciones.**
3. Haz clic en la integracion con Mercado Libre y seleccione la opción `Editar configuración`.  
6. Ingrese el ID del stock seleccionado en el campo **Almacén Mercado Full**.  
7. Para finalizar, haga clic en `Guardar Configuración`.  

## Configurando el modelo de envío
Después de definir qué modelo de envío se utilizará para la integración de tu tienda con Mercado Libre, es necesario configurar en la integración si se utilizará el ME1 o el ME2. Para esto, debes seguir los siguientes pasos, **crear un campo personalizable de producto** y **llenarlo**.  

Para crear un campo de producto, sigue las instrucciones del tutorial [Registrar especificaciones o campos de producto](/pt/tutorial/criando-um-campo-de-produto--tutorials_106).  

<div class="alert alert-warning">
 El nombre del campo creado debe ser "meli_shipping_mode" y el valor del campo debe ser completado como "me1" o "me2". Si el nombre del campo o el valor es diferente, la integración no reconocerá el atributo. 
</div>

## Cómo consultar las facturas de Mercado Libre mediante API

Las facturas de los pedidos de [Mercado Envíos Full](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full) emitidas por Mercado Libre pueden consultarse mediante nuestras llamadas de API. Para consultar la factura emitida por Mercado Libre para el pedido, debes utilizar la llamada de API [Get Order](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder). 

Se pueden emitir dos tipos de facturas para cada pedido: la factura y la factura simbólica (utilizada para los ítems devueltos). Mira en qué campos del cuerpo de la respuesta de la llamada de API puedes encontrar información sobre las diferentes facturas:

- **Factura:** en el objeto `embeddedInvoice` puedes encontrar el archivo XML de la factura.  
- **Factura simbólica:** el archivo XML no se incluye en el cuerpo de la respuesta. Consulta los campos `invoiceKey`, `invoiceNumber` e `issuanceDate` para obtener los datos básicos de la factura simbólica.
