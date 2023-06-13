---
title: Información disponible dentro del pedido
id: tutorials_197
status: DRAFT
createdAt: 2017-04-27T22:14:25.383Z
updatedAt: 2023-03-23T15:47:38.588Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:47.961Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: informaciones-dentro-del-pedido
legacySlug: informaciones-dentro-del-pedido
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Cuando un cliente hace clic en el botón __Comprar__ de su tienda, inmediatamente, un pedido se abre en Gestión de pedidos - el módulo de VTEX responsable de la visualización y gestión de sus pedidos. En el Gestión de pedidos varias informaciones se visualizan y están disponibles para consulta. Para facilitar su entendimiento, vea el detalle de cada área:

## Datos del cliente

Las informaciones mostradas en el card, CPF para cliente y CNPJ para empresa, además de e-mail y teléfono, son su forma de identificar el cliente.

El botón __Reenviar el último email__, cuando se acciona, vuelve a enviar la última comunicación hecha con el cliente por correo electrónico. Para asegurarse de que correo se trata, usted puede ver todos en el área __Línea de tiempo__ al final de la página.

En la plataforma VTEX también existe una funcionalidad para unificar la comunicación por e-mail con el cliente, el [Conversation Tracker](/es/tutorial/conversation-tracker).

Todos los datos del cliente se insertar en el momento del cierre del pedido y no se pueden cambiar aquí. Para ver y administrar estos datos, usted puede utilizar Master Data.

## Valor total

Se muestran los detalles de los valores del pedido, como descuentos, flete, valor del producto, cupón, etc.

La flecha en la esquina superior derecha indica que el card tiene otras informaciones, como promociones y parcero referentes a ese pedido.

## Estado del pedido

Es el status actual del pedido. Los siguientes status son posibles:

- Esperando la confirmación del Seller
- Procesando
- Pago pendiente
- Esperando autorización del pedido
- Pago aprobado
- Pago negado
- Solicitar cancelación
- Aguardando decisión del seller
- Esperando autorización para despachar
- Error al crear el pedido
- Carencia para la cancelación
- Preparado para manejo
- Iniciar manejo
- Preparando entrega
- Cancelación solicitada
- Factura después de la cancelación denegada
- Verificando envío
- Facturado
- Cancelar
- Cancelado

## Flujo de pedido

Puede visualizarse a través de Diagramas o Interacciones. La primera exhibición es recomendada para que usted tenga una visión del todo, y la segunda para encontrar algún error o detalle epecífico.

Para consultar todos los pasos del flujo de pedidos, vea este artículo que explica el [flujo de pedido en el OMS](/es/tutorial/flujo-de-pedido-en-el-oms).

## Items para facturar

Muestra información relacionada con los items de pedido del cliente. Es posible modificar la factura cambiando estos items. Sin embargo, se recomienda mucha atención al hacer esta acción.

El botón __Facturar pedido__ envía la documentación fiscal de la compra al e-mail del cliente y debe ser accionado sólo cuando toda la transacción ya está aprobada.

**Dirección de entrega** se refiere a las informaciones acerca de la entrega del pedido. Esta información se ha introducido en el momento del cierre del pedido y no puede modificarse. Al igual que los datos de clientes, los datos de entrega se pueden ver y administrar en el Master Data.

## Pago

Resumen de la información relativa al pago del pedido.

## Línea de tiempo

Muestra el historial de correos electrónicos enviados al cliente durante el proceso de compra.

### Artículos relacionados
- [¿Qué es Master Data?](/en/tutorial/que-es-master-data)
- [Flujo de pedidos en el OMS](/es/tutorial/flujo-de-pedido-en-el-oms)
- [De/para de estados de pedidos](/es/tutorial/tabla-de-estados-de-pedidos-oms--frequentlyAskedQuestions_773)
