---
title: Registrar Feriados 
id: 3XQS5nrVrT1obZ0K6pqnOt
status: DRAFT
createdAt: 2019-10-23T15:06:13.415Z
updatedAt: 2022-03-08T18:47:55.510Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:21:27.021Z
contentType: trackArticle
productTeam: Post-purchase
slug: registrar-feriados
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

La funcionalidad de Feriados permite que usted informe al módulo de Inventario y Envío los días que no deben tenerse en cuenta para calcular un plazo de entrega.

Digamos, por ejemplo, que el plazo de entrega normal para un pedido realizado el lunes es de 3 días. Si se registró el martes siguiente como día feriado, no entrará en el cálculo. Por lo tanto, en lugar de que su cliente vea el jueves como plazo de entrega (3 días después), verá el viernes (4 días después).

##  Configurar la Funcionalidad de Feriados

Para configurar los feriados, siga los pasos a continuación:

1. En la sección __Pedidos__ del menú lateral del Admin, haga clic en __Inventario y Envío__.
2. En las opciones que se abren, haga clic en __Feriados__.
3. En el recuadro __Nombre del Feriado__, escriba el nombre del feriado que desea registrar.
4. En __Fecha__, escriba la fecha de inicio del feriado. En __Fecha Final__, escriba la fecha de fin del feriado.
5. Haga clic en __Guardar__.

<div class="alert alert-warning">
Los feriados se considerarán apenas para las transportadoras que estén configuradas como "Transportadora	<strong>no entrega</strong> los fines de semana".
</div>

Para que la transportadora sea elegible para la funcionalidad de feriado, siga los pasos que se indican a continuación:

1. En la sección __Pedidos__ del menú lateral del Admin, haga clic en __Inventario y Envío__.
2. En las opciones que se abren, haga clic en __Estratégia de Envío__.
3. Haga clic en la __Transportadora__ deseada.
4. En la pantalla de edición, busque el título __Fines de Semana y Feriados__ (en la sección _Opciones de envío_).
5. Seleccione la opción __Transportadora no entrega los fines de semana__.
6. Haga clic en __Guardar__.

<div class="alert alert-info">
Usted puede establecer con antecedencia los feriados para los próximos años. Por ejemplo, puede crear la Navidad 2019, la Navidad 2020, etc.
</div>

## ¿Cómo se hace el cálculo?

Los feriados se considerarán en la variable `shippingEstimateDate` del  pedido. Esta variable se calcula __solamente después de confirmar el pago del pedido__. Después de la confirmación, la fecha de entrega estimada  considerando el feriado se informará a su cliente.

