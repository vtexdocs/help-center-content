---
title: 'Registrar Feriados'
id: 2ItOthSEAoyAmcwsuiO6Yk
status: PUBLISHED
createdAt: 2018-02-07T13:04:56.796Z
updatedAt: 2023-03-29T20:13:47.518Z
publishedAt: 2023-03-29T20:13:47.518Z
firstPublishedAt: 2018-02-07T16:34:46.797Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: registrar-feriados
locale: es
legacySlug: registrar-feriados
subcategory: 6F0Qup9onmEM2wsEsEsUQa
---

La funcionalidad **Feriados** le permite configurar días que no son válidos para el envío. De esta forma, el cálculo del plazo de envio considera feriados y agrega tiempo a la estimación de envío del pedido.

## Configurar Feriados

Para configurar los feriados, siga los pasos abajo:

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Feriados**, o escribe *Feriados* en la barra de búsqueda en la parte superior de la página.  
2. En el cuadro `Nombre del feriado`, escriba el nombre del feriado que desea registrar.
3. En `Fecha de inicio`, rellene con la fecha de inicio del feriado. 
4. En `Fecha de fin`, rellene con la fecha final del feriado. 
5. Haga clic en `Guardar`.

Solo se considerarán **Feriados** para las transportadoras con la configuración que lo permita. Para que la transportadora sea elegible para la configuración de feriados, siga los pasos abajo:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.    
2. En la pestaña `Políticas de envío`, seleccione la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) asociada con la transportadora deseada.
3. En la sección **Fines de semana y feriados**, asegúrese de que la opción `Entrega feriados` esté desactivada <i class="fas fa-toggle-off"></i>.
4. Haga clic en `Guardar`.

<div class="alert alert-info">
Usted puede definir Feriados para los próximos años con antelación.
</div>

## Cómo se calcula el tiempo de envío con feriados

El cálculo del tiempo de envío de un pedido se realiza a partir de la suma de dos etapas:

- **Tiempo de despacho:** tiempo que tarda el operador de la tienda en hacer los ítems del pedido disponibles para la [transportadora](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).
- **Tiempo de entrega:** tiempo que tarda la transportadora en entregar el pedido al cliente final.

`Tiempo de despacho + Tiempo de entrega = Tiempo de envío del pedido`

Esta diferenciación es importante porque los feriados pueden tener un impacto diferente en cada etapa, como se verá a continuación.

Desde un punto de vista técnico, los feriados se consideran en la variable `shippingEstimateDate` del pedido ([orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields)) y esta variable se calcula solo después de la confirmación del pago. Es decir, es después de la confirmación del pago que se informa al cliente de la fecha estimada de envío, que, por defecto, no considera los feriados como días laborales.

### Ejemplo 1

1. Un pedido se realiza y tiene su pago confirmado el lunes (05/02), con un tiempo de envío de 2 días laborales.
2. Hay un feriado registrado el martes (06/02).
3. La fecha estimada para que el cliente reciba el pedido será el jueves (08/02), ya que el martes no se considera día laboral.

<div class="alert alert-warning">
Existe una excepción en la que el feriado registrado cuenta como día laboral: cuando el cliente realiza un pedido en un feriado y la transportadora tiene configurado el horario de envío (<a href="https://help.vtex.com/es/tutorial/carrier-working-hours--2oGpbInIgdxSWUi3TZjdCS">periodo de envío</a>) para ese mismo día.
</div>

### Ejemplo 2

1. Un pedido se realiza y tiene su pago confirmado el miércoles (02/11), con un tiempo de envío de 1 día laboral.
2. Hay un feriado registrado el miércoles (02/11).
3. La transportadora ha fijado el horario de envío para este miércoles (02/11), por lo que la fecha estimada para que el cliente reciba el pedido será el jueves (03/11). El feriado se considerará día laboral porque el envío está previsto para el mismo día en que el cliente realizó el pedido.
