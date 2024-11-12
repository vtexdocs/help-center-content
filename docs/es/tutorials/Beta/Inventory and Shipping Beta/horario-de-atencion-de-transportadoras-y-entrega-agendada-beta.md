---
title: 'Horario de atención de transportadoras y entrega agendada (Beta)'
id: 5QjTT3ICL2HdEcVIguJiMI
status: ARCHIVED
createdAt: 2021-01-13T19:28:43.514Z
updatedAt: 2021-05-24T17:44:03.764Z
publishedAt: 
firstPublishedAt: 2021-01-13T22:14:49.093Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: carriers-working-hours-and-scheduled-delivery-beta
locale: es
legacySlug: horario-de-atencion-de-transportadoras-y-entrega-agendada-beta
subcategoryId: 32vrn4K2ZscjUaIBe6w5fm
---

El módulo *Inventario y envío* es donde usted realiza toda la gestión de la logística de su tienda. La pestaña *Estrategia de envío* le permite registrar su ruta logística, incluyendo las **Políticas de envío** o transportadoras. Para mejorar la experiencia de usuario del módulo, actualizamos esta funcionalidad.

Algunas secciones de la página de registro **Política de envío** cambiaron, para darle una mayor flexibilidad cuando configure su estrategia de entrega. En la anterior versión, había una sección denominada *Configuración de tiempo*, en la que era posible seleccionar *Horario de operación*, *Horario de corte* o *Entrega agendada* para cada transportadora. 

__Anterior versión__
![ES Configurações de tempo versão antiga](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

En la nueva versión:  
- Cambiamos los nombres de las opciones para que sean más fáciles de entender.   
- Separamos la configuración de Entrega programada en otro espacio, para que pueda configurar esta funcionalidad para su cliente final independientemente de la configuración de tiempo de la transportadora.  
- Añadimos la opción Configurar capacidad de entrega, para que la entrega programada se base en la realidad de su operación.   

__Versión Beta__
![ES Horário de funcionamento transportadora beta](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.jpg)

## Horario de recolección

En la anterior versión de la página, se denominaba *Horario de corte*. A pesar del cambio de nombre a *Horario de recolección*, la funcionalidad sigue siendo la misma: es donde usted registra los horarios en que la transportadora recolecta los paquetes en su almacén o centro de distribución, para posteriormente enviarlos a los clientes finales.

## Periodo de envío

En la anterior versión del módulo, esta configuración se denominaba *Horario de operación*. A pesar del cambio de nombre, el comportamiento de la sección es el mismo: es donde usted registra los periodos de atención de la transportadora, es decir, los horarios en que esta envía paquetes a los clientes. 

Al igual que en la versión anterior, no es posible configurar las opciones de *Periodo de envío* y *Horario de recolección* al mismo tiempo. Seleccione la opción que mejor se adecua a la operación de la transportadora registrada, y a su estrategia de envío.

## Entrega programada

Esta funcionalidad se denominaba *Entrega agendada* en la anterior versión y ahora se denomina *Entrega programada*. Además, antes solo era posible optar por esta funcionalidad omitiendo la configuración de *Horario de operación*. Sin embargo, ahora es posible configurar *Entrega programada* junto con la opción *Horario de atención* para que su cliente elija este método de entrega durante el checkout del pedido. Vea los campos que se deben completar para configurar esta opción.

**Versión Beta**
![ES entrega agendada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.jpg)

- **Tiempo máximo de entrega**:  este campo se debe completar de acuerdo con su operación logística. Defina cuál es el mayor periodo de tiempo que la transportadora emplea para realizar una entrega programada, desde la confirmación del pedido hasta la confirmación de la entrega.
- **Configurar capacidad de entrega**: dependiendo de las características de su operación y de cómo la transportadora envía sus productos, puede tener más sentido definir la capacidad de entrega en número de ítems o en número de pedidos. Por ejemplo, si su tienda es del segmento de supermercados y el medio de transporte para la entrega programada es una motocicleta, hay un número límite de ítems que ese vehículo puede almacenar y por eso recomendamos que seleccione «ítems» como unidad. Por otro lado, si su operación tiene pocos ítems por pedido, tendrá más sentido definir «pedidos» como unidad, por ejemplo.
- **Día de la semana:** seleccione el día de la semana en que la entrega programada estará disponible. Los siguientes campos se aplicarán al día seleccionado.  
- **Capacidad de entrega**: defina cuál es el número máximo de ítems o pedidos que se pueden enviar ese día de la semana. 
- **Valor Adicional**: defina los costos logísticos adicionales que se aplican a ese día de la semana.
- **Inicio:** horario de inicio del periodo de entrega programada ese día de la semana.
- **Fin:** horario de finalización del periodo de entrega programada ese día de la semana.

