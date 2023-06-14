---
title: 'Entrega programada'
id: 22g3HAVCGLFiU7xugShOBi
status: PUBLISHED
createdAt: 2021-04-19T13:26:44.564Z
updatedAt: 2021-10-27T16:49:43.778Z
publishedAt: 2021-10-27T16:49:43.778Z
firstPublishedAt: 2021-05-24T17:01:23.885Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: entrega-programada
legacySlug: entrega-programada, como-se-maneja-la-entrega-programada
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---


La funcionalidad de entrega programada permite que defina periodos de entrega para que el consumidor pueda elegir el mejor día y horario para recibir los productos adquiridos.

Los periodos de entrega que están disponibles para los clientes se denominan ventanas de entrega y están directamente relacionados con las políticas de envío de su tienda. Es decir, para ofrecer el servicio de entregas programadas, debe considerar si la política de envío lo incluye.

En caso de que la política de envío ofrezca el servicio, puede habilitar la entrega programada configurando las ventanas de entrega y estableciendo la capacidad de realización de entregas para cada ventana, si así lo desea.

La entrega programada se habilita a través del campo Entrega programada que se muestra en la pantalla de creación o edición de [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140). 

Una vez que habilite la funcionalidad __Entrega programada__ en Política de envío, puede configurar los campos que determinarán cómo esta funcionará. Estos campos definen el [tiempo máximo de entrega](#tiempo-maximo-de-entrega), el [periodo de entrega](#periodo-de-entrega) y el [límite de la capacidad de entrega](#capacidad-de-entrega).

Lea el artículo Política de envío para saber cómo crear una nueva política. 

## Tiempo máximo de entrega

El tiempo máximo es el mayor periodo de tiempo que la política de envío emplea para realizar una entrega programada entre la confirmación del pedido y la confirmación de la entrega.

El tiempo máximo se configura a través del campo Tiempo máximo de entrega de la ventana de entrega programada, en el cual deberá definir cuántos días puede haber entre la confirmación del pedido y la confirmación de la entrega.

## Periodo de entrega

El periodo de entrega, también denominado ventana de entrega, especifica los periodos de funcionamiento de la política de envío, es decir, los horarios en que se envía paquetes a los clientes.

Los periodos/ventanas se definen a partir de las horas de inicio y fin de la operación para cada día de la semana. Además, puede definir un valor adicional para el flete en determinados días de la semana. 

<div class="alert alert-info">
Una entrega de entrega no está disponible para su selección después de que ha iniciado. Solo estarán disponibles para los clientes las ventanas de entrega cercanas (aún no iniciadas).
</div>

## Capacidad de entrega

Definir la capacidad de entrega le permite limitar el número de ítems o pedidos que se pueden entregar en cada ventana de entrega, con la finalidad de que gestione mejor sus entregas programadas. 

Cuando el cliente finaliza la compra y selecciona la entrega programada, las opciones de fecha y hora que se muestran consideran la capacidad de entrega. De esta forma, el cliente solo podrá programar las entregas en las ventanas que aún tienen disponibilidad de 1 ítem o pedido. 

<div class="alert alert-info"> 
Si la ventana alcanza la capacidad total de ítems/pedidos, ya no se podrá elegir. Para que la ventana vuelva a estar disponible, debe aumentar el número de ítems/pedidos de la capacidad de entrega. Esto se puede realizar editando una <a href="https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140">Registrar política de envío</a>.
</div>
Lea el artículo [Gestionar capacidad de entrega](https://help.vtex.com/es/tutorial/gerenciar-capacidade-de-entrega--2y217FQZCjD0I1n62yxVcz) para saber más.

