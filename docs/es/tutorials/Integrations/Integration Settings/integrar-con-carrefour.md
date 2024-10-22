---
title: 'Integrar con Carrefour'
id: 1Qgdsh2o0QAocUyoUaSqSW
status: ARCHIVED
createdAt: 2017-05-10T16:54:21.574Z
updatedAt: 2020-03-06T13:56:49.855Z
publishedAt: 
firstPublishedAt: 2017-05-10T19:07:44.997Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integrate-with-carrefour
locale: es
legacySlug: integrar-con-carrefour
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Antes de configurar la integración de su tienda con Carrefour, asegúrese en cuanto a los dos siguientes tópicos:
- **Creación de la tienda en Carrefour**: nada más cerrar el contrato de alianza con Carrefour, solicite la creación de su tienda en Mirakl;
- **Tengo multitienda (tienda A y tienda B)**: para multitienda, es necesario crear dos ambientes en Carrefour, uno para la tienda A y otro para la tienda B. Carrefour posibilita crear sub-tiendas, pero en el desarrollo de la integración, se ha optado por no utilizar ese esquema. Esto fue hecho para evitar que un producto fuera enviado a una tienda y luego, en la plataforma de Carrefour, sea marcado para ser vendido en todas las multitiendas, aun que en la plataforma da VTEX esté configurado para venta solamente en una multitienda. Con ello, evitamos pedidos con error de SKU no-disponible.

Para configurar la integración, primero tome la clave de la API de Mirakl. Esa clave se utiliza en la comunicación entre VTEX y Carrefour.

En el caso de que usted no sepa dónde se encuentra esa clave, haga login en la plataforma de Carrefour con el usuario **Master**.

En la esquina superior derecha, haga clic en el email (es aquél que usted utilizó para logar en Carrefour), y enseguida haga clic en el link **Clave de la Api**, que está en el menú de la parte lateral menu izquierda de la pantalla.

La clave que aparece en la pantalla es el dato que usted necesitará para registrar la integración dentro del módulo Bridge de VTEX.

![Carrefour1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Integrations/Integration Settings/integrar-con-carrefour_1.png)

### Configurando la integración en el Bridge

En la plataforma VTEX, siga los pasos a continuación:

1. Acceda al módulo **Bridge**;
2. Haga clic en la pestaña **Marketplace**;
3. En el card de Carrefour, haga clic en el botón **Integrar**.

Las opciones que aparecen son las siguientes:

- **Integración activa**: Cuando está marcada como “Sí”, activa la exportación de productos, precios, stock, tracking y pedido. Cuando está marcada como “No”, desactiva la integración, borrando el afiliado y los permisos de acceso a Carrefour;
- **Email de notificación**: Email del responsable de hacer seguimiento de la integración de Carrefour;
- **ShopKey**: Clave de acceso generada en el portal de integración de Carrefour;
- **Tasa de divergencia**: Tasa de aceptación de la divergencia de valor en el pedido integrado. Todo pedido que tenga una divergencia entre el precio de venta del Marketplace y el precio que sería calculado por el Seller será comparado con ese valor. Si la divergencia (en porcentaje) es menor que el valor definido en ese campo, el pedido será integrado. De lo contrario el pedido será rechazado, y el comerciante será notificado;
- **Política Comercial**: ID de la política comercial que será utilizada para el aliado.
- **Mapeamento de SLA de tipo Normal:** Aquí se debe insertar el [tipo de transportista](/es/tutorial/como-se-maneja-el-tipo-de-entrega) registrada en VTEX que desea utilizar para la entrega `Normal`.
- **Mapeamento de SLA de tipo Expressa:** Aquí se debe insertar el [tipo de transportista](/es/tutorial/como-se-maneja-el-tipo-de-entrega) registrada en VTEX que desea utilizar para la entrega `Expressa`.
- **Mapeamento de SLA de tipo Econômica:** Aquí se debe insertar el [tipo de transportista](/es/tutorial/como-se-maneja-el-tipo-de-entrega) registrada en VTEX que desea utilizar para la entrega `Economica`.
- **Mapeamento de SLA de tipo Agendada:** Aquí se debe insertar el [tipo de transportista](/es/tutorial/como-se-maneja-el-tipo-de-entrega) registrada en VTEX que desea utilizar para la entrega `Programada`.

>⚠️ Atención: es necesario rellenar al menos uno de los campos del mapeo de SLA. En caso de que ninguno de ellos sea prenchido, no será posible simular el flete en VTEX y, consecuentemente, los pedidos hechos en el Carrefour no serán integrados. Además, tampoco será posible guardar el registro de la integración sin que alguno de los campos esté rellenado.

Una vez terminada la configuración de esa pantalla, haga clic en el botón **Salvar Configuração**.

### Cómo funciona la integración de producto, stock y precio

Carrefour trabaja con integración de producto y ofertas. En el primer caso es enviado un lote con varios productos; en el segundo es enviado un lote con varias ofertas.

Cuando el producto es indexado, una notificación es enviada a la integración de Carrefour, que, al recibirla, la almacena.

De 10 en 10 minutos, es ejecutado un worker, que toma todas las notificaciones y verifica si el producto ya fue catalogado en Carrefour. Si el producto no fue catalogado, la integración envía una notificación de producto (información del producto) y una notificación de oferta (información de precio y stock del SKU).

En el caso de que el producto ya haya sido catalogado, la integración envía solamente una notificación de oferta.

La integración genera un lote de producto y un lote de oferta y envía los dos lotes a Carrefour, que retorna un ID de lote. Los lotes aún serán procesados y será necesario buscar el resultado del procesamiento del lote, para saber si algún producto u oferta tuvo algún error.

Tres minutos después del envío de los lotes, la integración busca el resultado del procesamiento de los lotes para saber qué fue procesado con éxito y qué fue procesado con error. Y después, envía esa información al Bridge.

Un producto que fue procesado con éxito no necesariamente quedará disponible en el site de Carrefour para venta. Todavía existe otro proceso de aprobación del producto, hecho por el equipo de Carrefour.

### Cómo funciona la integración de pedido

Cada 5 minutos la integración busca nuevos pedidos en la API de Carrefour para importarlos para VTEX.

Pedidos que no tengan todavía el pago confirmado en Carrefour no son importados para VTEX, una vez que Carrefour sólo pone a disposición los datos de entrega del pedido después que el pago sea conformado. Para importar el pedido a VTEX es necesario tener la información de entrega.

Cuando la integración busca el pedido en Carrefour, antes de la importación es verificado si los SKUs del pedido están disponibles para venta en la política comercial de Carrefour y si el SKU existe en VTEX, ya que Carrefour permite el registro manual de un SKU en su plataforma. Sin embargo, **no recomendamos el registro manual!**.

Finalmente, es verificado si existe SLA de entrega para el pedido.

Si ocurre algún error en el momento de integrar el pedido, esa información es enviada al Bridge, donde es posible ver el error. Después de realizada la corrección, basta reprocesar el pedido. 

Cuando un pedido es reprocesado, se realizan, como máximo, 5 intentos de integración del pedido con la tienda en el periodo de 15 minutos. O sea, el resultado del reprocesamiento puede tardar hasta 15 minutos para aparecer en el Bridge.

### Información de cancelación de pedido

Carrefour no pone a disposición la cancelación del pedido directamente por la API de integración. Cuando un pedido es cancelado en la tienda, enviamos un mensaje a la API de integración de Carrefour, pero esto **no** significa que el pedido será cancelado. Es necesario ponerse en contacto con Carrefour para confirmar la cancelación del pedido.

### Información de tracking y pedido entregado

La información de **factura**, **tracking number** y **pedido entregado** al cliente es enviada a Carrefour a la medida que llega a la plataforma VTEX.
Para realizar el envío de la información de tracking number y pedido entregado, por ejemplo, es necesario que la información sea enviada al OMS. Solo así la integración podrá notificárselo a Carrefour.

### Consulta de flete

Carrefour permite consultar el flete directamente en VTEX. Para tanto, hay que informar la URL de flete.

URL: http://portal.vtexcommercestable.com.br/api/carrefourintegration/pub/{NOMBREDELATIENDA}/freight
Sustituya {NOMBREDELATIENDA} por el accountname de su tienda en VTEX.

Si usted no informa la URL de flete a Carrefour, éste usará una tabla de flete propia, que probablemente será diferente de aquélla registrada en su tienda en VTEX.
